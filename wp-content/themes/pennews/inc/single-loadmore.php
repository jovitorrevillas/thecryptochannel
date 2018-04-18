<?php

class Penci_Auto_Load_Previous_Post {

	public function __construct() {
		add_action( 'wp_ajax_nopriv_penci_single_load_more', array( $this, 'penci_single_load_more_callback' ) );
		add_action( 'wp_ajax_penci_single_load_more', array( $this, 'penci_single_load_more_callback' ) );
	}

	public function penci_single_load_more_callback() {

		$article = '';

		if ( isset( $_POST['_wpnonce'] ) ) {
			return;
		}

		$post_id = isset( $_POST['postid'] ) ? $_POST['postid'] : '';

		if ( empty( $post_id ) ) {
			return;
		}

		$postidloaded = isset( $_POST['postidloaded'] ) ? $_POST['postidloaded'] : '';
		$offset       = isset( $_POST['offset'] ) ? $_POST['offset'] : '';

		$posts_per_page   = penci_get_setting( 'penci_autoload_prev_number' );
		$autoload_prev_by = penci_get_setting( 'penci_autoload_prev_by' );

		$args = array(
			'posts_per_page'      => $posts_per_page,
			'ignore_sticky_posts' => 1,

		);
		if ( 'cat' == $autoload_prev_by ) {
			$categories = get_the_category( $post_id );
			if ( $categories ) {
				$category_ids = array();
				foreach ( $categories as $individual_category ) {
					$category_ids[] = $individual_category->term_id;
				}

				$args['category__in'] = $category_ids;
				$args['post__not_in'] = $post_id;
				$args['offset'] =  $offset;
			}

		} else {
			$post_current = get_post( $post_id );
			$post_ids     = $this->get_post_siblings( $posts_per_page, $offset, $post_current->post_date );
			$args['post__in'] = $post_ids;
		}

		$loadmore_query = new WP_Query( $args );

		ob_start();

		if ( $loadmore_query->have_posts() ) {
			while ( $loadmore_query->have_posts() ) {
				$loadmore_query->the_post();
				get_template_part( 'template-parts/content', 'single-loadmore' );
			}
			wp_reset_postdata();
		}

		$article = ob_get_contents();
		ob_end_clean();

		wp_send_json_success( $article );
	}

	/**
	 * Get post siblings
	 *
	 * @param int $ppp
	 * @param int $offset
	 * @param string $date
	 *
	 * @return array|null|object|void
	 */
	function get_post_siblings( $ppp = 3, $offset = 0, $date = '' ) {
		global $wpdb, $post;

		if ( empty( $date ) ) {
			$date = $post->post_date;
		}
		//$date = '2009-06-20 12:00:00'; // test data

		$ppp = absint( $ppp );
		if ( ! $ppp ) {
			return;
		}

		$limit = '';
		if ( $offset && is_numeric( $offset ) ) {
			$limit .= absint( $offset ) . ', ';
		}

		$limit .= $ppp;

		$pre_post_ids = array();

		$post_ids = $wpdb->get_results( "(
		        SELECT p1.ID
		        FROM 
		            $wpdb->posts p1 
		        WHERE 
		            p1.post_date < '$date' AND 
		            p1.post_type = 'post' AND 
		            p1.post_status = 'publish' 
		        ORDER by 
		            p1.post_date DESC
		        LIMIT 
		            $limit
		    )" );

		foreach ( $post_ids as $post_id ) {
			if ( isset( $post_id->ID ) ) {
				$pre_post_ids[] = $post_id->ID;
			}
		}

		return $pre_post_ids;
	}

