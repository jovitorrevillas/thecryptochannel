<?php
/**
 * Custom functions that act independently of the theme templates
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package PenNews
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 *
 * @return array
 */
function penci_body_classes( $classes ) {
	// Adds a class of group-blog to blogs with more than 1 published author.
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	if( ! penci_get_setting( 'penci_hide_header_sticky' ) ) {
		if( ! isset( $_GET['vc_editable'] ) || ( isset( $_GET['vc_editable'] ) && 'true' !== $_GET['vc_editable'] ) ) {
			$classes[] = 'header-sticky';
		}
	}
	if( penci_get_setting( 'penci_enable_header_tran' ) ) {
		$classes[] = 'penci-header-transparent';
	}

	if( penci_get_setting( 'penci_enable_ajaxsearch' ) ) {
		$classes[] = 'penci_enable_ajaxsearch';
	}

	if ( penci_get_setting( 'penci_smooth_scroll' ) ) {
		$classes[] = 'penci_smooth_scroll';
	}

	if ( penci_get_setting( 'penci_enable_retina' ) ) {
		$classes[] = 'penci_enable_retina';
	}


	if( ! penci_get_setting( 'penci_sticky_content_sidebar' ) ) {

		if( ! isset( $_GET['vc_editable'] ) || ( isset( $_GET['vc_editable'] ) && 'true' !== $_GET['vc_editable'] ) ) {
				$classes[] = 'penci_sticky_content_sidebar';
		}
		
	}

	if ( penci_get_setting( 'penci_dis_padding_block_widget' ) ) {
		$classes[] = 'penci_dis_padding_bw';
	}


	if ( 'dark' == penci_get_setting( 'penci_colorscheme' ) ) {
		$classes[] = 'penci_dark_layout';
	}

	if( is_home() ) {
		$classes[] = penci_get_setting( 'penci_home_layout_style' );
	}elseif ( is_category() ) {
		$classes[] = penci_get_setting( 'penci_cat_layout_style' );
	}elseif ( is_archive() || is_search() ) {
		$classes[] = penci_get_setting( 'penci_archive_layout_style' );
	}
	if ( function_exists( 'is_shop' ) && ( is_shop() || is_product_category() || is_product_tag() ) ) {
		$classes[] = penci_get_setting( 'penci_woo_sidebar_shop' );
	}elseif ( is_singular( 'tribe_events' ) ) {
		$classes[] = penci_get_setting( 'penci_event_single_sidebar' );
	}elseif ( is_post_type_archive( 'tribe_events' )  ) {
		$classes[] = penci_get_setting( 'penci_event_sidebar' );
	}elseif ( is_singular( 'product' ) ) {
		$classes[] = penci_get_setting( 'penci_woo_sidebar_product' );
	}elseif ( is_singular( 'portfolio' ) ) {

		$portfolio_sidebar_layout = penci_get_setting( 'penci_portfolio_sidebar' );

		$pfl_single_use_option_current  = get_post_meta( get_the_ID(), 'penci_pfl_use_opt_current_page', true );
		$pre_portfolio_sidebar_layout   = get_post_meta( get_the_ID(), 'penci_pfl_sidebar_pos', true );

		if( $pfl_single_use_option_current ){
			$portfolio_sidebar_layout = $pre_portfolio_sidebar_layout;
		}

		$classes[] =  $portfolio_sidebar_layout;

	}elseif ( is_post_type_archive( 'portfolio' ) || is_tax( 'portfolio-category' ) ) {

		$portfolio_sidebar_layout = penci_get_setting( 'penci_pfl_archive_sidebar' );
		$classes[] =  $portfolio_sidebar_layout;

	}elseif ( function_exists( 'is_buddypress' ) && is_buddypress() ) {
		$classes[] = penci_get_setting( 'penci_buddypress_sidebar' );
	}elseif ( function_exists( 'is_bbpress' ) && is_bbpress() ) {
		$classes[] = penci_get_setting( 'penci_bbpress_sidebar' );
	}elseif( is_page() ) {

		$paged  = class_exists( 'Penci_Pagination' ) ? Penci_Pagination::get_current_paged() : 1;
		if( $paged > 1 && is_page_template( 'page-templates/full-width.php' ) ){

			$block_pag_sidebar_layout   = penci_get_setting( 'penci_block_pag_sidebar_layout' );
			$block_pag_sidebar_left_id  = penci_get_setting( 'penci_block_pag_custom_sidebar_left' );
			$block_pag_sidebar_right_id = penci_get_setting( 'penci_block_pag_custom_sidebar_right' );

			$classes[] =  $block_pag_sidebar_layout;

			$classes[] = penci_get_setting( 'penci_block_pag_layout_style' );
			$classes[] = 'blog penci-block-pagination';
		}else{
			 $page_sidebar_layout = penci_get_setting( 'penci_page_sidebar_layout' );
			 $page_sidebar_left_id = penci_get_setting( 'penci_page_custom_sidebar_left' );
             $page_sidebar_right_id = penci_get_setting( 'penci_page_custom_sidebar_right' );


			$pre_page_sidebar_layout  = get_post_meta( get_the_ID(), 'page_sidebar_pos', true );
			$page_use_option_current  = get_post_meta( get_the_ID(), 'penci_use_option_current_page', true );

			if( ! empty( $page_use_option_current ) && $pre_page_sidebar_layout ) {
				$page_sidebar_layout = $pre_page_sidebar_layout;
			}

			if( is_page_template( 'default' ) ) {
				$classes[] = $page_sidebar_layout;

				$page_style = penci_get_setting( 'penci_page_template' );
				$pre_page_style  = get_post_meta( get_the_ID(), 'page_template_layout', true );
				if( ! empty( $page_use_option_current ) && $pre_page_style ) {
					$page_style = $pre_page_style;
				}
				$classes[] = 'penci-page-' . $page_style;
			}
		}
	}elseif ( is_archive() || is_home() || is_search() ) {
		$archive_sidebar_layout = penci_get_setting( 'penci_archive_sidebar_layout' );
		$archive_sidebar_left_id = penci_get_setting( 'penci_archive_custom_sidebar_left' );
		$archive_sidebar_right_id = penci_get_setting( 'penci_archive_custom_sidebar_right' );

		$classes[] =  $archive_sidebar_layout;

	}elseif ( is_singular() ) {

		$single_sidebar_layout = penci_get_setting( 'penci_single_sidebar_layout' );
		$single_sidebar_right_id = penci_get_setting( 'penci_single_custom_sidebar_right' );
		$single_sidebar_left_id = penci_get_setting( 'penci_single_custom_sidebar_left' );
		$single_template = penci_get_setting( 'penci_single_template' );

		$single_use_option_current  = get_post_meta( get_the_ID(), 'penci_use_option_current_single', true );
		$pre_single_sidebar_layout  = get_post_meta( get_the_ID(), 'single_sidebar_pos', true );
		$pre_single_template        = get_post_meta( get_the_ID(), 'single_template_layout', true );

		if( $single_use_option_current ) {
			if( $pre_single_sidebar_layout ) {
				$single_sidebar_layout = $pre_single_sidebar_layout;
			}

			if( $pre_single_template  ) {
				$single_template = $pre_single_template ;
			}
		}

		$single_sidebar_layout = apply_filters( 'penci_single_sidebar_layout_hook', $single_sidebar_layout );

		$classes[] =  $single_sidebar_layout;

		$classes[] = 'penci-single-' . $single_template;
	}

	if( is_single() ) {
		$single_loadmore = penci_get_setting( 'penci_auto_load_prev_post' );

		if ( $single_loadmore ) {
			$classes[] = 'penci-autoload-prev';
		}
	}

	if( is_singular() || is_page() ) {
		$caption_above_img = penci_get_setting( 'penci_caption_above_img' );

		if ( $caption_above_img ) {
			$classes[] = 'penci-caption-above-img';
		}
	}

	return $classes;
}

