<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

$atts = vc_map_get_attributes( $this->getShortcode(), $atts );

list( $atts , $block_content_id, $unique_id ) = Penci_Helper_Shortcode::get_general_param_frontend_shortcode( $atts, 'single_video' );

$class = 'penci-single-video';
$class .= ' ' . vc_shortcode_custom_css_class( $atts['css'], ' ' );
$class .= ' ' . $atts['class'];

if( empty( $atts['link'] ) ) {
	return;
}
?>
<div id="<?php echo esc_attr( $unique_id ); ?>" class="<?php echo esc_attr( $class ); ?>">
	<a href="<?php echo esc_url( $atts['link'] ); ?>" class="penci-popup-video">
		<?php if( ! empty( $atts['cover'] ) ) : ?><img src="<?php echo esc_url( wp_get_attachment_url( $atts['cover'] ) ); ?>" alt=""> <?php endif; ?>
		<div class="penci-popup-video-inner">
			<?php echo wpb_js_remove_wpautop( $content, true ); ?>
			<i class="fa fa-play"></i>
		</div>
	</a>
	<?php
	$id_single_video = '#' . $unique_id;
	$css_custom = '';
	if ( $atts['font_size_play'] ) {
		$css_custom .= sprintf( '%s.penci-single-video i{ font-size:%s; }', $id_single_video, $atts['font_size_play'] );
	}

	if ( $atts['color_play_color'] ) {
		$css_custom .= sprintf( '%s.penci-single-video i{ color:%s; }', $id_single_video, $atts['color_play_color'] );
	}
	if ( $atts['hover_color_play_color'] ) {
		$css_custom .= sprintf( '%s.penci-single-video i:hover{ color:%s; }', $id_single_video, $atts['hover_color_play_color'] );
	}

	if ( $css_custom ) {
		echo '<style>';
		echo $css_custom;
		echo '</style>';
	}
	?>
</div>