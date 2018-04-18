<?php
$group_filter = 'Filter';

$general = array(
	array(
		'type'       => 'penci_image_select',
		'heading'    => esc_html__( 'Style', 'penci-framework' ),
		'param_name' => 'style_slider',
		'std'        => 'style-1',
		'options'    => array(
			'style-1'  => PENCI_ADDONS_URL . 'assets/img/slider/style-1.png',
			'style-2'  => PENCI_ADDONS_URL . 'assets/img/slider/style-2.png',
			'style-3'  => PENCI_ADDONS_URL . 'assets/img/slider/style-3.png',
			'style-4'  => PENCI_ADDONS_URL . 'assets/img/slider/style-4.png',
			'style-5'  => PENCI_ADDONS_URL . 'assets/img/slider/style-5.png',
			'style-6'  => PENCI_ADDONS_URL . 'assets/img/slider/style-6.png',
			'style-7'  => PENCI_ADDONS_URL . 'assets/img/slider/style-7.png',
			'style-8'  => PENCI_ADDONS_URL . 'assets/img/slider/style-8.png',
			'style-9'  => PENCI_ADDONS_URL . 'assets/img/slider/style-9.png',
			'style-10' => PENCI_ADDONS_URL . 'assets/img/slider/style-10.png',
			'style-11' => PENCI_ADDONS_URL . 'assets/img/slider/style-11.png',
			'style-12' => PENCI_ADDONS_URL . 'assets/img/slider/style-12.png',
			'style-13' => PENCI_ADDONS_URL . 'assets/img/slider/style-13.png',
			'style-14' => PENCI_ADDONS_URL . 'assets/img/slider/style-14.png',
			'style-15' => PENCI_ADDONS_URL . 'assets/img/slider/style-15.png',
			'style-16' => PENCI_ADDONS_URL . 'assets/img/slider/style-16.png',
			'style-17' => PENCI_ADDONS_URL . 'assets/img/slider/style-17.png',
			'style-18' => PENCI_ADDONS_URL . 'assets/img/slider/style-18.png',
			'style-19' => PENCI_ADDONS_URL . 'assets/img/slider/style-19.png',
			'style-20' => PENCI_ADDONS_URL . 'assets/img/slider/style-20.png',
			'style-21' => PENCI_ADDONS_URL . 'assets/img/slider/style-21.png',
			'style-22' => PENCI_ADDONS_URL . 'assets/img/slider/style-22.png',
			'style-23' => PENCI_ADDONS_URL . 'assets/img/slider/style-23.png',
			'style-24' => PENCI_ADDONS_URL . 'assets/img/slider/style-24.png',
			'style-25' => PENCI_ADDONS_URL . 'assets/img/slider/style-25.png',
			'style-26' => PENCI_ADDONS_URL . 'assets/img/slider/style-26.png',
			'style-27' => PENCI_ADDONS_URL . 'assets/img/slider/style-27.png',
		),
		'admin_label' => true,
	),
	array(
		'type'        => 'dropdown',
		'heading'     => __( 'Item style', 'penci-framework' ),
		'param_name'  => 'each_item_style',
		'value'       => array(
			__( 'Item style 1 - Default', 'penci-framework' ) => 'penci-item-sdefault',
			__( 'Item style 2 - Gradient Colors', 'penci-framework' ) => 'penci-item-scolours',
		)
	),
	array(
		'type'       => 'checkbox',
		'heading'    => esc_html__( 'Disable Auto Play Slider ', 'penci-framework' ),
		'param_name' => 'auto_play',
	),
	array(
		'type'       => 'checkbox',
		'heading'    => esc_html__( 'Disable Slider Loop', 'penci-framework' ),
		'param_name' => 'disable_loop',
	),
	array(
		'type'        => 'textfield',
		'heading'     => esc_html__( 'Slider Auto Time (at x seconds)', 'penci-framework' ),
		'param_name'  => 'auto_time',
		'std'         => 4000,
		'admin_label' => true
	),
	array(
		'type'        => 'textfield',
		'heading'     => esc_html__( 'Slider Speed (at x seconds)', 'penci-framework' ),
		'param_name'  => 'speed',
		'std'         => 800,
		'admin_label' => true
	),
	array(
		'type'       => 'checkbox',
		'heading'    => esc_html__( 'Disable bottom text nav for slider 13', 'penci-framework' ),
		'param_name' => 'dis_bottom_text_nav_slider13',
	),
);

