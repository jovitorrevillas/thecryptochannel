<?php
$atts = vc_map_get_attributes( $this->getShortcode(), $atts );

$images = (array) vc_param_group_parse_atts( $atts['images'] );

if( empty( $images ) ) {
	return;
}

list( $atts , $block_content_id, $unique_id ) = Penci_Helper_Shortcode::get_general_param_frontend_shortcode( $atts, 'image_box' );

$column_number = Penci_Global_Blocks::get_col_number();

$class = Penci_Framework_Helper::get_class_block( array( $this->getCSSAnimation( $atts['css_animation'] ), $atts['columns'] ), $atts );
$class = ! empty( $class ) ? ' ' . implode( $class, ' ' ) : '';

$class_col = 'penci-col-12';

if( 1 != $column_number  ) {
	if( 'columns-2' == $atts['columns'] ) {
		$class_col = 'penci-col-6';
	}elseif( 'columns-3' == $atts['columns'] ) {
		$class_col = 'penci-col-4';
	}elseif( 'columns-4' == $atts['columns'] ) {
		$class_col = 'penci-col-3';
	}
}

?>
<div id="<?php echo esc_attr( $unique_id ); ?>" class="penci-block-vc penci-image-box  <?php echo esc_attr( $class ); ?>">
	<div class="penci-block-heading">
		<?php Penci_Helper_Shortcode::get_block_title( $atts ); ?>
	</div>
	<div class="penci-block_content">
		<div class="penci-image-box__cotnent penci-row">
			<?php

			foreach ( $images as $item ) {

				if( empty( $item['image'] ) ) {
					continue;
				}

				$image_attributes = wp_get_attachment_image_src( $item['image'], 'penci-masonry-thumb' );
				$url_img_item     = isset( $image_attributes[0] ) ? $image_attributes[0] : '';

				if( empty( $url_img_item ) ) {
					continue;
				}

				$title_item       = isset( $item['title'] ) ? $item['title'] : '';
				$url_item         = isset( $item['url'] ) ? $item['url'] : '';
				$link_target_item = isset( $item['link_target'] ) && $item['link_target'] ?  ' target="_blank"' : '';
				$open_url  = '';
				$close_url = '';
				if ( $url_item ) {
					$open_url  = '<a href="' . ( $url_item ) . '"' . $link_target_item . '>';
					$close_url = '</a>';
				}
				?>
				<div class="penci-featured-ct <?php echo $class_col; ?>">
					<?php echo $open_url; ?>
					<div class="penci-fea-in <?php echo $atts['box_style']; ?>">
						<div class="fea-box-img penci-holder-load penci-lazy" data-src="<?php echo $url_img_item; ?>"></div>
						<?php if( $title_item ): ?>
							<h4><span class="boxes-text"><span><?php echo sanitize_text_field( $title_item ); ?></span></span></h4>
						<?php endif; ?>
					</div>
					<?php echo $close_url; ?>
				</div>
				<?php
			}
			?>
		</div>
	</div>
</div>
<?php

$id_image_box = '#' . $unique_id;
$css_custom  = Penci_Helper_Shortcode::get_general_css_custom( $id_image_box, $atts );
$css_custom .= Penci_Helper_Shortcode::get_typo_css_custom_block_heading( $id_image_box, $atts );

$css_custom .= Penci_Helper_Shortcode::get_typo_css_custom( array(
	'e_admin'      => 'img_box_text',
	'font-size'    => '14px',
	'google_fonts' => Penci_Helper_Shortcode::get_font_family( 'muktavaani' ),
	'template' => $id_image_box .'.penci-image-box .penci-fea-in h4 span span{ %s }' ,
), $atts
);

if( $atts['height_img'] ) {
	$css_custom .= $id_image_box .'.penci-image-box .penci-featured-ct .penci-fea-in{ height: auto; padding-top : ' . $atts['height_img'] . '%;}';
}

if( $atts['img_box_border_color'] ) {
	$css_custom .= $id_image_box . '.penci-image-box .penci-featured-ct .penci-fea-in:before,';
	$css_custom .= $id_image_box . '.penci-image-box .penci-featured-ct .penci-fea-in:after,';
	$css_custom .= $id_image_box . '.penci-image-box .penci-fea-in.boxes-style-2 h4:before,';
	$css_custom .= $id_image_box . '.penci-image-box .penci-fea-in h4 span span:before';
	$css_custom .= '{ border-color: ' . $atts['img_box_border_color'] . '; }';
	$css_custom .= $id_image_box . '.penci-image-box .penci-fea-in.boxes-style-2 h4,';
	$css_custom .= $id_image_box . '.penci-image-box .penci-fea-in h4 span span{ background-color: ' . $atts['img_box_border_color'] . ' }';
}

if( $atts['img_box_text_color'] ) {
	$css_custom .= $id_image_box . '.penci-image-box .penci-fea-in h4 span{ color: ' . $atts['img_box_text_color'] . ';}';
}
if( $atts['img_box_text_hcolor'] ) {
	$css_custom .= $id_image_box . '.penci-image-box .penci-fea-in:hover h4 span { color: ' . $atts['img_box_text_hcolor'] . ';}';
}

if ( $css_custom ) {
	echo '<style>';
	echo $css_custom;
	echo '</style>';
}
