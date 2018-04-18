<?php
$i          = 1;
$first_item = '';
$items      = '';
while ( $query_slider->have_posts() ) {
	$query_slider->the_post();
	if ( 'video' != get_post_format() ) {
		continue;
	}

	$video = get_post_meta( get_the_ID(), '_format_video_embed', true );
	$url   = Penci_Framework_Helper::get_link_video_by_iframe( $video );

	$items .= '<article  class="' . join( ' ', penci_get_post_class( '', get_the_ID() ) ) . '">';
	$items .= '<div class="penci_post_thumb">';
	$items .= Penci_Helper_Shortcode::get_image_holder( array( 'image_size' => 'penci-thumb-480-320' ) );
	$items .= $url ? '<a class="penci-popup-video" href="' . esc_html( $url ) . '">' : '';
	$items .= Penci_Framework_Helper::icon_post_format( $atts['hide_format_icons'], 'small-size-icon' );
	$items .= $url ? '</a>' : '';
	$items .= '</div>';
	$items .= '</article>';

	$i ++;
}
wp_reset_postdata();

return $first_item . '<div class="block_video_items">' . $items . '</div>';