add_filter( 'body_class', 'penci_body_classes' );

/**
 * Adds custom classes to the array of posts classes.
 *
 * @param array $classes Classes for the body element.
 *
 * @return array
 */
function penci_post_classes( $classes, $class, $post_id ) {
	$post = get_post( $post_id );

	if( 'post' == $post->post_type || 'page' == $post->post_type ) {
		$classes[] = 'penci-post-item';
	}

	return $classes;
}
add_filter( 'post_class', 'penci_post_classes',10,3 );

/**
 * Add a pingback url auto-discovery header for singularly identifiable articles.
 */
function penci_pingback_header() {
	if ( is_singular() && pings_open() ) {
		echo '<link rel="pingback" href="', esc_url( get_bloginfo( 'pingback_url' ) ), '">';
	}
}
add_action( 'wp_head', 'penci_pingback_header' );

function penci_check_active_sidebar( $pos ) {
	$output = true;

	$id_option = '';

	if ( is_page() ) {
		$id_option = 'penci_page_sidebar_layout';

	}elseif ( is_archive() || is_home() || is_search() ) {

		$id_option = 'penci_archive_sidebar_layout';

		$paged  = class_exists( 'Penci_Pagination' ) ? Penci_Pagination::get_current_paged() : 1;

		if( $paged > 1 && is_page_template( 'page-templates/full-width.php' ) ){
			$id_option = 'penci_block_pag_sidebar_layout';
		}

	}
	elseif ( is_singular() ) {
		$id_option = 'penci_single_sidebar_layout';
	}

	if ( empty( $id_option ) ) {
		return $output;
	}


	$sidebar_layout = penci_get_setting( $id_option );

	if ( is_page() ) {
		$pre_page_sidebar_layout  = get_post_meta( get_the_ID(), 'page_sidebar_pos', true );
		$page_use_option_current  = get_post_meta( get_the_ID(), 'penci_use_option_current_page', true );

		if( ! empty( $page_use_option_current ) && $pre_page_sidebar_layout ) {
				$sidebar_layout = $pre_page_sidebar_layout;
		}
	}elseif( is_singular() ){
		$pre_single_sidebar_layout  = get_post_meta( get_the_ID(), 'single_sidebar_pos', true );
		$single_use_option_current  = get_post_meta( get_the_ID(), 'penci_use_option_current_single', true );

		if( $single_use_option_current && $pre_single_sidebar_layout ) {
			$sidebar_layout = $pre_single_sidebar_layout;
		}

		$sidebar_layout = apply_filters( 'penci_single_sidebar_layout_hook', $sidebar_layout );
	}

	if ( 'right' == $pos ) {
		if ( in_array( $sidebar_layout, array( 'no-sidebar','no-sidebar-wide','no-sidebar-1080','sidebar-left'  ) ) ) {
			$output = false;
		}
	}
	elseif ( 'left' == $pos ) {

		if ( in_array( $sidebar_layout, array( 'no-sidebar','no-sidebar-wide','no-sidebar-1080','sidebar-right'  ) ) ) {
			$output = false;
		}
	}

	return $output;
}


