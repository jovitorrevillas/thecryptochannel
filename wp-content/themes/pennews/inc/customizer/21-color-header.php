<?php
$section_color_header = 'penci_section_color_header';

$wp_customize->add_section( $section_color_header, array(
	'title'    => esc_html__( 'Colors for Header', 'pennews' ),
	'priority' => 12,
) );

$wp_customize->add_setting( 'penci_header_background_color', array(
	'default'           => '',
	'sanitize_callback' => array( $sanitizer, 'hex_color' ),
) );

$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'penci_header_background_color', array(
	'label'    => esc_html__( 'Header Background Color', 'pennews' ),
	'section'  => $section_color_header,
	'settings' => 'penci_header_background_color',
	'priority' => 5
) ) );

$wp_customize->add_setting( 'penci_header_background_img', array(
	'sanitize_callback' => array( $sanitizer, 'html' ),
) );
$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'penci_header_background_img', array(
	'label'    => esc_html__( 'Header Background Image', 'pennews' ),
	'section'  => $section_color_header,
	'settings' => 'penci_header_background_img',
) ) );

$options_color_header = array(
	'header_textlogo_color'     => esc_html__( 'Header Text Logo Color', 'pennews' ),
	'header_slogan_color'       => esc_html__( 'Header Slogan Text Color', 'pennews' ),
	'header_social_color'       => esc_html__( 'Header Social Icons Color', 'pennews' ),
	'header_social_color_hover' => esc_html__( 'Header Social Icons Color Hover', 'pennews' ),
	'main_bar_bg'               => esc_html__( 'Main Bar Background', 'pennews' ),

	'main_bar_border_color'   => esc_html__( 'Main Bar Border Color', 'pennews' ),
	'main_bar_nav_color'      => esc_html__( 'Main Bar Menu Text Color', 'pennews' ),
	'main_bar_color_active'   => esc_html__( 'Main Bar Menu Text Hover & Active Color', 'pennews' ),
	'main_bar_bgcolor_active' => esc_html__( 'Main Bar Menu Text Background Hover & Active Background Color', 'pennews' ),

	'drop_bg_color' => esc_html__( 'Dropdown Background Color', 'pennews' ),
	'drop_border_top_color' => esc_html__( 'Dropdown Border Top Color', 'pennews' ),

	'drop_items_border'        => esc_html__( 'Dropdown Menu Items Border Color', 'pennews' ),
	'drop_items_bgcolor'       => esc_html__( 'Dropdown Menu Items Background Color', 'pennews' ),
	'drop_items_bgcolor_hover' => esc_html__( 'Dropdown Menu Items Background Hover Color', 'pennews' ),
	'drop_text_color'          => esc_html__( 'Dropdown Text Color', 'pennews' ),
	'drop_text_hover_color'    => esc_html__( 'Dropdown Text Hover Color', 'pennews' ),

	'mega_bg_color'                 => esc_html__( 'Category Mega Menu Background Color', 'pennews' ),
	'mega_post_border_color'        => esc_html__( 'Category Mega Menu Post Border Color', 'pennews' ),
	'mega_child_cat_color'          => esc_html__( 'Category Mega Menu List Child Categories Color', 'pennews' ),
	'mega_child_cat_bg_color'       => esc_html__( 'Category Mega Menu List Child Categories Background Color', 'pennews' ),
	'mega_child_cat_item_bg_hcolor' => esc_html__( 'Category Mega Menu List Item Child Categories Background Hover Color', 'pennews' ),
	'mega_post_date_color'          => esc_html__( 'Category Mega Menu Post Date Color', 'pennews' ),
	'mega_accent_color'             => esc_html__( 'Category Mega Menu Accent Color', 'pennews' ),
	'mega_post_nav_bgcolor'         => esc_html__( 'Category Mega Menu Button Next/Prev Background Color', 'pennews' ),
	'mega_post_nav_color'           => esc_html__( 'Category Mega Menu Button Next/Prev Color', 'pennews' ),

	'header_search_color'         => esc_html__( 'Header Search Icon Color', 'pennews' ),
	'header_search_color_hover'   => esc_html__( 'Header Search Icon Color Hover', 'pennews' ),
	'header_search_bgcolor'       => esc_html__( 'Header Search Icon Background Color', 'pennews' ),
	'header_search_bgcolor_hover' => esc_html__( 'Header Search Icon Background Color Hover', 'pennews' ),
);

foreach ( $options_color_header as $key => $label ) {
	$wp_customize->add_setting( $key, array(
		'default'           => penci_default_setting( $key ),
		'sanitize_callback' => array( $sanitizer, 'hex_color' ),
	) );
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, $key, array(
		'label'    => $label,
		'section'  => $section_color_header,
		'settings' => $key,
	) ) );
}

$wp_customize->add_setting( 'penci_header_mobile_colors_heading', array(
	'sanitize_callback' => 'esc_url_raw'
) );
$wp_customize->add_control( new Penci_Customize_Heading_Control( $wp_customize, 'penci_header_mobile_colors_heading', array(
	'label'    => esc_html__( 'Header mobile', 'pennews' ),
	'section'  => $section_color_header,
	'settings' => 'penci_header_mobile_colors_heading',
	'type'     => 'heading',
) ) );

$options_color_header_mobile = array(
	'header_menu_mobile_bgcolor' => esc_html__( 'Header Background Color', 'pennews' ),
	'header_icon_menu_mobile'    => esc_html__( 'Icon Menu Mobile Color', 'pennews' ),
);

foreach ( $options_color_header_mobile as $key => $label ) {
	$wp_customize->add_setting( $key, array(
		'default'           => penci_default_setting( $key ),
		'sanitize_callback' => array( $sanitizer, 'hex_color' ),
	) );
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, $key, array(
		'label'    => $label,
		'section'  => $section_color_header,
		'settings' => $key,
	) ) );
}