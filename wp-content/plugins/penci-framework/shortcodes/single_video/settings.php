<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

// Shortcode settings
return array(
	'name'        => esc_html__( 'Single Video', 'penci-framework' ),
	'params'      => array(
		array(
			'type'       => 'textfield',
			'heading'    => esc_html__( 'Video Link', 'penci-framework' ),
			'param_name' => 'link',
		),

		array(
			'type'       => 'attach_image',
			'heading'    => esc_html__( 'Cover Image', 'penci-framework' ),
			'param_name' => 'cover',
		),
		array(
			'type' => 'textarea_html',
			'holder' => 'div',
			'heading' => __( 'Description', 'penci-framework' ),
			'param_name' => 'content',
			'value' => __( '<p>I am text block. Click edit button to change this text.</p>', 'penci-framework' ),
		),
		array(
			'type'       => 'fitwp_number',
			'heading'    => esc_html__( 'Size icon play', 'penci-framework' ),
			'param_name' => 'font_size_play',
		),

		array(
			'type'       => 'colorpicker',
			'heading'    => esc_html__( 'Color icon play', 'penci-framework' ),
			'param_name' => 'color_play_color',
		),

		array(
			'type'       => 'colorpicker',
			'heading'    => esc_html__( 'Hover color icon play', 'penci-framework' ),
			'param_name' => 'hover_color_play_color',
		),
	),
);