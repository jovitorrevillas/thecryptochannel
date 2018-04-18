<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

$atts = vc_map_get_attributes( $this->getShortcode(), $atts );

$css = $bordertop_color = $title_color = $title_hover_color = $background_title_color = $border_title_color = '';

extract( $atts );

$unique_id = 'penci-ad_box--' . rand( 1000, 100000 );
$class     = Penci_Framework_Helper::get_class_block( array( $this->getCSSAnimation( $atts['css_animation'] ) ), $atts );

$default_src = vc_asset_url( 'vc/no_image.png' );
$style       = $border_color = '';

$img_id = preg_replace( '/[^\d]/', '', $image );

$img = Penci_Helper_Shortcode::getImageBySize( array(
	'attach_id'  => $img_id,
	'thumb_size' => $img_size,
	'class'      => 'penci-image-holder penci-ad-image penci-lazy',
) );

if ( $img ) {
	$image_string = $img;
} else {
	$image_string = '<img class="penci-ad-image penci-lazy" src="' . $default_src . '" data-src="' . $default_src . '" />';
}
?>
	<div id="<?php echo esc_attr( $unique_id ); ?>" class="penci-block-vc penci-ad-box penci-list-banner <?php echo esc_attr( implode( $class, ' ' ) ); ?>">
		<div class="penci-block-heading">
			<?php Penci_Helper_Shortcode::get_block_title( $atts ); ?>
		</div>
		<div class="penci-block_content">
			<div class="penci-promo-item penci-banner-has-text">
				<?php
				if ( ! empty( $atts['link'] ) ) {
					$target = ! empty( $atts['img_link_target'] ) ? ' target="' . esc_attr( $atts['img_link_target'] ) . '"' : '';
					echo '<a class="penci-promo-link" href="' . esc_attr( $atts['link'] ) . '"' . $target . '></a>';
				}
				echo $image_string;

				if ( $atts['banner_text'] ) :
					?>
					<div class="penci-promo-text">
						<h4><?php echo $atts['banner_text']; ?></h4>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</div>
<?php

$id_block_ad = '#' . $unique_id;
$css_custom  = Penci_Helper_Shortcode::get_general_css_custom( $id_block_ad, $atts );
$css_custom  .= Penci_Helper_Shortcode::get_typo_css_custom_block_heading( $id_block_ad, $atts );

if ( ! $atts['show_banner_border'] ) {
	$css_custom .= sprintf( '%s .penci-promo-item.penci-banner-has-text:after{ content: none; }', $id_block_ad );
} elseif ( $atts['banner_border_color'] ) {
	$css_custom .= sprintf( '%s .penci-promo-item.penci-banner-has-text:after{ border-color:%s; }', $id_block_ad, $atts['banner_border_color'] );
}

if ( $atts['banner_text_bgcolor'] ) : $css_custom .= sprintf( '%s .penci-promo-text h4{ background-color:%s; }', $id_block_ad, $atts['banner_text_bgcolor'] ); endif;
if ( $atts['banner_text_color'] ) : $css_custom .= sprintf( '%s .penci-promo-text h4{ color:%s; }', $id_block_ad, $atts['banner_text_color'] ); endif;

$css_custom .= Penci_Helper_Shortcode::get_typo_css_custom( array(
	'e_admin'      => 'banner_text',
	'font-size'    => '14px',
	'google_fonts' => Penci_Helper_Shortcode::get_font_family( 'roboto' ),
	'template'     => $id_block_ad . ' .penci-promo-text h4{ %s }',
), $atts
);

if ( $css_custom ) {
	echo '<style>';
	echo $css_custom;
	echo '</style>';
}