	public static function comments_template( $file = '/comments.php', $separate_comments = false ) {
		global $wp_query, $withcomments, $post, $wpdb, $id, $comment, $user_login, $user_ID, $user_identity, $overridden_cpage;


		if ( empty( $post ) ) {
			return;
		}


		if ( empty( $file ) ) {
			$file = '/comments.php';
		}

		$req = get_option( 'require_name_email' );

		/*
		 * Comment author information fetched from the comment cookies.
		 */
		$commenter = wp_get_current_commenter();

		/*
		 * The name of the current comment author escaped for use in attributes.
		 * Escaped by sanitize_comment_cookies().
		 */
		$comment_author = $commenter['comment_author'];

		/*
		 * The email address of the current comment author escaped for use in attributes.
		 * Escaped by sanitize_comment_cookies().
		 */
		$comment_author_email = $commenter['comment_author_email'];

		/*
		 * The url of the current comment author escaped for use in attributes.
		 */
		$comment_author_url = esc_url( $commenter['comment_author_url'] );

		$comment_args = array(
			'orderby'                   => 'comment_date_gmt',
			'order'                     => 'ASC',
			'status'                    => 'approve',
			'post_id'                   => $post->ID,
			'no_found_rows'             => false,
			'update_comment_meta_cache' => false, // We lazy-load comment meta for performance.
		);

		if ( get_option( 'thread_comments' ) ) {
			$comment_args['hierarchical'] = 'threaded';
		} else {
			$comment_args['hierarchical'] = false;
		}

		if ( $user_ID ) {
			$comment_args['include_unapproved'] = array( $user_ID );
		} elseif ( ! empty( $comment_author_email ) ) {
			$comment_args['include_unapproved'] = array( $comment_author_email );
		}

		$per_page = 0;
		if ( get_option( 'page_comments' ) ) {
			$per_page = (int) get_query_var( 'comments_per_page' );
			if ( 0 === $per_page ) {
				$per_page = (int) get_option( 'comments_per_page' );
			}

			$comment_args['number'] = $per_page;
			$page                   = (int) get_query_var( 'cpage' );

			if ( $page ) {
				$comment_args['offset'] = ( $page - 1 ) * $per_page;
			} elseif ( 'oldest' === get_option( 'default_comments_page' ) ) {
				$comment_args['offset'] = 0;
			} else {
				// If fetching the first page of 'newest', we need a top-level comment count.
				$top_level_query = new WP_Comment_Query();
				$top_level_args  = array(
					'count'   => true,
					'orderby' => false,
					'post_id' => $post->ID,
					'status'  => 'approve',
				);

				if ( $comment_args['hierarchical'] ) {
					$top_level_args['parent'] = 0;
				}

				if ( isset( $comment_args['include_unapproved'] ) ) {
					$top_level_args['include_unapproved'] = $comment_args['include_unapproved'];
				}

				$top_level_count = $top_level_query->query( $top_level_args );

				$comment_args['offset'] = ( ceil( $top_level_count / $per_page ) - 1 ) * $per_page;
			}
		}

		/**
		 * Filters the arguments used to query comments in comments_template().
		 *
		 * @since 4.5.0
		 *
		 * @see WP_Comment_Query::__construct()
		 *
		 * @param array $comment_args {
		 *     Array of WP_Comment_Query arguments.
		 *
		 * @type string|array $orderby Field(s) to order by.
		 * @type string $order Order of results. Accepts 'ASC' or 'DESC'.
		 * @type string $status Comment status.
		 * @type array $include_unapproved Array of IDs or email addresses whose unapproved comments
		 *                                                   will be included in results.
		 * @type int $post_id ID of the post.
		 * @type bool $no_found_rows Whether to refrain from querying for found rows.
		 * @type bool $update_comment_meta_cache Whether to prime cache for comment meta.
		 * @type bool|string $hierarchical Whether to query for comments hierarchically.
		 * @type int $offset Comment offset.
		 * @type int $number Number of comments to fetch.
		 * }
		 */
		$comment_args  = apply_filters( 'comments_template_query_args', $comment_args );
		$comment_query = new WP_Comment_Query( $comment_args );
		$_comments     = $comment_query->comments;

		// Trees must be flattened before they're passed to the walker.
		if ( $comment_args['hierarchical'] ) {
			$comments_flat = array();
			foreach ( $_comments as $_comment ) {
				$comments_flat[]  = $_comment;
				$comment_children = $_comment->get_children( array(
					'format'  => 'flat',
					'status'  => $comment_args['status'],
					'orderby' => $comment_args['orderby']
				) );

				foreach ( $comment_children as $comment_child ) {
					$comments_flat[] = $comment_child;
				}
			}
		} else {
			$comments_flat = $_comments;
		}

		/**
		 * Filters the comments array.
		 *
		 * @since 2.1.0
		 *
		 * @param array $comments Array of comments supplied to the comments template.
		 * @param int $post_ID Post ID.
		 */
		$wp_query->comments = apply_filters( 'comments_array', $comments_flat, $post->ID );

		$comments                        = &$wp_query->comments;
		$wp_query->comment_count         = count( $wp_query->comments );
		$wp_query->max_num_comment_pages = $comment_query->max_num_pages;

		if ( $separate_comments ) {
			$wp_query->comments_by_type = separate_comments( $comments );
			$comments_by_type           = &$wp_query->comments_by_type;
		} else {
			$wp_query->comments_by_type = array();
		}

		$overridden_cpage = false;
		if ( '' == get_query_var( 'cpage' ) && $wp_query->max_num_comment_pages > 1 ) {
			set_query_var( 'cpage', 'newest' == get_option( 'default_comments_page' ) ? get_comment_pages_count() : 1 );
			$overridden_cpage = true;
		}

		if ( ! defined( 'COMMENTS_TEMPLATE' ) ) {
			define( 'COMMENTS_TEMPLATE', true );
		}

		$style_sheet_path = get_stylesheet_directory();
		$template_path    = get_template_directory();

		$theme_template = $style_sheet_path . $file;
		/**
		 * Filters the path to the theme template file used for the comments template.
		 *
		 * @since 1.5.1
		 *
		 * @param string $theme_template The path to the theme template file.
		 */
		$include = apply_filters( 'comments_template', $theme_template );
		if ( file_exists( $include ) ) {
			require( $include );
		} elseif ( file_exists( $template_path . $file ) ) {
			require( $template_path . $file );
		} else // Backward compat code will be removed in a future release
		{
			require( ABSPATH . WPINC . '/theme-compat/comments.php' );
		}
	}
}

new Penci_Auto_Load_Previous_Post();