function penci_block_pag_check_active_sidebar( $sidebar ) {
	$output = true;

	$sidebar_layout = penci_get_setting( 'penci_block_pag_sidebar_layout' );

	if ( 'right' == $sidebar ) {
		if ( in_array( $sidebar_layout, array( 'no-sidebar','no-sidebar-wide','sidebar-left'  ) ) ) {
			$output = false;
		}
	}
	elseif ( 'left' == $sidebar ) {

		if ( in_array( $sidebar_layout, array( 'no-sidebar','no-sidebar-wide','sidebar-right'  ) ) ) {
			$output = false;
		}
	}

	return $output;
}

add_filter( 'widget_tag_cloud_args', 'penci_tag_cloud_args' );
add_filter( 'woocommerce_product_tag_cloud_widget_args', 'penci_tag_cloud_args' );

/**
 * Change the tag could args
 *
 * @param $args
 *
 * @return mixed
 *
 */
function penci_tag_cloud_args( $args ) {
	$args['largest']  = 10; //largest tag
	$args['smallest'] = 10; //smallest tag
	$args['unit']     = 'px'; //tag font unit

	return $args;
}

/**
 * Social buttons class.
 */

function penci_get_social_share( $show =  true, $popup = false ) {

	$output =  '<span class="social-buttons">';
	$output .=  '<span class="social-buttons__content">';

	$list_social = array( 'facebook', 'twitter', 'google_plus', 'pinterest', 'linkedin', 'tumblr', 'reddit', 'stumbleupon','whatsapp','telegram','email' );

	foreach ( $list_social as $k => $item ) {
		if ( penci_get_setting( 'penci_hide_block_share_' . $item ) ) {
			unset( $list_social[ $k ] );
		}
	}

	$output .= Penci_Social_Share::get_social_share( $list_social, $echo = false, $show_count = false );



	$output .= '</span>';

	if( $popup ) {
		$output .= '<a class="social-buttons__toggle" href="#"><i class="fa fa-share"></i></a>';
	}

	$output .= '</span>';

	if( ! $show ) {

		return $output;
	}

	echo ( $output );


}

/**
 * Fallback when menu location is not checked
 * Callback function in wp_nav_menu() on header.php
 *
 * @since 1.0
 */
function penci_menu_fallback() {
	if ( ! current_user_can( 'manage_options' ) ) {
		wp_page_menu();
	} else {
		echo '<ul class="menu"><li class="menu-item-first"><a href="' . esc_url( home_url( '/' ) ) . 'wp-admin/nav-menus.php?action=locations">' . esc_html__( 'Create or select a menu','pennews' ) . '</a></li></ul>';
	}
}

/**
 * Show icon post format
 *
 * @param bool $show
 * class : lager-size-icon, medium-size-icon,small-size-icon
 * @return string
 */
function penci_icon_post_format( $show = true, $class = '' ) {
	$icon = '';

	$class = $class ? 'icon-post-format ' . $class : 'icon-post-format';
	switch ( get_post_format() ) {
		case 'video':
			$icon = 'play';
			$class  .= ' penci-playvideo';
			break;
		case 'audio':
			$icon = 'music';
			break;
		case 'gallery':
			$icon = 'picture-o';
			break;
		case 'link':
			$icon = 'link';
			break;
		case 'quote':
			$icon = 'quote-left';
			break;
	}

	if( empty( $icon ) ) {
		return '';
	}

	$output = '<span class="' . $class . '"><i class="fa fa-' . $icon . '"></i></span>';

	if( ! $show ) {
		return $output;
	}

	echo ( $output );
}

if ( ! function_exists( 'penci_get_class_post_format' ) ) {
	function penci_get_class_post_format( $style_slider,$count ) {

		$class = 'lager-size-icon';

		if ( 'style-3' == $style_slider && $count > 1 ) {
			$class = 'medium-size-icon';
		}elseif ( 'style-6' == $style_slider  ) {
			$class = 'medium-size-icon';
		}elseif ( 'style-7' == $style_slider && ( 2 == $count || 3 ==  $count  ) ) {
			$class = 'medium-size-icon';
		}elseif ( 'style-8' == $style_slider && $count > 1 ) {
			$class = 'medium-size-icon';
		}elseif ( 'style-9' == $style_slider ) {
			$class = 'medium-size-icon icon_pos_right';
		}elseif ( 'style-11' == $style_slider && $count != 3 ) {
			$class = 'medium-size-icon';
		}elseif ( 'style-15' == $style_slider ) {
			$class = 'medium-size-icon';
		}elseif ( 'style-16' == $style_slider && $count > 1 ) {
			$class = 'medium-size-icon';
		}elseif ( 'style-19' == $style_slider && $count > 1 ) {
			$class = 'medium-size-icon';
		}elseif ( 'style-21' == $style_slider ) {
			$class = 'medium-size-icon';
		}elseif ( 'style-22' == $style_slider ) {
			$class = 'medium-size-icon';
		}elseif ( 'style-24' == $style_slider ) {
			$class = 'medium-size-icon';
		}elseif ( 'style-25' == $style_slider ) {
			$class = 'medium-size-icon';
		}elseif ( 'style-26' == $style_slider ) {
			if( ( 4 == $count || 3 ==  $count  ) ) {
				$class = 'medium-size-icon';
			}

			if( ( $count >  1  ) ) {
				$class = ' icon_pos_right';
			}

		}

		return $class;
	}
}


