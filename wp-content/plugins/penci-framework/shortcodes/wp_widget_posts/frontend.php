<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}


$title = $number = $show_date = $el_class = $el_id = '';
$output = '';
$atts = vc_map_get_attributes( $this->getShortcode(), $atts );
extract( $atts );

$unique_id = 'penci-widget-recentposts--' . rand( 1000, 100000 );

$type = 'WP_Widget_Recent_Posts';

$class = Penci_Framework_Helper::get_class_block( array( $this->getCSSAnimation( $atts['css_animation'] ) ), $atts );
$args  = Penci_Framework_Helper::penci_get_widget_args( $atts, $unique_id, $class );

global $wp_widget_factory;
// to avoid unwanted warnings let's check before using widget
if ( is_object( $wp_widget_factory ) && isset( $wp_widget_factory->widgets, $wp_widget_factory->widgets[ $type ] ) ) {
	ob_start();
	the_widget( $type, $atts, $args );
	$output .= ob_get_clean();
	echo $output;
}


$id_recent_posts = '#' . $unique_id;
$css_custom = Penci_Helper_Shortcode::get_general_css_custom( $id_recent_posts, $atts );


if( !empty( $atts['title_color'] ) ) {
	$css_custom .= sprintf( '%s.widget_recent_entries li a{ color:%s; }',$id_recent_posts, $atts['title_color']  );
}
if( !empty( $atts['title_hover_color'] ) ) {
	$css_custom .= sprintf( '%s.widget_recent_entries li a:hover{ color:%s; }',$id_recent_posts, $atts['title_hover_color']  );
}

if( !empty( $atts['border_bottom_post_color'] ) ) {
	$css_custom .= sprintf( '%s.widget_recent_entries li{ border-color:%s; }',$id_recent_posts, $atts['border_bottom_post_color']  );
}

if( !empty( $atts['post_date_color'] ) ) {
	$css_custom .= sprintf( '%s.widget_recent_entries .post-date{ color:%s; }',$id_recent_posts, $atts['post_date_color']  );
}

$css_custom .= Penci_Helper_Shortcode::get_typo_css_custom( array(
	'e_admin'      => 'block_title',
	'font-size'    => '18px',
	'google_fonts' => Penci_Helper_Shortcode::get_font_family( 'oswald' ),
	'template'     => $id_recent_posts . ( $atts['style_block_title'] ? '.' . $atts['style_block_title'] : '' ) . ' .penci-block__title{ %s }',
), $atts
);

$css_custom .= Penci_Helper_Shortcode::get_typo_css_custom( array(
	'e_admin'      => 'post_title',
	'font-size'    => '14px',
	'google_fonts' => Penci_Helper_Shortcode::get_font_family( 'roboto' ),
	'template'     => $id_recent_posts . ' li a{ %s }',
), $atts
);

$css_custom .= Penci_Helper_Shortcode::get_typo_css_custom( array(
	'e_admin'      => 'post_date',
	'font-size'    => '12px',
	'google_fonts' => Penci_Helper_Shortcode::get_font_family( 'roboto' ),
	'template' => $id_recent_posts .' .post-date{ %s; }' ,
), $atts
);


if ( $css_custom ) {
	echo '<style>';
	echo $css_custom;
	echo '</style>';
}
