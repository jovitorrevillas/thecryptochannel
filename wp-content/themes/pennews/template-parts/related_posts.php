<?php
/**
 * Related post template
 * Render list related posts
 */

if( penci_get_setting( 'penci_hide_single_related' ) ) {
	return;
}

$orig_post = $post;
global $post;
$numbers_related = penci_get_setting('penci_single_related_amount');

if ( !isset( $numbers_related ) || $numbers_related < 1 ): $numbers_related = 10; endif;

$order_by = penci_get_setting( 'penci_related_orderby' );


$penci_related_by = penci_get_setting( 'penci_related_by' );
$args             = array();
if ( 'categories' == $penci_related_by ) {
	$categories = get_the_category( $post->ID );
	if ( $categories ) {
		$category_ids = array();
		foreach ( $categories as $individual_category ) {
			$category_ids[] = $individual_category->term_id;
		}

		$args = array(
			'category__in'        => $category_ids,
			'post__not_in'        => array( $post->ID ),
			'posts_per_page'      => $numbers_related,
			'orderby'             => $order_by,
			'ignore_sticky_posts' => 1,
		);
	}
} else {
	$tags = wp_get_post_tags( $post->ID );
	if ( $tags ) {
		$tag_ids = array();
		foreach ( $tags as $individual_tag ) {
			$tag_ids[] = $individual_tag->term_id;
		}
		$args = array(
			'tag__in'             => $tag_ids,
			'post__not_in'        => array( $post->ID ),
			'posts_per_page'      => $numbers_related,
			'orderby'             => $order_by,
			'ignore_sticky_posts' => 1,
		);
	}
}

$related_query = new wp_query( $args );

if ( ! $related_query->have_posts() ) {
	return;
}

$post_items = '';

while ( $related_query->have_posts() ) : 
	$related_query->the_post(); 
	$show_img_default = penci_get_setting( 'penci_show_img_default_related' );

	$class_post = 'item-related';
	$class_post .= ' penci-imgtype-' . penci_get_setting( 'penci_archive_image_type' );
	$class_post .= ! has_post_thumbnail() && $show_img_default ? ' penci-no-thumb' : '';

	$post_items .= '<div  class="' . join( ' ', get_post_class( $class_post , get_the_ID() ) ) . '">';

	$post_items .= sprintf( '<a class="related-thumb penci-image-holder penci-lazy penci-image_has_icon" data-src="%s" href="%s">%s</a>',
		get_the_post_thumbnail_url( get_the_ID(), penci_get_archive_image_type( 'penci-thumb-480-320' ) ),
		get_the_permalink(),
		penci_icon_post_format( false,'small-size-icon' )
	);

	$post_items .= '<h4 class="entry-title"><a href="' . get_the_permalink() . '">' . get_the_title() . '</a></h4>';
	$post_items .= '</div>';
endwhile;

$post = $orig_post;
wp_reset_postdata();

$markup_slider = '';
$related_title = penci_get_setting('penci_single_related_text');
if( penci_get_setting( 'penci_enable_slider_related' ) ) {

	$data_auto = penci_get_setting( 'penci_post_related_autoplay' );
	$data_auto = $data_auto ? 1 : 0;

	$data_dots = penci_get_setting( 'penci_post_related_dots' );
	$data_dots = $data_dots ? 0 : 1;

	$data_arrows = penci_get_setting( 'penci_post_related_arrows' );
	$data_arrows = $data_arrows ? 0 : 1;

	$data_loop = $related_query->post_count  > 3 ?  0 : 1;

	$reponsive = '{0:{ items:1, nav:true},600:{items:3, nav:false},1000:{items:3, nav:true, loop:false }}';

	$markup_slider = sprintf('<div class="penci-owl-carousel-slider penci-related-carousel owl-carousel owl-theme" data-items="3" data-autowidth="0" data-auto="%s" data-autotime="4000" data-speed="600" data-loop="%s" data-dots="%s" data-nav="%s" data-center="0" data-reponsive="%s">',
	esc_attr( $data_auto ),
	esc_attr( $data_loop ),
	esc_attr( $data_dots ),
	esc_attr( $data_arrows ),
	esc_attr( $reponsive )
	);
}

$output = '<div class="penci-post-related">';
$output .= '<div class="post-title-box"><h4 class="post-box-title">' . esc_attr( $related_title ) .'</h4></div>';
$output .= '<div class="post-related_content">';
$output .= $markup_slider;
$output .= $post_items;
$output .= penci_get_setting( 'penci_enable_slider_related' ) ? '</div>' : '';
$output .= '</div>';
$output .= '</div>';

echo ( $output );