/**
 * Comments template
 *
 * @since 1.0
 * @return void
 */
if ( ! function_exists( 'penci_comments_template' ) ) {
	function penci_comments_template( $comment, $args, $depth ) {
		$GLOBALS['comment'] = $comment;

		$author_img = get_avatar( $comment, $args['avatar_size'] );

		$attr_date = 'datetime="' . get_comment_time( 'Y-m-d\TH:i:sP' ) . '"';
		$attr_date .= 'title="' . get_comment_time( 'l, F j, Y, g:i a' ) . '"';
		$attr_date .= 'itemprop="commentTime"';

		?>
		<div <?php comment_class(); ?> id="comment-<?php comment_ID() ?>" itemprop="" itemscope="itemscope" itemtype="http://schema.org/UserComments">
		 <meta itemprop="discusses" content="<?php the_title(); ?>"/>
         <link itemprop="url" href="#comment-<?php comment_ID() ?>">
		<div class="thecomment">
			<?php if( $author_img ): ?>
			<div class="author-img">
				<?php echo get_avatar( $comment, $args['avatar_size'] ); ?>
			</div>
			<?php endif; ?>
			<div class="comment-text">
				<span class="author"  itemprop="creator" itemtype="http://schema.org/Person"><span itemprop="name"><?php echo get_comment_author_link(); ?></span></span>
				<span class="date" <?php echo $attr_date; ?>><i class="fa fa-clock-o"></i><?php printf( __( '%1$s at %2$s','pennews' ), get_comment_date( '', $comment ), get_comment_time() ); ?></span>
				<?php if ( $comment->comment_approved == '0' ) : ?>
					<em><i class="icon-info-sign"></i> <?php echo ( penci_get_tran_setting( 'penci_comment_awaiting_approval' ) ); ?></em>
				<?php endif; ?>
				<div class="comment-content" itemprop="commentText"><?php comment_text(); ?></div>
				<span class="reply">
						<?php comment_reply_link( array_merge( $args, array(
							'reply_text' => penci_get_tran_setting( 'penci_comment_reply_text' ),
							'depth'      => $depth,
							'max_depth'  => $args['max_depth']
						) ), $comment->comment_ID ); ?>
						<?php edit_comment_link( penci_get_tran_setting( 'penci_comment_edit_comment' ) ); ?>
					</span>
			</div>
		</div>
		<?php
	}
}

/**
 * Retrieves the next posts page link.
 *
 * @global int      $paged
 * @global WP_Query $wp_query
 *
 * @param string $label    Content for link text.
 * @param int    $max_page Optional. Max pages. Default 0.
 *
 * @return string|void HTML-formatted next posts page link.
 */
function penci_get_next_posts_link( $label = null, $max_page = 0 ) {
	global $paged, $wp_query;

	if ( !$max_page )
		{$max_page = $wp_query->max_num_pages;}

	if ( !$paged )
		{$paged = 1;}

	$nextpage = intval($paged) + 1;

	if ( null === $label )
		{$label = esc_html__( 'Next Page &raquo;','pennews' );}

	$class = 'penci-ajax-more-button';

	//Filters the anchor tag attributes for the next posts page link.
	$attr = apply_filters( 'next_posts_link_attributes', 'data-mes="'. penci_get_tran_setting( 'penci_content_no_more_post_text' ) . '"' );

	if ( $nextpage <= $max_page ) {

		$link = next_posts( $max_page, false );

		if( isset( $_GET['post_style'] ) ) {
			$link = add_query_arg( 'post_style', $_GET['post_style'], $link );
		}

		if( isset( $_GET['post_layout'] ) ) {
			$link = add_query_arg( 'post_layout', $_GET['post_layout'], $link );
		}
	}
	else {
		$link = '#';
		$class .= ' no-post';
	}

	return '<a  class="' . esc_attr( $class ) . '" href="' . esc_url( $link ) . "\" $attr><span class='ajax-more-text'>" . preg_replace('/&([^#])(?![a-z]{1,8};)/i', '&#038;$1', $label) . '</span><span class="ajaxdot"></span><i class="fa fa-refresh"></i></a>';
}

/**
 * Displays a paginated navigation to next/previous set of posts, when applicable.
 */
