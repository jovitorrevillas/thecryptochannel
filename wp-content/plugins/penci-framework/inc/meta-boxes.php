<?php
add_filter( 'rwmb_meta_boxes', 'penci_register_meta_boxes' );

/**
 * Add custom meta boxes for courses.
 *
 * @param array $meta_boxes
 *
 * @return array
 */
function penci_register_meta_boxes( $meta_boxes ) {

	$all_sidebar = array( '' => esc_html__( 'Default Sidebar', 'penc-framework' ) );

	if ( class_exists( 'Penci_Custom_Sidebar' ) ) {
		$all_sidebar = array_merge(
			array( '' => esc_html__( 'Default Sidebar( on Customize )', 'penc-framework' ) ),
			Penci_Custom_Sidebar::get_list_sidebar()
		);
	}

	$field_page = array(
		array(
			'id'   => 'penci_use_option_current_page',
			'name' => esc_html__( 'Use the options of the current page:', 'penci-framework' ),
			'type' => 'checkbox',
			'std'  => '',
			'label_description' => '',
		),
		array(
			'name'    => esc_html__( 'Sidebar position:', 'penci-framework' ),
			'id'      => 'page_sidebar_pos',
			'type'    => 'image_select',
			'options' => array(
				'no-sidebar-wide' => get_template_directory_uri() . '/images/layout/wide-content.png',
				'no-sidebar-1080' => get_template_directory_uri() . '/images/layout/wide-content-1080.png',
				'no-sidebar'      => get_template_directory_uri() . '/images/layout/no-sidebar.png',
				'sidebar-left'    => get_template_directory_uri() . '/images/layout/sidebar-left.png',
				'sidebar-right'   => get_template_directory_uri() . '/images/layout/sidebar-right.png',
				'two-sidebar'     => get_template_directory_uri() . '/images/layout/3cm.png',
			),
			'std'     => 'sidebar-right',
		),
		array(
			'name'            => esc_html__( 'Custom sidebar left:', 'penci-framework' ),
			'id'              => 'page_sidebar_left',
			'type'            => 'select',
			'options'         => $all_sidebar
		),
		array(
			'name'            => esc_html__( 'Custom sidebar right:', 'penci-framework' ),
			'id'              => 'page_sidebar_right',
			'type'            => 'select',
			'options'         => $all_sidebar
		),
		array(
			'name'    => esc_html__( 'Page template layout:', 'penci-framework' ),
			'id'      => 'page_template_layout',
			'type'    => 'image_select',
			'options' => array(
				'style-1' => get_template_directory_uri() . '/images/single/style_1.png',
				'style-2' => get_template_directory_uri() . '/images/single/style_2.png',
				'style-3' => get_template_directory_uri() . '/images/single/style_3.png',
				'style-4' => get_template_directory_uri() . '/images/single/style_4.png',
			),
			'std'     => 'style-1',
		),

		array(
			'name'        => esc_html__( 'Page Title Align', 'pennews' ),
			'id'          => "penci_page_align_post_title",
			'type'        => 'select',
			'options'     => array(
				'left' 		=> esc_html__( 'Left', 'pennews' ),
				'center'    => esc_html__( 'Center', 'pennews' ),
				'right'    => esc_html__( 'Right', 'pennews' )
			),
			'multiple'    => false,
			'std'         => 'left'
		),
		array(
			'name'  => esc_html__( 'Custom Font Size for Page Title ', 'pennews' ),
			'id'    => 'penci_page_size_post_title',
			'type'  => 'text',
			'std'   => function_exists( 'penci_page_size_post_title' ) ? penci_default_setting( 'penci_page_size_post_title' ) : '',
			'size' => 10,
			'desc'     => esc_html__( 'Numeric value only, unit is pixel', 'pennews' ),
		),
	);


	$page_list_check = array(
		'penci_hide_page_title'               => esc_html__( 'Hide Page Title:', 'penci-framework' ),
		'penci_hide_page_breadcrumb'          => esc_html__( 'Hide Breadcrumbs:', 'penci-framework' ),
		'penci_hide_page_socail_share_top'    => esc_html__( 'Hide Social Share Icons on Top:', 'pennews' ),
		'penci_hide_page_socail_share_bottom' => esc_html__( 'Hide Social Share Icons on Bottom:', 'pennews' ),
		'penci_show_page_featured_img'        => esc_html__( 'Make Featured Image Auto Appears on Pages:', 'penci-framework' ),
		'penci_page_caption_above_img'        => esc_html__( 'Show Caption On The Images:', 'penci-framework' ),
		'penci_show_page_comments'            => esc_html__( 'Show Comments:', 'penci-framework' ),
	);

	foreach ( $page_list_check as $id_option => $label_option ) {
		$field_page[] = array(
			'id'   => $id_option,
			'name' => $label_option,
			'type' => 'checkbox',
		);
	}

	$fileds_single = array(
		array(
			'id'   => 'penci_use_option_current_single',
			'name' => esc_html__( 'Use the option of the current single:', 'penci-framework' ),
			'type' => 'checkbox',
			'std'  => '',
			'label_description' => '',
		),
		array(
			'name'    => esc_html__( 'Sidebar position:', 'penci-framework' ),
			'id'      => 'single_sidebar_pos',
			'type'    => 'image_select',
			'options' => array(
				'no-sidebar-wide' => get_template_directory_uri() . '/images/layout/wide-content.png',
				'no-sidebar-1080' => get_template_directory_uri() . '/images/layout/wide-content-1080.png',
				'no-sidebar'      => get_template_directory_uri() . '/images/layout/no-sidebar.png',
				'sidebar-left'    => get_template_directory_uri() . '/images/layout/sidebar-left.png',
				'sidebar-right'   => get_template_directory_uri() . '/images/layout/sidebar-right.png',
				'two-sidebar'     => get_template_directory_uri() . '/images/layout/3cm.png',
			)
		),
		array(
			'name'            => esc_html__( 'Custom sidebar left:', 'penci-framework' ),
			'id'              => 'single_sidebar_left',
			'type'            => 'select',
			'options'         => $all_sidebar
		),
		array(
			'name'            => esc_html__( 'Custom sidebar right:', 'penci-framework' ),
			'id'              => 'single_sidebar_right',
			'type'            => 'select',
			'options'         => $all_sidebar
		),
		array(
			'name'    => esc_html__( 'Post template layout:', 'penci-framework' ),
			'id'      => 'single_template_layout',
			'type'    => 'image_select',
			'options' => array(
				'style-1' => get_template_directory_uri() . '/images/single/style_1.png',
				'style-2' => get_template_directory_uri() . '/images/single/style_2.png',
				'style-3' => get_template_directory_uri() . '/images/single/style_3.png',
				'style-4' => get_template_directory_uri() . '/images/single/style_4.png',
				'style-5' => get_template_directory_uri() . '/images/single/style_5.png',
				'style-6' => get_template_directory_uri() . '/images/single/style_6.png',
				'style-7' => get_template_directory_uri() . '/images/single/style_7.png',
				'style-8' => get_template_directory_uri() . '/images/single/style_8.png',
				'style-9' => get_template_directory_uri() . '/images/single/style_9.png',
				'style-10' => get_template_directory_uri() . '/images/single/style_10.png',
			)
		),
		array(
				'name'        => esc_html__( 'AD Code For Post Template Style 10', 'penci-framework' ),
				'id'          => 'pre_ad_code_s10',
				'type'        => 'textarea',
				'rows'        => 5,
				'cols'        => 5,
			),
	);


	$meta_boxes[] = array(
		'title'      => __( 'Page Options for Default Template', 'penci-framework' ),
		'post_types' => 'page',
		'priority' => 'high',
		'context' => 'normal',
		//'include'     => array( 'template' => 'default' ),
		'fields'     => $field_page,
	);

	$meta_boxes[] = array(
		'title'      => __( 'Hide Header and Hide Footer', 'penci-framework' ),
		'post_types' => 'page',
		'priority' => 'high',
		'context' => 'normal',
		'fields'     => array(
			array(
				'id'   => 'penci_hide_page_header',
				'name' => esc_html__( 'Hide Header', 'penci-framework' ),
				'type' => 'checkbox',
			),
			array(
				'id'   => 'penci_hide_page_footer',
				'name' => esc_html__( 'Hide Footer', 'penci-framework' ),
				'type' => 'checkbox',
			),
		),
	);

	$meta_boxes[] = array(
		'title'      => __( 'Single Options', 'penci-framework' ),
		'post_types' => 'post',
		'context' => 'normal',
		'priority' => 'high',
		'fields'     => $fileds_single,
	);



	return $meta_boxes;
}
