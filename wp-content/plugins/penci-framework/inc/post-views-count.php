<?php

class Penci_Post_Views_Count {

	public $options;
	public static $post_types = array('post');

	public function __construct() {

		$this->options = array(
			'time'       => 0,
			'format'     => ' (%count%)',
			'in_content' => false,
			'no_members' => false,
			'no_admins'  => false,
			'post_types' => get_post_types( array(), 'names' )
		);

		add_action( 'add_meta_boxes', array( $this, 'add_meta_boxes' ) );
		add_action( 'save_post', array( $this, 'save_post' ) );

		if( get_theme_mod( 'penci_enable_ajax_view' ) ) {
			add_action( 'wp_footer', array( $this, 'ajax_footer_script' ), 999 );
			add_filter( 'query_vars', array( $this, 'ajax_query_vars' ) );
			add_action( 'wp', array( $this, 'ajax_count' ) );
		}else{
			add_filter( 'the_content', array( $this, 'pvc_main' ) );
		}

	}

	/**
	 * Adds our special query var
	 */
	function ajax_query_vars( $query_vars ) {
		$query_vars[] = 'penci_spp_count';
		$query_vars[] = 'penci_spp_post_id';

		return $query_vars;
	}

	/**
	 * Adds counting code to footer
	 */
	function ajax_footer_script() {
		if((is_single() || is_singular()) && in_array(get_post_type(get_the_ID()), $this::$post_types)) :
			?>
			<script type="text/javascript">
				function PenciSimplePopularPosts_AddCount(id, endpoint)
				{
					var xmlhttp;
					var params = "/?penci_spp_count=1&penci_spp_post_id=" + id + "&cachebuster=" +  Math.floor((Math.random() * 100000));
					// code for IE7+, Firefox, Chrome, Opera, Safari
					if (window.XMLHttpRequest)
					{
						xmlhttp=new XMLHttpRequest();
					}
					// code for IE6, IE5
					else
					{
						xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
					}
					xmlhttp.onreadystatechange=function()
					{
						if ( xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {
							var data = JSON.parse( xmlhttp.responseText );
							document.getElementsByClassName( "penci-post-countview-number" )[0].innerHTML = data.visits;
						}
					}
					xmlhttp.open("GET", endpoint + params, true);
					xmlhttp.send();
				}
				PenciSimplePopularPosts_AddCount(<?php echo get_the_ID(); ?>, '<?php echo get_site_url(); ?>');
			</script>
			<?php
		endif;
	}

	/**
	 * Count function
	 *
	 */
	function ajax_count()  {
		/**
		 * Endpoint for counting visits
		 */
		if(intval(get_query_var('penci_spp_count')) === 1 && intval(get_query_var('penci_spp_post_id')) !== 0)
		{

			//JSON response
			header('Content-Type: application/json');
			$id = intval(get_query_var('penci_spp_post_id'));
			$timings = $this->get_timings();

			foreach ( $timings as $time => $date ) {
				if ( $time != 'all' ) {
					$date = '-' . date( $date );
				}

				$meta_key = '_count-views_' . $time . $date;

				$count = (int) get_post_meta( $id, $meta_key, true );
				$count = $count + 1;
				update_post_meta( $id, $meta_key, $count );
			}

			$current_count = get_post_meta($id, '_count-views_all', true);

			echo json_encode( array( 'status' => 'OK', 'visits' => intval( $current_count ) ) );
			die();
		}
	}

	public function pvc_main( $content ) {
		if ( ! is_singular() || is_page() ) {
			return $content;
		}

		global $post;
		$options = $this->options;
		$timings = $this->get_timings();
		$bots    = array(
			'wordpress',
			'googlebot',
			'google',
			'msnbot',
			'ia_archiver',
			'lycos',
			'jeeves',
			'scooter',
			'fast-webcrawler',
			'slurp@inktomi',
			'turnitinbot',
			'technorati',
			'yahoo',
			'findexa',
			'findlinks',
			'gaisbo',
			'zyborg',
			'surveybot',
			'bloglines',
			'blogsearch',
			'pubsub',
			'syndic8',
			'userland',
			'gigabot',
			'become.com'
		);
		if ( ! ( ( $options['no_members'] == 'on' && is_user_logged_in() ) || ( $options['no_admins'] == 'on' && current_user_can( 'administrator' ) ) ) &&
		     ! empty( $_SERVER['HTTP_USER_AGENT'] ) &&
		     ( defined( 'DOING_AJAX' ) || is_singular( $this->options['post_types'] ) ) &&
		     ! preg_match( '/' . implode( '|', $bots ) . '/i', isset( $_SERVER['HTTP_USER_AGENT'] ) ? $_SERVER['HTTP_USER_AGENT'] : 'Post Views Count' )
		) {
			foreach ( $timings as $time => $date ) {
				if ( $time != 'all' ) {
					$date = '-' . date( $date );
				}

				$meta_key = '_count-views_' . $time . $date;

				$count = (int) get_post_meta( $post->ID, $meta_key, true );
				++ $count;
				update_post_meta( $post->ID, $meta_key, $count );
			}
		}

		return $content;
	}

	public function add_meta_boxes() {
		add_meta_box(
			'penci_pvc_meta_box',
			esc_html__( 'Penci Post Views Count' ),
			array( $this, 'add_meta_box' ),
			'post',
			'side'
		);
	}

	public function add_meta_box() {
		?>
		<div id="pencipvc_box">
			<?php esc_html_e( '(Click number views to edit it )', 'penci-framework' ); ?>
			<table style="width:100%">
				<?php
				global $post;
				$timings = $this->get_timings();
				foreach ( $timings as $time => $date ):
					if ( $date != '' ) {
						$date = '-' . date( $date );
					}


					$meta_key = '_count-views_' . $time . $date;

					$count    = (int) get_post_meta( $post->ID, $meta_key, true );
					$capa     = apply_filters( 'baw_count_views_capa_role', 'edit_posts' );
					if ( current_user_can( $capa, $post->ID ) ) {
						printf( '<tr>' . __(
								'<td style="width: 25px;text-transform: capitalize;">%1$s:</td> <td><span class="hide-if-no-js toggle_views penci-toggle-views" onclick="jQuery(this).hide().next(\'span\').show().find(\'input:visible\').select();" title="%4$s">%2$d</span>' .
								'<span class="hide-if-js">' .
								'<input type="hidden" name="old_views_%1$s" value="%2$d" />' .
								'<input type="hidden" name="old_views_date_%1$s" value="%3$s" />' .
								'<input onblur="jQuery(jQuery(this).parent()).hide().prev(\'span\').text(jQuery(this).val()).show();" type="number" min="0" size="2" name="new_views_%1$s" value="%2$d" />' .
								'</span> views', 'penci-framework' . '</td></tr>', 'penci-framework' ),
							esc_html( $time ), (int) $count, $date, __( 'Click to edit me!', 'penci-framework' )
						);
					}
				endforeach;
				?>
			</table>
			<label><input type="checkbox" name="pencipvc_reset" value="on"/> <?php _e( 'Check me to reset all views', 'penci-framework' ); ?></label>
			<?php wp_nonce_field( 'pencipvc-reset_' . $post->ID, 'pencipvc_reset_nonce', true, true ); ?>
		</div>
		<style>.penci-toggle-views {
				cursor: pointer;
				padding: 0 5px;
				background: #ebebeb;
			}</style>
		<?php
	}

	function save_post() {
		$capa = 'edit_posts';
		if ( isset( $_POST['pencipvc_reset_nonce'], $_POST['post_ID'] ) && current_user_can( $capa, (int) $_POST['post_ID'] ) && (int) $_POST['post_ID'] > 0 ):
			check_admin_referer( 'pencipvc-reset_' . $_POST['post_ID'], 'pencipvc_reset_nonce' );
			global $wpdb;
			$timings = $this->get_timings();
			if ( isset( $_POST['pencipvc_reset'] ) && $_POST['pencipvc_reset'] == 'on' ):
				$wpdb->query( 'DELETE FROM ' . $wpdb->postmeta . ' WHERE post_id = ' . (int) $_POST['post_ID'] . ' AND meta_key LIKE "_count-views%"' );

				return;
			endif;
			foreach ( $timings as $time => $date ):
				$date = isset( $_POST[ 'old_views_date_' . $time ] ) ? $_POST[ 'old_views_date_' . $time ] : '';
				if ( isset( $_POST[ 'old_views_date_' . $time ], $_POST[ 'old_views_' . $time ], $_POST[ 'new_views_' . $time ] ) && (int) $_POST[ 'old_views_' . $time ] != (int) $_POST[ 'new_views_' . $time ] ) {
					if ( (int) $_POST[ 'new_views_' . $time ] == 0 ) {
						delete_post_meta( (int) $_POST['post_ID'], '_count-views_' . $time . $date );
					} else {
						update_post_meta( (int) $_POST['post_ID'], '_count-views_' . $time . $date, (int) $_POST[ 'new_views_' . $time ] );
					}
				}
			endforeach;
		endif;
	}

	function get_timings() {
		return array( 'all' => '', 'day' => 'Ymd', 'week' => 'YW', 'month' => 'Ym', 'year' => 'Y' );
	}

}

new Penci_Post_Views_Count;


if ( ! function_exists( 'penciframework_get_post_countview' ) ) {
	function penciframework_get_post_countview( $post_id, $show = false ) {
		return function_exists( 'penci_get_post_countview' ) ? penci_get_post_countview( $post_id, $show ) : 0;
	}
}