function penci_posts_pagination( $page = '' ) {

	$type_infinite = get_theme_mod( 'penci_blog_pagination' ) ? get_theme_mod( 'penci_blog_pagination' ) : 'default';
	$pos           = get_theme_mod( 'penci_blog_pag_pos' ) ? get_theme_mod( 'penci_blog_pag_pos' ) : 'left';
	$num_load      = get_theme_mod( 'penci_number_load_more' ) ? get_theme_mod( 'penci_number_load_more' ) : 6;
	$handle_text   = penci_get_tran_setting( 'penci_click_handle_text' );


	if( 'block_pagination' == $page ) {
		$type_infinite = get_theme_mod('penci_block_pag_pagination' ) ? get_theme_mod('penci_block_pag_pagination' ) : 'default';
		$pos           = get_theme_mod('penci_block_pag_pos' ) ? get_theme_mod('penci_block_pag_pos' ) : 'left';
		$num_load      = get_theme_mod( 'penci_block_pag_number_load_more' ) ? get_theme_mod( 'penci_block_pag_number_load_more' ) : 6;
	}

	$pos = $pos ? 'penci-pag-' . $pos : '';
	if ( 'default' == $type_infinite && get_the_posts_pagination() ):
		echo '<div class="penci-pagination ' . $pos . '">';
		the_posts_pagination(array(
			'prev_text' => '<i class="fa fa-angle-left"></i>',
			'next_text' => '<i class="fa fa-angle-right"></i>',
		));
		echo '</div>';
	elseif ( 'default' != $type_infinite ):
		?>
		<div id="penci-infinite-handle" class="penci-pagination penci-ajax-more <?php echo esc_attr( $type_infinite . ' ' . $pos ); ?>">
		<?php
		$data_archive_type = '';
		$data_archive_value = '';
		if ( is_category() ) :
			$category = get_category( get_query_var( 'cat' ) );
			$cat_id = isset( $category->cat_ID ) ? $category->cat_ID : '';
			$data_archive_type = 'cat';
			$data_archive_value = $cat_id;
		elseif ( is_tag() ) :
			$tag = get_queried_object();
			$tag_id = isset( $tag->term_id ) ? $tag->term_id : '';
			$data_archive_type = 'tag';
			$data_archive_value = $tag_id;
		elseif ( is_day() ) :
			$data_archive_type = 'day';
			$data_archive_value = get_the_date( 'm|d|Y' );
		elseif ( is_month() ) :
			$data_archive_type = 'month';
			$data_archive_value = get_the_date( 'm|d|Y' );
		elseif ( is_year() ) :
			$data_archive_type = 'year';
			$data_archive_value = get_the_date( 'm|d|Y' );
		endif;

		$template = '';
		if ( is_home() ) {
			$template = 'home';
		} elseif ( is_category() ) {
			$template = 'category';
		}

		$offset_number = get_option('posts_per_page');

		printf('<a class="penci-ajax-more-button" data-page="%s" data-template="%s" data-mes="%s" data-number="%s" data-offset="%s" data-archivetype="%s" data-archivevalue="%s">
				<span class="ajax-more-text">%s</span><span class="ajaxdot"></span><i class="fa fa-refresh"></i>
			</a>',
			esc_attr( $page ),
			esc_attr( $template ),
			penci_get_tran_setting( 'penci_content_no_more_post_text' ),
			esc_attr( intval( $num_load ) ),
			esc_attr(intval( $offset_number ) ),
			esc_attr( $data_archive_type ),
			esc_attr( $data_archive_value ),
			( $handle_text )
		);
		?>
	</div>
	<?php
	endif;

}

/**
 * Functions callback when more posts clicked
 *
 */
add_action('wp_ajax_nopriv_penci_more_post_ajax', 'penci_more_post_ajax_func');
add_action('wp_ajax_penci_more_post_ajax', 'penci_more_post_ajax_func');
function penci_more_post_ajax_func() {

	$nonce = $_POST['nonce'];
	if ( ! wp_verify_nonce( $nonce, 'ajax-nonce' ) ){
		die ( 'Nope!' );
	}

	$ppp      = isset( $_POST["ppp"] ) ? $_POST["ppp"] : 4;
	$offset   = isset( $_POST['offset'] ) ? $_POST['offset'] : 0;
	$archivetype    = isset( $_POST['archivetype'] )  ? $_POST['archivetype'] : '';
	$archivevalue   = isset( $_POST['archivevalue'] )  ? $_POST['archivevalue'] : '';
	$page        = isset( $_POST['page'] )  ? $_POST['page'] : '';
	$template   = isset( $_POST['template'] )  ? $_POST['template'] : '';

	$args = array(
		'post_status'    	=> 'publish',
		'posts_per_page'   => $ppp,
		'offset'          => $offset
	);

	if( 'cat' == $archivetype ){
		$args['cat'] = $archivevalue;
	}elseif( 'tag' == $archivetype ){
		$args['tag_id'] = $archivevalue;
	}elseif ( 'day' == $archivetype ) {
			$date_arr = explode( '|', $archivevalue );
			$args['date_query'] = array(
				array(
					'year'  => isset( $date_arr[2] ) ? $date_arr[2] : '',
					'month' => isset( $date_arr[0] ) ? $date_arr[0] : '',
					'day'   => isset( $date_arr[1] ) ? $date_arr[1] : ''
				)
			);
		}
	elseif ( 'month' == $archivetype ) {
		$date_arr = explode( '|', $archivevalue );
		$args['date_query'] = array(
			array(
				'year'  => isset( $date_arr[2] ) ? $date_arr[2] : '',
				'month' => isset( $date_arr[0] ) ? $date_arr[0] : '',
			)
		);
	}
	elseif ( 'year' == $archivetype ) {
		$date_arr = explode( '|', $archivevalue );
		$args['date_query'] = array(
			array(
				'year'  => isset( $date_arr[2] ) ? $date_arr[2] : ''
			)
		);
	}

	$loop = new WP_Query( $args );

	ob_start();
	if ( $loop->have_posts() ) :  while ( $loop->have_posts() ) : $loop->the_post();


	if( 'block_pagination' == $page ) {
		get_template_part( 'template-parts/content', 'block-pagination' );
	}else{

		$template = $template ? $template : get_post_format();
		get_template_part( 'template-parts/content', $template );
	}

	endwhile;
	endif;
	$items = ob_get_contents();
	ob_clean();
	ob_end_clean();
	wp_reset_postdata();

	wp_send_json_success( $items );
}


