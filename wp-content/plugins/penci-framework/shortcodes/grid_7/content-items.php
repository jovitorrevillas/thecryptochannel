<?php
$query_slider = Penci_Pre_Query::do_query( $atts );
if ( ! $query_slider->have_posts() ) {
	return;
}

$items = '';
$grid7_i = 0;
while ( $query_slider->have_posts() ) {
	$query_slider->the_post();

	$items .= '<article  class="' . join( ' ', penci_get_post_class( 'penci_post_thumb', get_the_ID() ) ) . '">';
	$items .='<div class="penci-post-item__inner">';
	$items .= Penci_Helper_Shortcode::get_image_holder_pre( array(
			'image_size'  => Penci_Helper_Shortcode::get_image_size_by_type( 'penci-thumb-480-645',  $atts['image_type'] ),
			'class'       => 'penci-gradient',
			'show_icon'   => ! $atts['hide_icon_post_format'],
			'size_icon'   => 'icon_pos_right medium-size-icon',
			'hide_review' => $atts['hide_review_piechart'],
		) );
	$items .= Penci_Helper_Shortcode::get_post_meta( array( 'cat' ), $atts, false );
	$items .= '<div class="penci-slide-overlay">';
	$items .= '<a class="overlay-link" href="' . get_the_permalink() . '"></a>';
	$items .= '<div class="penci_post_content"><div class="feat-text ">';
	$items .= Penci_Helper_Shortcode::get_markup_title_post(  $atts['post_standard_title_length'] );

	if ( function_exists( 'penci_get_post_date' ) && empty( $atts['hide_post_date'] ) ||
		function_exists( 'penci_get_comment_count' ) && empty( $atts['hide_comment'] )
	) :
		$items .= '<div class="penci_post-meta">';
		$items .= function_exists( 'penci_get_post_date' ) && empty( $atts['hide_post_date'] ) ? penci_get_post_date( false ) : '';
		$items .= function_exists( 'penci_get_comment_count' ) && empty( $atts['hide_comment'] ) ? penci_get_comment_count( false ) : '';;
		$items .= '</div>';
	endif;
	$items .= '</div></div></div></div>';
	$items .= '</article>';

	$grid7_i ++;
}
wp_reset_postdata();

return Penci_Helper_Shortcode::pre_output_content_items( $items , $atts );