// Shortcode settings
return array(
	'name'   => esc_html__( 'Slider', 'penci-framework' ),
	'weight' => 816,
	'params' =>array_merge(
		Penci_Framework_Shortcode_Params::block_build_query(10),
		$general,
		Penci_Framework_Shortcode_Params::block_option_trim_word( array( 'standard' => 10,'big' => 12, 'small' => 8 ) ),
		Penci_Framework_Shortcode_Params::block_option_meta( array( 'date','cat', 'comment', 'view','hide_dis_bg_block' ) ),
		array(
			array(
				'type'             => 'checkbox',
				'heading'          => esc_html__( 'Hide Post thumb small item of slider 12', 'penci-framework' ),
				'param_name'       => 'hide_small_thumb',
				'edit_field_class' => 'vc_col-sm-6',
			),
			array(
				'type'             => 'checkbox',
				'heading'          => esc_html__( 'Turn on uppercase post title of big item slider 12', 'penci-framework' ),
				'param_name'       => 'turn_on_uppercase',
				'edit_field_class' => 'vc_col-sm-6',
			),
			array(
				'type'        => 'dropdown',
				'heading'     => esc_html__( 'Select Align Post Titles & Meta', 'penci-framework' ),
				'param_name'  => 'title_meta_align',
				'std'         => '',
				'value'       => array(
					esc_html__( 'Default', 'penci-framework' ) => '',
					esc_html__( 'Left', 'penci-framework' )    => 'left',
					esc_html__( 'Center', 'penci-framework' )  => 'center',
					esc_html__( 'Right', 'penci-framework' )   => 'right'
				),
			),
			array(
				'type'        => 'dropdown',
				'heading'     => esc_html__( 'Select style block title', 'penci-framework' ),
				'param_name'  => 'style_block_title',
				'std'         => 'style-title-1',
				'value'       => array(
					esc_html__( 'Style 1', 'penci-framework' )  => 'style-title-1',
					esc_html__( 'Style 2', 'penci-framework' )  => 'style-title-2',
					esc_html__( 'Style 3', 'penci-framework' )  => 'style-title-3',
					esc_html__( 'Style 4', 'penci-framework' )  => 'style-title-4',
					esc_html__( 'Style 5', 'penci-framework' )  => 'style-title-5',
					esc_html__( 'Style 6', 'penci-framework' )  => 'style-title-6',
					esc_html__( 'Style 7', 'penci-framework' )  => 'style-title-7',
					esc_html__( 'Style 8', 'penci-framework' )  => 'style-title-8',
					esc_html__( 'Style 9', 'penci-framework' )  => 'style-title-9',
					esc_html__( 'Style 10', 'penci-framework' ) => 'style-title-10',
					esc_html__( 'Style 11', 'penci-framework' ) => 'style-title-11',
					esc_html__( 'Style 12', 'penci-framework' ) => 'style-title-12',
					esc_html__( 'Style 13', 'penci-framework' ) => 'style-title-13',
				),
				'group'            => 'Heading',
			),
			array(
				'type'        => 'textfield',
				'heading'     => esc_html__( 'Block title:', 'penci-framework' ),
				'param_name'  => 'title',
				'value'        => '',
				'admin_label' => true,
				'description' => esc_html__( 'A title for this block, if you leave it blank the block will not have a title', 'penci-framework' ),
				'group'            => 'Heading',
			),
			array(
				'type'        => 'textfield',
				'heading'     => esc_html__( 'Title url:', 'penci-framework' ),
				'param_name'  => 'block_title_url',
				'std'         => '',
				'description' => esc_html__( 'A custom url when the block title is clicked', 'penci-framework' ),
				'group'            => 'Heading',
			),
			array(
				'type' => 'checkbox',
				'heading' => __( 'Add icon for title?', 'penci-framework' ),
				'param_name' => 'add_title_icon',
				'group'            => 'Heading',
			),
			array(
				'type' => 'dropdown',
				'heading' => __( 'Icon Alignment', 'penci-framework' ),
				'description' => __( 'Select icon alignment.', 'penci-framework' ),
				'param_name' => 'title_i_align',
				'value' => array(
					__( 'Left', 'penci-framework' ) => 'left',
					__( 'Right', 'penci-framework' ) => 'right',
				),
				'dependency' => array( 'element' => 'add_title_icon', 'value' => 'true', ),
				'group'            => 'Heading',
			),
			array(
				'type'       => 'iconpicker',
				'heading'    => esc_html__( 'Icon', 'penci-framework' ),
				'param_name' => 'title_icon',
				'settings'   => array(
					'emptyIcon'    => true,
					'type'         => 'fontawesome',
					'iconsPerPage' => 4000,
				),
				'group'            => 'Heading',
				'dependency' => array( 'element' => 'add_title_icon', 'value' => 'true',
				),
			),
			array(
				'type'             => 'textfield',
				'param_name'       => 'block_title_meta_settings',
				'heading'          => 'Block title settings',
				'value'            => '',
				'group'            => 'Heading',
				'edit_field_class' => 'penci-param-heading-wrapper no-top-margin vc_column vc_col-sm-12',
			),
			array(
				'type'       => 'dropdown',
				'heading'    => esc_html__( 'Select Block Title Align', 'penci-framework' ),
				'param_name' => 'block_title_align',
				'std'        => 'left',
				'value'      => array(
					esc_html__( 'Left', 'penci-framework' )   => 'style-title-left',
					esc_html__( 'Center', 'penci-framework' ) => 'style-title-center',
					esc_html__( 'Right', 'penci-framework' )  => 'style-title-right',
				),
				'group'            => 'Heading',
			),
			array(
				'type'             => 'checkbox',
				'heading'          => esc_html__( 'Turn off Uppercase Block Title', 'penci-framework' ),
				'param_name'       => 'block_title_off_uppercase',
				'group'            => 'Heading',
			),
			array(
				'type'             => 'penci_number',
				'param_name'       => 'block_title_wborder_left_right',
				'heading'          => esc_html__( 'Custom width border left or right', 'penci-framework' ),
				'value'            => '',
				'std'              => '5px',
				'suffix'           => 'px',
				'min'              => 1,
				'group'            => 'Heading',
				'dependency'       => array( 'element' => 'style_block_title', 'value' => array( 'style-title-9', 'style-title-10' ) ),
			),

			array(
				'type'             => 'penci_number',
				'param_name'       => 'block_title_wborder',
				'heading'          => esc_html__( 'Custom width border', 'penci-framework' ),
				'value'            => '',
				'std'              => '3px',
				'suffix'           => 'px',
				'min'              => 1,
				'group'            => 'Heading',
				'dependency'       => array( 'element' => 'style_block_title', 'value' => array( 'style-title-11','style-title-12' ) ),
			),
		),
		Penci_Framework_Shortcode_Params::filter_params( 'featured-slider' ),
		array(
			array(
				'type'             => 'textfield',
				'param_name'       => 'setting_color',
				'heading'          => esc_html__( 'General colors', 'penci-framework' ),
				'value'            => '',
				'group'            => $group_color,
				'edit_field_class' => 'penci-param-heading-wrapper no-top-margin vc_column vc_col-sm-12',
			),
			array(
				'type'             => 'colorpicker',
				'heading'          => esc_html__( 'Post title color', 'penci-framework' ),
				'param_name'       => 'post_title_color',
				'group'            => 'Color',
				'edit_field_class' => 'vc_col-sm-6',
			),
			array(
				'type'             => 'colorpicker',
				'heading'          => esc_html__( 'Post title hover color', 'penci-framework' ),
				'param_name'       => 'post_title_hcolor',
				'group'            => 'Color',
				'edit_field_class' => 'vc_col-sm-6',
			),
			array(
				'type'             => 'colorpicker',
				'heading'          => esc_html__( 'Post title color for big item', 'penci-framework' ),
				'param_name'       => 'post_title_bigp_color',
				'group'            => $group_color,
				'edit_field_class' => 'vc_col-sm-6',
				'description'      => esc_html__( 'Just apply for slider styles 12,13,14','penci-framework' ),
			),
			array(
				'type'             => 'colorpicker',
				'heading'          => esc_html__( 'Post title hover color for big item', 'penci-framework' ),
				'param_name'       => 'post_title_bigp_hcolor',
				'group'            => $group_color,
				'edit_field_class' => 'vc_col-sm-6',
				'description'      => esc_html__( 'Just apply for slider styles 12,13,14','penci-framework' ),
			),
			array(
				'type'             => 'colorpicker',
				'heading'          => esc_html__( 'Post meta color', 'penci-framework' ),
				'param_name'       => 'meta_color',
				'group'            => 'Color',
				'edit_field_class' => 'vc_col-sm-6',
			),
			array(
				'type'             => 'colorpicker',
				'heading'          => esc_html__( 'Post meta hover color', 'penci-framework' ),
				'param_name'       => 'meta_hcolor',
				'group'            => 'Color',
				'edit_field_class' => 'vc_col-sm-6',
			),
			array(
				'type'             => 'colorpicker',
				'heading'          => esc_html__( 'Post meta color for big item', 'penci-framework' ),
				'param_name'       => 'meta_bigp_color',
				'group'            => 'Color',
				'edit_field_class' => 'vc_col-sm-6',
				'description'      => esc_html__( 'Just apply for slider styles 12,13,14','penci-framework' ),
			),
			array(
				'type'             => 'colorpicker',
				'heading'          => esc_html__( 'Post meta hover color for big item', 'penci-framework' ),
				'param_name'       => 'meta_bigp_hcolor',
				'group'            => 'Color',
				'edit_field_class' => 'vc_col-sm-6',
				'description'      => esc_html__( 'Just apply for slider styles 12,13,14','penci-framework' ),
			),
			array(
				'type'       => 'colorpicker',
				'heading'    => esc_html__( 'Post excrept color', 'penci-framework' ),
				'param_name' => 'excrept_color',
				'group'      => 'Color',
				'edit_field_class' => 'vc_col-sm-6',
			),
			array(
				'type'       => 'colorpicker',
				'heading'    => esc_html__( 'Border color', 'penci-framework' ),
				'param_name' => 'border_color',
				'group'      => 'Color',
				'edit_field_class' => 'vc_col-sm-6',
			),
			array(
				'type'             => 'colorpicker',
				'heading'          => esc_html__( 'Slider overlay color', 'penci-framework' ),
				'param_name'       => 'slider_overlay_bg',
				'group'            => $group_color,
				'edit_field_class' => 'vc_col-sm-6',
				'description'      => esc_html__( 'Just apply for some sliders has overlay color','penci-framework' ),
			),
			array(
				'type'             => 'colorpicker',
				'heading'          => esc_html__( 'Background color For Big Item', 'penci-framework' ),
				'param_name'       => 'background_big_item',
				'group'            => $group_color,
				'edit_field_class' => 'vc_col-sm-6',
				'description'      => esc_html__( 'Just apply for slider styles 13','penci-framework' ),
			),
			array(
				'type'             => 'colorpicker',
				'heading'          => esc_html__( 'Center box background color', 'penci-framework' ),
				'param_name'       => 'centerbox_bg',
				'group'            => $group_color,
				'edit_field_class' => 'vc_col-sm-6',
				'description'      => esc_html__( 'Just apply for slider styles 20','penci-framework' ),
			),
			array(
				'type'       => 'dropdown',
				'heading'    => esc_html__( 'Center box opacity:', 'penci-framework' ),
				'param_name' => 'centerbox_bg_opacity',
				'value'      => array(
					'0'    => '0',
					'0.05' => '0.05',
					'0.1'  => '0.1',
					'0.15' => '0.15',
					'0.2'  => '0.2',
					'0.25' => '0.25',
					'0.3'  => '0.3',
					'0.35' => '0.35',
					'0.4'  => '0.4',
					'0.45' => '0.45',
					'0.5'  => '0.5',
					'0.55' => '0.55',
					'0.6'  => '0.6',
					'0.65' => '0.65',
					'0.7'  => '0.7',
					'0.75' => '0.75',
					'0.8'  => '0.8',
					'0.85' => '0.85',
					'0.9'  => '0.9',
					'0.95' => '0.95',
					'1'    => '1',
				),
				'std'        => '0.7',
				'group'      => $group_color,
				'description' => esc_html__( 'Just apply for slider styles 20','penci-framework' ),
			),
			array(
				'type'             => 'textfield',
				'param_name'       => 'slider_nav_css',
				'heading'          => esc_html__( 'Next/Prev colors', 'penci-framework' ),
				'value'            => '',
				'group'            => $group_color,
				'edit_field_class' => 'penci-param-heading-wrapper no-top-margin vc_column vc_col-sm-12',
			),
			array(
				'type'             => 'colorpicker',
				'heading'          => esc_html__( 'Next/Prev text color', 'penci-framework' ),
				'param_name'       => 'nav_text_color',
				'group'            => $group_color,
				'edit_field_class' => 'vc_col-sm-6',
			),
			array(
				'type'             => 'colorpicker',
				'heading'          => esc_html__( 'Next/Prev background color', 'penci-framework' ),
				'param_name'       => 'nav_bg_color',
				'group'            => $group_color,
				'edit_field_class' => 'vc_col-sm-6',
			),
		),
		Penci_Framework_Shortcode_Params::block_option_color_cat(),
		array(
			array(
				'type'             => 'textfield',
				'param_name'       => 'post_category_css',
				'heading'          => esc_html__( 'Button read more colors for slider styles 13', 'penci-framework' ),
				'value'            => '',
				'group'            => $group_color,
				'edit_field_class' => 'penci-param-heading-wrapper no-top-margin vc_column vc_col-sm-12',
			),
			array(
				'type'             => 'colorpicker',
				'heading'          => esc_html__( 'Button text color ', 'penci-framework' ),
				'param_name'       => 'readmore_text_color',
				'group'            => $group_color,
				'edit_field_class' => 'vc_col-sm-6',
			),
			array(
				'type'             => 'colorpicker',
				'heading'          => esc_html__( 'Button background color', 'penci-framework' ),
				'param_name'       => 'readmore_bg_color',
				'group'            => $group_color,
				'edit_field_class' => 'vc_col-sm-6',
			),
			array(
				'type'             => 'colorpicker',
				'heading'          => esc_html__( 'Button border color', 'penci-framework' ),
				'param_name'       => 'readmore_border_color',
				'group'            => $group_color,
				'edit_field_class' => 'vc_col-sm-6',
			),
			array(
				'type'             => 'colorpicker',
				'heading'          => esc_html__( 'Button hover text color', 'penci-framework' ),
				'param_name'       => 'readmore_hover_text_color',
				'group'            => $group_color,
				'edit_field_class' => 'vc_col-sm-6',
			),
			array(
				'type'             => 'colorpicker',
				'heading'          => esc_html__( 'Button hover border color', 'penci-framework' ),
				'param_name'       => 'readmore_hover_border_color',
				'group'            => $group_color,
				'edit_field_class' => 'vc_col-sm-6',
			),
			array(
				'type'             => 'colorpicker',
				'heading'          => esc_html__( 'Button hover background color', 'penci-framework' ),
				'param_name'       => 'readmore_hover_bg_color',
				'group'            => $group_color,
				'edit_field_class' => 'vc_col-sm-6',
			)
		),
		Penci_Framework_Shortcode_Params::color_params( $shotcode_id, false ),
		Penci_Framework_Shortcode_Params::block_option_note_custom_fonts(),
		Penci_Framework_Shortcode_Params::block_option_typo(
			array(
				'prefix'       => 'block_title',
				'title'        => esc_html__( 'Block title settings' ),
				'google_fonts' => Penci_Helper_Shortcode::get_font_family( 'oswald' ),
				'font-size'    => '18px',
			)
		),
		Penci_Framework_Shortcode_Params::block_option_typo(
			array(
				'prefix'       => 'post_title',
				'title'        => esc_html__( 'Post title settings' ),
				'google_fonts' => Penci_Helper_Shortcode::get_font_family( 'muktavaani' ),
				'font-size'    => '',
			)
		),
		array(
			array(
				'type'             => 'penci_number',
				'param_name'       => 'font_size_title_big_item',
				'heading'          => esc_html__( 'Font size big item(s)', 'penci-framework' ),
				'value'            => '',
				'std'              => '',
				'suffix'           => 'px',
				'min'              => 1,
				'edit_field_class' => 'vc_col-sm-6',
				'group'            => 'Typo'
			),
		),
		array(
			array(
				'type'             => 'penci_number',
				'param_name'       => 'font_size_title_small_item',
				'heading'          => esc_html__( 'Font size small items', 'penci-framework' ),
				'value'            => '',
				'std'              => '',
				'suffix'           => 'px',
				'min'              => 1,
				'edit_field_class' => 'vc_col-sm-6',
				'group'            => 'Typo'
			),
		),
		Penci_Framework_Shortcode_Params::block_option_typo(
			array(
				'prefix'       => 'post_meta',
				'title'        => esc_html__( 'Post meta settings' ),
				'google_fonts' => Penci_Helper_Shortcode::get_font_family( 'roboto' ),
				'font-size'    => '',
			)
		),
		Penci_Framework_Shortcode_Params::block_option_typo_cat(),
		Penci_Framework_Shortcode_Params::block_option_typo(
			array(
				'prefix'       => 'readmore',
				'title'        => esc_html__( 'Button read more settings' ),
				'google_fonts' => Penci_Helper_Shortcode::get_font_family( 'roboto' ),
				'font-size'    => '',
			)
		)
	)
);