/**
* Gets the menus that where made by the user in wp-admin
 */
function penci_get_user_created_menus() {
	$menus_array = get_terms( 'nav_menu', array( 'hide_empty' => false ) );

	$list_menu = array( '' => esc_html__( '-- No Menu --', 'pennews' ) );

	if ( ! is_array( $menus_array ) ) {
	    return $list_menu;
	}


	foreach ( $menus_array as $td_menu ) {
	    $menu_id = isset( $td_menu->term_id ) ? $td_menu->term_id : '';
	    $menu_name = isset( $td_menu->name ) ? $td_menu->name : '';

	    if( empty( $menu_id ) ) {
	        continue;
	    }

	    $list_menu[ $menu_id ] = $menu_name;

	}
    return $list_menu;
}


/**
 * Get list of terms.
 *
 * @param string $taxonomy
 *
 * @return array
 */
function penci_get_category( $taxonomy = 'category' ) {
	$terms   = get_terms( array(
		'taxonomy'   => $taxonomy,
		'hide_empty' => true,
	) );
	$options = array( '' => esc_html__( '-- All categories --', 'pennews' ) );
	if ( ! is_wp_error( $terms ) && ! empty( $terms ) ) {
		foreach ( $terms as $term ) {
			$options[ $term->term_id ] = $term->name;
		}
	}

	return $options;
}


/**
* @param $new_value
* @param $key_option
 *
* @return bool
 */
function penci_option_changed( $new_value, $key_option ) {
	return ( $new_value && $new_value != penci_default_setting( $key_option ) );
}

/**
 * Pagination numbers
 *
 * @since 1.0
 * @return void
 */
if ( ! function_exists( 'penci_pagination_numbers' ) ) {
	function penci_pagination_numbers( $custom_query = false, $pagenavi_align = '' ) {
		global $wp_query;
		if ( !$custom_query ) {$custom_query = $wp_query;}

		$paged_get = 'paged';
		if( is_front_page() && ! is_home() ):
			$paged_get = 'page';
		endif;

		$big = 999999999; // need an unlikely integer
		$pagination = paginate_links( array(
			'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
			'format' => '?paged=%#%',
			'current' => max( 1, get_query_var( $paged_get ) ),
			'total' => $custom_query->max_num_pages,
			'type'   => 'list',
			'prev_text'    => '<i class="fa fa-angle-left"></i>',
			'next_text'    => '<i class="fa fa-angle-right"></i>',
		) );

		if( ! $pagenavi_align ) {
			$pagenavi_align = get_theme_mod( 'penci_blog_pag_pos' ) ? get_theme_mod( 'penci_blog_pag_pos' ) : 'left';
		}

		if ( $pagination ) {
			return '<div class="penci-pagination align-'. esc_attr( $pagenavi_align ) .'">'. $pagination . '</div>';
		}
	}
}

/**
 * Get count footer columns
* @return int|string
 */
function penci_count_footer_col() {
	$footer_col =  penci_get_setting( 'penci_footer_col' );

	$count = '';
	if ( 'style-1' == $footer_col ) {
		$count = 1;
	} elseif ( in_array( $footer_col, array( 'style-2', 'style-5', 'style-6', 'style-7', 'style-8' ) ) ) {
		$count = 2;
	} elseif ( in_array( $footer_col, array( 'style-3', 'style-9', 'style-10', 'style-11' ) ) ) {
		$count = 3;
	} elseif ( 'style-4' == $footer_col ) {
		$count = 4;
	}

	return $count;
}


/**
 * Display post thumbnail. Use featured image first and fallback to first image in the post content
 *
 * @param array $args
 *
 * @return bool
 */
function penci_post_thumbnail( $args = array() )
{
	$args = wp_parse_args( $args, array(
		'post'   => get_the_ID(),
		'size'   => 'thumbnail',
		'before' => '',
		'after'  => '',
		'icon_format' => true,
		'echo'   => true,
	) );

	$url   = '';
	$image = '';

	// Get post thumbnail
	if ( has_post_thumbnail( $args['post'] ) ) {
		$image = get_the_post_thumbnail( $args['post'], $args['size'] );
	}

	$image = apply_filters( 'penci_post_thumbnail', $image, $args );

	$output =  $args['before'] . $image . $args['after'];

	if ( ! $args['echo'] ) {
		return $output;
	}

	echo ( $output );
}

