<?php
class Penci_Framework_Social_Api {

	private static $caching_time = 10800;  // cache expire time - default 10800 = 3 hours

	public function get_url_wordpress( $url ) {

		$response = wp_remote_get( $url, array(
			'timeout'    => 10,
			'sslverify'  => false,
			'user-agent' => 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:35.0) Gecko/20100101 Firefox/35.0'
		) );

		if ( is_wp_error( $response ) ) {
			return false;
		}

		$penci_request_result = wp_remote_retrieve_body( $response );

		if ( empty( $penci_request_result ) ) {
			return false;
		}

		return $penci_request_result;
	}

	private function get_url( $url ) {
		return $this->get_url_wordpress( $url );
	}

	private function get_json( $url ) {
		return json_decode( $this->get_url( $url ), true );
	}

	/**
	 * Extract numbers from string
	 *
	 * @param $penci_string
	 * @return string
	 */
	private function extract_numbers_from_string( $penci_string ) {
		$output = '';
		foreach ( str_split( $penci_string ) as $penci_char ) {
			if ( is_numeric( $penci_char ) ) {
				$output .= $penci_char;
			}
		}

		return $output;
	}

	public function get_social_counter( $service_id,$user_id, $atts ) {
		$count = 0;
		$cache_period = self::$caching_time;

		switch ( $service_id ) {
			case 'facebook':
				$count = $this->get_social_counter_facebook( $user_id, $cache_period, $atts );
				break;
			case 'twitter':
				$count = $this->get_social_counter_twitter( $user_id, $cache_period, $atts );
				break;

			case 'youtube':
				$count = $this->get_social_counter_youtube( $user_id, $cache_period );
				break;

			case 'vimeo':
				$count = $this->get_social_counter_vimeo( $user_id, $cache_period );
				break;

			case 'google':
				$count = $this->get_social_counter_googleplus( $user_id, $cache_period );
				break;
			case 'pinterest':

				$count = $this->get_social_counter_pinterest( $user_id, $cache_period );
				break;

			case 'instagram':
				$count  = $this->get_social_counter_instagram( $user_id, $cache_period, $atts );
				break;
			case 'github':
				$count  = $this->get_social_counter_github( $user_id, $cache_period );
				break;

			case 'soundcloud':
				$github_count = get_transient( 'penci_counter_soundcloud' );
				if ( false === $github_count ) {

					$soundcloud_client_id = $atts['soundcloud_client_id'];

					$penci_data = @$this->get_json( "http://api.soundcloud.com/users/$user_id.json?client_id=$soundcloud_client_id" );
					if ( ! empty( $penci_data['followers_count'] ) ) {
						$count = (int) $penci_data['followers_count'];
					}
					set_transient( 'penci_counter_soundcloud', $count, $cache_period );
				} else {
					$count = $github_count;
				}

				break;

			case 'rss':
				$count = (int) $user_id;
				break;
		}

		return $count;
	}

	public function get_social_counter_pinterest( $user_id, $cache_period ) {
		$count = 0;

		$pinterest_count = get_transient( 'penci_counter__pinterest' );
		if ( false === $pinterest_count ) {

			try {
				$get_request = wp_remote_get( "https://www.pinterest.com/$user_id/", array( 'timeout' => 18, 'sslverify' => false ) );
				$html        = wp_remote_retrieve_body( $get_request );

				$doc         = new DOMDocument();
				@$doc->loadHTML( $html );
				$metas = $doc->getElementsByTagName( 'meta' );
				for ( $i = 0; $i < $metas->length; $i ++ ) {
					$meta = $metas->item( $i );
					if ( $meta->getAttribute( 'name' ) == 'pinterestapp:followers' ) {
						$count = $meta->getAttribute( 'content' );
						break;
					}
				}

			} catch ( Exception $e ) {
				$count = 0;
			}

			set_transient( 'penci_counter__pinterest', $count, $cache_period );
		} else {
			$count = $pinterest_count;
		}

		return $count;
	}

	public function get_social_counter_github( $user_id, $cache_period ) {

		$github_count = get_transient( 'penci_counter_github' );
		if ( false === $github_count ) {
			$penci_data = @$this->get_json( "https://api.github.com/users/$user_id" );
			$count      = isset( $penci_data['followers'] ) ? intval( $penci_data['followers'] ) : 0;

			set_transient( 'penci_counter_github', $count, $cache_period );
		} else {
			$count = $github_count;
		}

		return $count;
	}

	public function get_social_counter_vimeo( $user_id, $cache_period ) {

		$vimeo_count = get_transient( 'penci_counter__vimeo' );
		if ( false === $vimeo_count ) {
			$penci_data = @$this->get_json( "http://vimeo.com/api/v2/channel/$user_id/info.json" );
			$count      = isset( $penci_data['total_subscribers'] ) ? intval( $penci_data['total_subscribers'] ) : 0;

			set_transient( 'penci_counter__vimeo', $count, $cache_period );
		} else {
			$count = $vimeo_count;
		}

		return $count;
	}

	public function get_social_counter_instagram( $user_id, $cache_period, $atts ){

		$instagram_count = get_transient( 'penci_counter__instagram' );
		if ( false === $instagram_count ) {
			$access_token = $atts['instagram_access_token'];

			$api_url    = 'https://api.instagram.com/v1/users/self/?access_token=' . $access_token;
			$params     = array(
				'sslverify' => false,
				'timeout'   => 60
			);
			$connection = wp_remote_get( $api_url, $params );
			if ( is_wp_error( $connection ) ) {
				$count = 0;
			} else {
				$response = json_decode( $connection['body'], true );
				if (
					isset( $response['meta']['code'] ) && 200 == $response['meta']['code'] && isset( $response['data']['counts']['followed_by'] )
				) {
					$count = ( intval( $response['data']['counts']['followed_by'] ) );
				} else {
					$count = 0;
				}
			}

			set_transient( 'penci_counter__instagram', $count, $cache_period );

		} else {
			$count = $instagram_count;
		}

		return $count;
	}


	public function get_social_counter_googleplus( $user_id, $cache_period ){
		$count  = 0;
		$googleplus = get_transient( 'penci_counter_googleplus' );

		if ( false === $googleplus ) {
			$penci_data = @$this->get_json( "https://www.googleapis.com/plus/v1/people/$user_id?key=AIzaSyCaAH56Eueojnrznl39H0AqXowespGuWEM" );
			if ( ! empty( $penci_data['circledByCount'] ) ) {
				$count = (int) $penci_data['circledByCount'];
			} else {
				$penci_data = @$this->get_url( "https://plus.google.com/$user_id/posts" );
				$pattern    = "/<span role=\"button\" class=\"d-s o5a\" tabindex=\"0\">(.*?)<\/span>/";
				preg_match( $pattern, $penci_data, $matches );
				if ( ! empty( $matches[1] ) ) {
					$expl_maches = explode( ' ', trim( $matches[1] ) );
					$count = str_replace( array( '.', ',' ), array( '' ), $expl_maches[0] );
				}
			}
			set_transient( 'penci_counter_googleplus', $count, $cache_period );

		} else {
			$count = $googleplus;
		}
		return $count;
	}

	public function get_social_counter_youtube( $user_id, $cache_period ){
		$youtube_count = get_transient( 'penci_counter_youtube' );
		$count = 0;
		if ( false === $youtube_count ) {

			$url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&key=AIzaSyBqKo542QYt8lixFlaHSl5FIrc_crd2p-I";

			$search_id = str_replace( "channel/", "", $user_id );

			if ( strpos( $user_id, "channel/" ) === 0 ) {
				$url .= "&id=$search_id";
			} else {
				$url .= "&forUsername=$search_id";
			}

			$penci_data = $this->get_json( $url );

			$subscriberCount = isset( $penci_data['items'][0]['statistics']['subscriberCount'] ) ? $penci_data['items'][0]['statistics']['subscriberCount'] : '';

			if ( ! empty( $subscriberCount ) ) {
				$count = (int) $subscriberCount;
			}

			set_transient( 'penci_counter_youtube', $count, $cache_period );

		} else {
			$count = $youtube_count;
		}

		return $count;
	}

	/**
	 * Get counter twitter
	 *
	 * @param $user_id
	 * @param $cache_period
	 * @param $atts
	 *
	 * @return int|mixed
	 */
	public function get_social_counter_twitter( $user_id, $cache_period, $atts ){

		$twitter_count = get_transient( 'penci_counter_twitter' );

		if ( false === $twitter_count ) {

			$twitter_worked = false;

			// Check 1 via https
			$penci_data = $this->get_url( "https://twitter.com/$user_id" );

			if ( $penci_data !== false ) {
				$pattern = "/title=\"(.*)\"(.*)data-nav=\"followers\"/i";
				preg_match_all( $pattern, $penci_data, $matches );
				if ( ! empty( $matches[1][0] ) ) {
					$penci_counter_fix = $this->extract_numbers_from_string( htmlentities( $matches[1][0] ) );

					$count = (int) $penci_counter_fix;

					if ( ! empty( $count ) and is_numeric( $count ) ) {
						$twitter_worked = true;
					}
				}
			}

			if ( $twitter_worked === false ) {
				if ( ! class_exists( 'TwitterApiClient' ) ) {
					require_once 'twitter-client.php';
					$Client = new TwitterApiClient;
					$Client->set_oauth( YOUR_CONSUMER_KEY, YOUR_CONSUMER_SECRET, SOME_ACCESS_KEY, SOME_ACCESS_SECRET );
					try {
						$path = 'users/show';
						$args = array( 'screen_name' => $user_id );
						$data = @$Client->call( $path, $args, 'GET' );
						if ( ! empty( $data['followers_count'] ) ) {
							$count = (int) $data['followers_count'];  //set the buffer
						}
					} catch ( TwitterApiException $Ex ) {
					}
				}
			}

			set_transient( 'penci_counter_twitter', $count, $cache_period );

		} else {
			$count = $twitter_count;
		}


		return $count;
	}

	/**
	 * Get counter facebook
	 * @param $page_id
	 * @param $cache_period
	 * @param $atts
	 *
	 * @return int|mixed|string
	 */
	public function get_social_counter_facebook( $page_id,$cache_period, $atts ) {
		$facebook_count = get_transient( 'penci_counter_facebook' );

		if ( false === $facebook_count ) {
			if ( ! empty( $atts['facebook_app_id'] ) && ! empty( $atts['facebook_app_secret'] ) ) {
				$count = $this->new_fb_count( $atts );
			} else {
				$api_url = 'https://www.facebook.com/' . $page_id;
				$count   = $this->facebook_count( $api_url );
			}
			set_transient( 'penci_counter_facebook', $count, $cache_period );

		} else {
			$count = $facebook_count;
		}

		if ( $count != 0 ) {
			set_transient( 'penci_counter_facebook', $count, $cache_period );
		}

		return $count;
	}

	public function facebook_count( $url ) {

		// Query in FQL
		$fql = "SELECT like_count ";
		$fql .= " FROM link_stat WHERE url = '$url'";

		$fqlURL = "https://api.facebook.com/method/fql.query?format=json&query=" . urlencode( $fql );

		// Facebook Response is in JSON
		$response = wp_remote_get( $fqlURL );
		$response = isset( $response['body'] ) ? json_decode( $response['body'] ) : '';
		if ( is_array( $response ) && isset( $response[0]->like_count ) ) {
			return $response[0]->like_count;
		} else {
			$count = '0';

			return $count;
		}


	}

	/**
	 * Get Facebook Access Token
	 * */
	public function get_fb_access_token( $atts ) {
		$api_url       = 'https://graph.facebook.com/';
		$url           = sprintf(
			'%soauth/access_token?client_id=%s&client_secret=%s&grant_type=client_credentials',
			$api_url,
			$atts['facebook_app_id'],
			$atts['facebook_app_secret']
		);
		$access_token  = wp_remote_get( $url, array( 'timeout' => 60 ) );
		if ( is_wp_error( $access_token ) || ( isset( $access_token['response']['code'] ) && 200 != $access_token['response']['code'] ) ) {
			return '';
		} else {
			return sanitize_text_field( $access_token['body'] );
		}
	}

	/**
	 * Get New Facebook Count
	 * */
	function new_fb_count( $atts ) {
		$access_token = $this->get_fb_access_token( $atts );
		$access_token = json_decode( $access_token );
		$access_token = $access_token->access_token;
		$api_url      = 'https://graph.facebook.com/v2.6/';
		$url          = sprintf( '%s%s?fields=fan_count&access_token=%s', $api_url, $atts['facebook'], $access_token );

		$connection = wp_remote_get( $url, array( 'timeout' => 60 ) );

		if ( is_wp_error( $connection ) || ( isset( $connection['response']['code'] ) && 200 != $connection['response']['code'] ) ) {
			$total = 0;
		} else {
			$_data = json_decode( $connection['body'], true );

			if ( isset( $_data['fan_count'] ) ) {
				$count = intval( $_data['fan_count'] );

				$total = $count;
			} else {
				$total = 0;
			}
		}

		return $total;
	}
}