add_filter( 'penci_post_thumbnail','penci_add_default_image', 10,2 );
function penci_add_default_image( $image, $args ) {
	if( ! empty( $image ) || ! class_exists( 'Penci_Framework_Helper' ) ) {
		return $image;
	}

	$w_img = $h_img = '';
	if(  class_exists( 'Penci_Framework_Helper' ) ) {
		$image_size_info = Penci_Framework_Helper::get_image_sizes( $args['size'] );
		$w_img = $image_size_info['width'];
		$h_img = $image_size_info['height'];
	}

	$image = '<img width="' . esc_attr( $w_img ) . '" height="' . esc_attr( $h_img ) . '" src="' . get_template_directory_uri() . '/images/no-image.jpg" alt="Image default"/>';
	
	return $image;
}
/**
 * Get class header with header width
 *
 * @param bool $echo
 *
 * @return mixed|string|void
 */
function penci_get_class_header_width( $echo = true ) {
	$header_width = penci_get_setting( 'penci_header_width' );
	$class = '';
	if ( '1080' == $header_width ) {
		$class = 'penci-container-1080';
	}elseif ( '1400' == $header_width ) {
		$class = 'penci-container-fluid';
	}elseif ( 'fullwidth' == $header_width ) {
		$class = 'penci-container-full';
	}



	if( empty( $class ) ) {
		if( 'header_s1' == penci_get_setting( 'penci_header_layout' ) ){
			$class = 'penci-header_s1-fullwidth';
		}else{
			$class = 'penci-container-fluid';
		}
	}

	$class =  apply_filters( 'penci_get_class_header_width', $class );

	if(  ! $echo  ) {
		return $class;
	}

	echo ( $class );
}

/**
 * Get class footer with footer width
 *
 * @param bool $echo
 *
 * @return mixed|string|void
 */
function penci_get_class_footer_width( $echo = true ) {
	$footer_width = penci_get_setting( 'penci_footer_width' );
	$class = 'penci-container-fluid';
	if ( '1080' == $footer_width ) {
		$class = 'penci-container-1080';
	}elseif ( 'fullwidth' == $footer_width ) {
		$class = 'penci-container-full';
	}

	$class =  apply_filters( 'penci_get_class_footer_width', $class );

	if(  ! $echo  ) {
		return $class;
	}

	echo ( $class );
}


/**
 * Convert hex color to RGB
 *
 * @param $color
 * @param int $opacity
 *
 * @return string
 */

if( ! function_exists( 'penci_convert_hex_rgb' ) ) {
	function penci_convert_hex_rgb( $color, $opacity = 1 ) {

		if ( empty( $color ) ) {
			$color = '#000000';
		}

		list( $r, $g, $b ) = sscanf( $color, "#%02x%02x%02x" );

		return sprintf( 'rgba(%s, %s, %s, %s)', $r, $g, $b, $opacity );
	}
}

/**
 * Find youtube Link in PHP string and Convert it into embed code
 *
 * @param $video
 *
 * @return mixed
 */
if( ! function_exists( 'penci_get_url_video_embed_code' ) ) {

	function penci_get_url_video_embed_code( $video ) {
		return  preg_replace("/\s*[a-zA-Z\/\/:\.]*youtube.com\/watch\?v=([a-zA-Z0-9\-_]+)([a-zA-Z0-9\/\*\-\_\?\&\;\%\=\.]*)/i","<i" . "frame width=\"560\" height=\"315\" src=\"//www.youtube.com/embed/$1\" frameborder=\"0\" allowfullscreen></i" . "frame>", $video );
	}
}

if( !function_exists( 'penci_get_markup_infeed_ad' ) ) {
	function penci_get_markup_infeed_ad( $args ) {

		$defaults = array(
			'before'     => '<div class="penci-infeed_ad penci-post-item">',
			'after'      => '</div>',
			'order_ad'   => 3,
			'order_post' => '',
			'code'       => '',
			'echo'       => false
		);

		$r = wp_parse_args( $args, $defaults );


		$before = $after = $order_ad = $order_post = $code = '';
		extract( $r );

		if ( $order_ad != $order_post || empty( $code ) ) {
			return;
		}

		$output = $before;
		$output .= $code;
		$output .= $after;

		if ( ! $r['echo'] ) {
			return $output;
		}

		echo ( $output );
	}
}

/**
 * Return google adsense markup
 *
 * @since 3.2
 */
if ( ! function_exists( 'penci_render_google_adsense' ) ) {
	function penci_render_google_adsense( $option, $echo = true ) {
		if( ! get_theme_mod( $option ) ){
			return '';
		}

		$ad = '<div class="penci-google-adsense '. $option .'">'. do_shortcode( get_theme_mod( $option ) ) .'</div>';
		if( ! $echo  ) {
			return $ad;
		}

		echo ( $ad );
	}
}

if ( ! function_exists( 'penci_add_more_span_cat_count' ) ) {
	add_filter( 'wp_list_categories', 'penci_add_more_span_cat_count' );
	function penci_add_more_span_cat_count( $links ) {

		$links = preg_replace( '/<\/a> \(([0-9]+)\)/', ' <span class="category-item-count">(\\1)</span></a>', $links );

		return $links;
	}
}

function penci_pennews_login_form( $args = array() ) {
	$defaults = array(
		'echo' => true,
		'redirect' => ( is_ssl() ? 'https://' : 'http://' ) . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'],
		'remember' => true,
		'value_username' => '',
		'value_remember' => false,
	);


	$args = wp_parse_args( $args, apply_filters( 'login_form_defaults', $defaults ) );
	$login_form_top = apply_filters( 'login_form_top', '', $args );
	$login_form_middle = apply_filters( 'login_form_middle', '', $args );
	$login_form_bottom = apply_filters( 'login_form_bottom', '', $args );

	$form = '
		<form name="loginform" class="penci-login-form" id="loginform" action="' . esc_url( site_url( 'wp-login.php', 'login_post' ) ) . '" method="post">
			' . $login_form_top . '
			<p class="login-username">
				<input type="text" name="log" id="penci_login" class="input" value="' . esc_attr( $args['value_username'] ) . '"  size="20"  placeholder="' . penci_get_tran_setting( 'penci_plogin_email_place' ) . '"/>
			</p>
			<p class="login-password">
				<input type="password" name="pwd" id="penci_pass" class="input" value="" size="20" placeholder="'. penci_get_tran_setting( 'penci_plogin_pass_place' ) .'"/>
			</p>
			' . $login_form_middle . '
			' . ( $args['remember'] ? '<p class="login-remember"><label><input name="rememberme" type="checkbox" id="rememberme" value="forever"' . ( $args['value_remember'] ? ' checked="checked"' : '' ) . ' /> ' .  penci_get_tran_setting( 'penci_plogin_label_remember' ) . '</label></p>' : '' ) . '
			<p class="login-submit">
				<input type="submit" name="wp-submit" id="wp-submit" class="button button-primary" value="' . esc_attr( penci_get_tran_setting( 'penci_plogin_label_log_in' ) ) . '" />
				<input type="hidden" name="redirect_to" value="' . esc_url( $args['redirect'] ) . '" />
			</p>
			' . $login_form_bottom . '
		</form>';

	if ( $args['echo'] )
		{echo $form;}
	else
		{return $form;}
}

if( ! function_exists( 'penci_get_data_height_nav' ) ) {

	function penci_get_data_height_nav(){
		$dataheight = 80;

		if( 'header_s7' == get_theme_mod( 'penci_header_layout' ) ) {
			$dataheight = 100;
		}elseif( 'header_s11' == get_theme_mod( 'penci_header_layout' ) ) {
			$dataheight = 110;
		}

		$datacustom = get_theme_mod( 'penci_main_menu_line_height' );
		if( $datacustom && $datacustom > 35 ) {
			$dataheight = $datacustom + 20;
		}
		if( get_theme_mod( 'penci_hide_header_sticky' ) ) {
			$dataheight = 20;
		}
		if( is_user_logged_in() ) {
			$dataheight = $dataheight  + 32;
		}

		return intval( $dataheight );
	}
}

if( ! function_exists( 'penci_get_schema_header' ) ) {

	function penci_get_schema_header(){
		echo 'itemscope="itemscope" itemtype="http://schema.org/WPHeader"';
	}
}



add_filter( 'get_custom_logo', 'penci_pennews_filter_logo' );
	if( ! function_exists( 'penci_pennews_filter_logo' ) ) {
		function penci_pennews_filter_logo() {
	    $html = '';
		$switched_blog = false;

		if ( is_multisite() && ! empty( $blog_id ) && (int) $blog_id !== get_current_blog_id() ) {
			switch_to_blog( $blog_id );
			$switched_blog = true;
		}

		$custom_logo_id = get_theme_mod( 'custom_logo' );

		// We have a logo. Logo is go.
		if ( $custom_logo_id ) {
			$custom_logo_attr = array(
				'class'    => 'custom-logo',
				'itemprop' => 'image',
			);

			/*
			 * If the logo alt attribute is empty, get the site title and explicitly
			 * pass it to the attributes used by wp_get_attachment_image().
			 */
			$image_alt = get_post_meta( $custom_logo_id, '_wp_attachment_image_alt', true );
			if ( empty( $image_alt ) ) {
				$custom_logo_attr['alt'] = get_bloginfo( 'name', 'display' );
			}

			/*
			 * If the alt attribute is not empty, there's no need to explicitly pass
			 * it because wp_get_attachment_image() already adds the alt attribute.
			 */
			$html = sprintf( '<a href="%1$s" class="custom-logo-link" rel="home" itemprop="url">%2$s</a>',
				esc_url( home_url( '/' ) ),
				wp_get_attachment_image( $custom_logo_id, 'full', false, $custom_logo_attr )
			);
		}

		// If no logo is set but we're in the Customizer, leave a placeholder (needed for the live preview).
		elseif ( is_customize_preview() ) {
			$html = sprintf( '<a href="%1$s" class="custom-logo-link" style="display:none;"><img class="custom-logo"/></a>',
				esc_url( home_url( '/' ) )
			);
		}

		if ( $switched_blog ) {
			restore_current_blog();
		}

		return $html;
	}
}
