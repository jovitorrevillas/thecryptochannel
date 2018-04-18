<?php
$wp_customize->add_section( 'penci_single', array(
	'title'    => esc_html__( 'Single Post Options', 'pennews' ),
	'priority' => 6,
) );

$wp_customize->add_setting( 'penci_single_sidebar_layout', array(
	'default'           => 'two-sidebar',
	'sanitize_callback' => array( $sanitizer, 'select' ),
) );
$wp_customize->add_control( new Penci_Customize_Control_Radio_Image(
	$wp_customize,
	'penci_single_sidebar_layout',
	array(
		'label'    => esc_html__( 'Single Sidebar Layout', 'pennews' ),
		'section'  => 'penci_single',
		'type'     => 'radio-image',
		'choices'  => array(
			'no-sidebar-wide' => array( 'url' => '%s/images/layout/wide-content.png', 'label' => esc_html__( 'Wide content', 'pennews' ) ),
			'no-sidebar-1080' => array( 'url' => '%s/images/layout/wide-content-1080.png', 'label' => esc_html__( 'Wide content 1080', 'pennews' ) ),
			'no-sidebar'      => array( 'url' => '%s/images/layout/no-sidebar.png', 'label' => esc_html__( 'No Sidebar', 'pennews' ) ),
			'sidebar-left'    => array( 'url' => '%s/images/layout/sidebar-left.png', 'label' => esc_html__( 'Sidebar Left', 'pennews' ) ),
			'sidebar-right'   => array( 'url' => '%s/images/layout/sidebar-right.png', 'label' => esc_html__( 'Sidebar Right', 'pennews' ) ),
			'two-sidebar'     => array( 'url' => '%s/images/layout/3cm.png', 'label' => esc_html__( 'Two Sidebar', 'pennews' ) ),
		),
		'settings' => 'penci_single_sidebar_layout',
	)
) );

$wp_customize->add_setting( 'penci_single_template', array(
	'default'           => 'style-1',
	'sanitize_callback' => array( $sanitizer, 'select' ),
) );
$wp_customize->add_control( new Penci_Customize_Control_Radio_Image(
	$wp_customize,
	'penci_single_template',
	array(
		'label'    => esc_html__( 'Single template', 'pennews' ),
		'section'  => 'penci_single',
		'type'     => 'radio-image',
		'choices'  => array(
			'style-1' => array( 'url' => '%s/images/single/style_1.png', 'label' => esc_html__( 'Style 1', 'pennews' ) ),
			'style-2' => array( 'url' => '%s/images/single/style_2.png', 'label' => esc_html__( 'Style 2', 'pennews' ) ),
			'style-3' => array( 'url' => '%s/images/single/style_3.png', 'label' => esc_html__( 'Style 3', 'pennews' ) ),
			'style-4' => array( 'url' => '%s/images/single/style_4.png', 'label' => esc_html__( 'Style 4', 'pennews' ) ),
			'style-5' => array( 'url' => '%s/images/single/style_5.png', 'label' => esc_html__( 'Style 5', 'pennews' ) ),
			'style-6' => array( 'url' => '%s/images/single/style_6.png', 'label' => esc_html__( 'Style 6', 'pennews' ) ),
			'style-7' => array( 'url' => '%s/images/single/style_7.png', 'label' => esc_html__( 'Style 7', 'pennews' ) ),
			'style-8' => array( 'url' => '%s/images/single/style_8.png', 'label' => esc_html__( 'Style 8', 'pennews' ) ),
			'style-9' => array( 'url' => '%s/images/single/style_9.png', 'label' => esc_html__( 'Style 9', 'pennews' ) ),
			'style-10' => array( 'url' => '%s/images/single/style_10.png', 'label' => esc_html__( 'Style 10', 'pennews' ) ),
		),
		'settings' => 'penci_single_template',
	)
) );

// Custom sidebar left
$wp_customize->add_setting( 'penci_single_custom_sidebar_left', array(
	'default'           => 'sidebar-2',
	'sanitize_callback' => array( $sanitizer, 'select' ),
) );
$wp_customize->add_control(
	'penci_single_custom_sidebar_left',
	array(
		'label'    => esc_html__( 'Custom Sidebar Left', 'pennews' ),
		'section'  => 'penci_single',
		'type'     => 'select',
		'choices'  => Penci_Custom_Sidebar::get_list_sidebar( ),
		'settings' => 'penci_single_custom_sidebar_left',
	)
);

// Custom sidebar right
$wp_customize->add_setting( 'penci_single_custom_sidebar_right', array(
	'default'           => 'sidebar-1',
	'sanitize_callback' => array( $sanitizer, 'select' ),
) );
$wp_customize->add_control(
	'penci_single_custom_sidebar_right',
	array(
		'label'    => esc_html__( 'Custom Sidebar right', 'pennews' ),
		'section'  => 'penci_single',
		'type'     => 'select',
		'choices'  => Penci_Custom_Sidebar::get_list_sidebar( 'right' ),
		'settings' => 'penci_single_custom_sidebar_right',
	)
);


$wp_customize->add_setting( 'penci_single_header_ad_box', array(
	'sanitize_callback' => array( $sanitizer, 'html' )
) );

$wp_customize->add_control( 'penci_single_header_ad_box', array(
	'label'       => esc_html__( 'AD Code For Post Template Style 10', 'pennews' ),
	'section'     => 'penci_single',
	'settings'    => 'penci_single_header_ad_box',
	'type'        => 'textarea',
) );

$wp_customize->add_setting( 'penci_single_heading', array(
	'sanitize_callback' => 'esc_url_raw'
) );
$wp_customize->add_control( new Penci_Customize_Heading_Control( $wp_customize, 'penci_single_heading', array(
	'label'    => esc_html__( 'Post and Custom Post Types', 'pennews' ),
	'section'  => 'penci_single',
	'settings' => 'penci_single_heading',
	'type'     => 'heading',
) ) );

$wp_customize->add_setting( 'penci_single_size_post_title', array(
	'sanitize_callback' => array( $sanitizer, 'html' ),
	'default'           => '30',
) );

$wp_customize->add_control( new Penci_Customize_Font_Size_Control( $wp_customize, 'penci_single_size_post_title', array(
	'label'    => esc_html__( 'Custom font size Title', 'pennews' ),
	'section'  => 'penci_single',
	'settings' => 'penci_single_size_post_title',
	'type'     => 'font_size',
) ) );

$wp_customize->add_setting( 'penci_single_size_post_meta', array(
	'sanitize_callback' => array( $sanitizer, 'html' ),
	'default'           => '',
) );

$wp_customize->add_control( new Penci_Customize_Font_Size_Control( $wp_customize, 'penci_single_size_post_meta', array(
	'label'    => esc_html__( 'Custom font size post meta', 'pennews' ),
	'section'  => 'penci_single',
	'settings' => 'penci_single_size_post_meta',
	'type'     => 'font_size',
) ) );

$wp_customize->add_setting( 'penci_single_align_post_title', array(
	'default'           => 'left',
	'sanitize_callback' => array( $sanitizer, 'select' ),
) );
$wp_customize->add_control( 'penci_single_align_post_title', array(
	'label'    => esc_html__( 'Post Title Align', 'pennews' ),
	'section'  => 'penci_single',
	'settings' => 'penci_single_align_post_title',
	'type'     => 'select',
	'choices'  => array(
		'left'   => esc_html__( 'Left', 'pennews' ),
		'center' => esc_html__( 'Center', 'pennews' ),
		'right'  => esc_html__( 'Right', 'pennews' )
	)
) );

$wp_customize->add_setting( 'penci_single_featured_img_action', array(
	'default'           => '',
	'sanitize_callback' => array( $sanitizer, 'select' ),
) );
$wp_customize->add_control( 'penci_single_featured_img_action', array(
	'label'    => esc_html__( 'Featured Image Action', 'pennews' ),
	'section'  => 'penci_single',
	'settings' => 'penci_single_featured_img_action',
	'type'     => 'select',
	'choices'  => array(
		''  => esc_html__( 'No Link', 'pennews' ),
		'img_url'  => esc_html__( 'Click to view image url', 'pennews' ),
		'lightbox' => esc_html__( 'Click open image in lightbox' )
	)
) );

$single_list_check = array(
	'penci_hide_single_featured_img'       => esc_html__( 'Hide Featured Image', 'pennews' ),
	'penci_show_single_featured_img_cap'   => esc_html__( 'Enable Caption on Featured Image', 'pennews' ),
	'penci_hide_single_breadcrumb'         => esc_html__( 'Hide Breadcrumbs', 'pennews' ),
	'penci_hide_single_category'           => esc_html__( 'Hide Categories', 'pennews' ),
	'penci_hide_single_date'               => esc_html__( 'Hide Post Date', 'pennews' ),
	'penci_hide_single_author'             => esc_html__( 'Hide Post Author', 'pennews' ),
	'penci_hide_single_comment_count'      => esc_html__( 'Hide Comment Count', 'pennews' ),
	'penci_hide_single_view'               => esc_html__( 'Hide Post Count View', 'pennews' ),
	'penci_enable_ajax_view'               => esc_html__( 'Enable ajax Post View Count', 'pennews' ),
	'penci_hide_single_tag'                => esc_html__( 'Hide Tags', 'pennews' ),
	'penci_hide_single_post_nav'           => esc_html__( 'Hide Next/Prev Post Navigation', 'pennews' ),
	'penci_show_single_post_nav_thumbnail' => esc_html__( 'Enable Post Thumbnail for Next/Prev Post Navigation', 'pennews' ),
	'penci_hide_single_author_box'         => esc_html__( 'Hide Author Box', 'pennews' ),
	'penci_hide_single_related'            => esc_html__( 'Hide Related Posts Box', 'pennews' ),
	'penci_hide_single_comments'           => esc_html__( 'Hide Post Comments', 'pennews' ),
);

foreach ( $single_list_check as $id_option => $label_option ) {
	$desc = '';

	if( 'penci_hide_single_featured_img' == $id_option  ) {
		$desc = esc_html__( 'This option not apply for Video format, Gallery format', 'pennews' );
	}

	if( 'penci_show_single_featured_img_cap' == $id_option  ) {
		$desc = esc_html__( 'If your featured image has a caption, it will display on featured image. This option apply for styles 1, 2, 9 & 10', 'pennews' );
	}

	if( 'penci_enable_ajax_view' == $id_option  ) {
		$desc = esc_html__( 'Use to count posts viewed when you using cache plugin.', 'pennews' );
	}

	$wp_customize->add_setting( $id_option, array(
		'sanitize_callback' => array( $sanitizer, 'checkbox' ),
	) );

	$wp_customize->add_control( new WP_Customize_Control(
		$wp_customize,
		$id_option,
		array(
			'label'    => $label_option,
			'section'  => 'penci_single',
			'type'     => 'checkbox',
			'settings' => $id_option,
			'description' => $desc
		)
	) );
}

// ------ Social Share Box

$wp_customize->add_setting( 'penci_single_social_share_heading', array(
	'sanitize_callback' => 'esc_url_raw'
) );
$wp_customize->add_control( new Penci_Customize_Heading_Control( $wp_customize, 'penci_single_social_share_heading', array(
	'label'    => esc_html__( 'Social Share Box', 'pennews' ),
	'section'  => 'penci_single',
	'settings' => 'penci_single_social_share_heading',
	'type'     => 'heading',
) ) );

$single_social_share = array(
	'penci_hide_single_social_share_top'    => esc_html__( 'Hide Social Share on Top', 'pennews' ),
	'penci_hide_single_social_share_bottom' => esc_html__( 'Hide Social Share on Bottom', 'pennews' ),

);

foreach ( $single_social_share as $id_option => $label_option ) {
	$wp_customize->add_setting( $id_option, array(
		'sanitize_callback' => array( $sanitizer, 'checkbox' ),
	) );
	$wp_customize->add_control( new WP_Customize_Control(
		$wp_customize,
		$id_option,
		array(
			'label'    => $label_option,
			'section'  => 'penci_single',
			'type'     => 'checkbox',
			'settings' => $id_option,
		)
	) );
}

$list_social_share = array(
	'text'        => esc_html__( 'Hide Text "Share"', 'pennews' ),
);

foreach ( $list_social_share as $social_id => $social_label ) {

	$default = '';
	if( in_array( $social_id, array( 'stumbleupon','whatsapp', ) ) ){
		$default = 1;
	}

	$social_id = 'penci_hide_single_share_' . $social_id;
	$wp_customize->add_setting( $social_id, array(
		'sanitize_callback' => array( $sanitizer, 'checkbox' ),
		'default' => $default
	) );
	$wp_customize->add_control( new WP_Customize_Control(
		$wp_customize,
		$social_id,
		array(
			'label'    => $social_label,
			'section'  => 'penci_single',
			'type'     => 'checkbox',
			'settings' => $social_id,
		)
	) );
}

// ------ Author & Related Box
$wp_customize->add_setting( 'penci_single_related_heading', array(
	'sanitize_callback' => 'esc_url_raw'
) );
$wp_customize->add_control( new Penci_Customize_Heading_Control( $wp_customize, 'penci_single_related_heading', array(
	'label'    => esc_html__( 'Author & Related Box', 'pennews' ),
	'section'  => 'penci_single',
	'settings' => 'penci_single_related_heading',
	'type'     => 'heading',
) ) );
$single_author = array(
	'penci_hide_single_author_box'       => esc_html__( 'Hide Author Box', 'pennews' ),
	'penci_hide_single_related'          => esc_html__( 'Hide Related Posts Box', 'pennews' ),
	'penci_show_img_default_related'     => esc_html__( 'Enable Default Featured Image', 'pennews' ),
	'penci_hide_single_related_icon'     => esc_html__( 'Enable Posts Format Icons in Related Posts', 'pennews' ),
	'penci_enable_slider_related'        => esc_html__( 'Enable Slider in Related Posts', 'pennews' ),
	'penci_hide_single_related_autoplay' => esc_html__( 'Related Posts Carousel Auto Play', 'pennews' ),
	'penci_hide_single_related_dots'     => esc_html__( 'Hide Dots On Carousel Related Posts', 'pennews' ),
	'penci_hide_single_related_arrows'   => esc_html__( 'Hide Next/Prev Button On Carousel Related Posts', 'pennews' ),

);

foreach ( $single_author as $id_option => $label_option ) {
	$wp_customize->add_setting( $id_option, array(
		'sanitize_callback' => array( $sanitizer, 'checkbox' ),
	) );
	$wp_customize->add_control( new WP_Customize_Control(
		$wp_customize,
		$id_option,
		array(
			'label'    => $label_option,
			'section'  => 'penci_single',
			'type'     => 'checkbox',
			'settings' => $id_option,
		)
	) );
}

// Related Posts Custom Text
$wp_customize->add_setting( 'penci_single_related_text', array(
	'default'           => penci_default_setting( 'penci_single_related_text' ),
	'sanitize_callback' => array( $sanitizer, 'text' ),
) );
$wp_customize->add_control( 'penci_single_related_text', array(
	'label'    => esc_html__( 'Related Posts Custom Text', 'pennews' ),
	'section'  => 'penci_single',
	'settings' => 'penci_single_related_text',
) );

// Amount of Related Posts
$wp_customize->add_setting( 'penci_single_related_amount', array(
	'sanitize_callback' => array( $sanitizer, 'html' ),
	'default'           => '3',
) );
$wp_customize->add_control( new Penci_Customize_Number_Control( $wp_customize, 'penci_single_related_amount', array(
	'label'    => esc_html__( 'Amount of Related Posts', 'pennews' ),
	'section'  => 'penci_single',
	'settings' => 'penci_single_related_amount',
	'type'     => 'number',
) ) );

$wp_customize->add_setting( 'penci_related_by', array(
	'default'           => 'categories',
	'sanitize_callback' => array( $sanitizer, 'html' ),
) );
$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'penci_related_by', array(
	'label'    => esc_html__( 'Display Related Posts By:', 'pennews' ),
	'section'  => 'penci_single',
	'settings' => 'penci_related_by',
	'type'     => 'select',
	'choices'  => array(
		'categories' => 'Categories',
		'tags'       => 'Tags'
	)
) ) );
$wp_customize->add_setting( 'penci_related_orderby', array(
	'default'           => 'rand',
	'sanitize_callback' => array( $sanitizer, 'html' ),
) );
$wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'penci_related_orderby', array(
	'label'    => esc_html__( 'Order Related Posts', 'pennews' ),
	'section'  => 'penci_single',
	'settings' => 'penci_related_orderby',
	'type'     => 'select',
	'choices'  => array(
		'rand'  => 'Random',
		'date'  => 'Posts Date',
		'title' => 'Posts title'
	)
) ) );

$wp_customize->add_setting( 'penci_related_post_title_size', array(
	'sanitize_callback' => array( $sanitizer, 'html' )
) );

$wp_customize->add_control( new Penci_Customize_Font_Size_Control( $wp_customize, 'penci_related_post_title_size', array(
	'label'    => esc_html__( 'Custom Font Size For Related Post Title', 'pennews' ),
	'section'  => 'penci_single',
	'settings' => 'penci_related_post_title_size',
	'type'     => 'font_size',
) ) );

// Auto Load Previous Post?
$wp_customize->add_setting( 'penci_single_load_previous_heading', array(
	'sanitize_callback' => 'esc_url_raw'
) );
$wp_customize->add_control( new Penci_Customize_Heading_Control( $wp_customize, 'penci_single_load_previous_heading', array(
	'label'       => esc_html__( 'Auto Load Previous Posts', 'pennews' ),
	'section'     => 'penci_single',
	'settings'    => 'penci_single_load_previous_heading',
	'type'        => 'heading',
	'description' => esc_html__( 'Uncheck this box if you would like to remove the automatic loading of the previous post below the article.', 'pennews' )
) ) );

$wp_customize->add_setting( 'penci_auto_load_prev_post', array(
	'sanitize_callback' => array( $sanitizer, 'checkbox' )
) );
$wp_customize->add_control( new WP_Customize_Control(
	$wp_customize,
	'penci_auto_load_prev_post',
	array(
		'label'    => esc_html__( 'Auto Load Previous Post?', 'pennews' ),
		'section'  => 'penci_single',
		'type'     => 'checkbox',
		'settings' => 'penci_auto_load_prev_post',
	)
) );

$wp_customize->add_setting( 'penci_autoload_prev_by', array(
	'sanitize_callback' => array( $sanitizer, 'select' ),
) );
$wp_customize->add_control( 'penci_autoload_prev_by', array(
	'label'    => esc_html__( 'Display Auto Load Previous Post By:', 'pennews' ),
	'section'  => 'penci_single',
	'settings' => 'penci_autoload_prev_by',
	'type'     => 'select',
	'choices'  => array(
		''    => esc_html__( 'Default', 'pennews' ),
		'cat' => esc_html__( 'Category', 'pennews' )
	)
) );
$wp_customize->add_setting( 'penci_autoload_prev_number', array(
	'default'           => 1,
	'sanitize_callback' => array( $sanitizer, 'html' ),
) );
$wp_customize->add_control( new Penci_Customize_Number_Control( $wp_customize, 'penci_autoload_prev_number', array(
	'label'       => esc_html__( 'Auto Show "Previous Post" after x Post', 'pennews' ),
	'section'     => 'penci_single',
	'settings'    => 'penci_autoload_prev_number',
	'type'        => 'number',
	'description' => esc_html__( 'Uncheck this box if you would like to remove the automatic loading of the previous post below the article.', 'pennews' )
) ) );


$wp_customize->add_setting( 'penci_single_extra_heading', array(
	'sanitize_callback' => 'esc_url_raw'
) );
$wp_customize->add_control( new Penci_Customize_Heading_Control( $wp_customize, 'penci_single_extra_heading', array(
	'label'    => esc_html__( 'Extra', 'pennews' ),
	'section'  => 'penci_single',
	'settings' => 'penci_single_extra_heading',
	'type'     => 'heading',
) ) );

$single_list_check_extra = array(
	'penci_caption_above_img'    => esc_html__( 'Show caption above image', 'pennews' ),
	'penci_hide_single_comments' => esc_html__( 'Hide Post Comments', 'pennews' ),
	'penci_hide_single_gallery'  => esc_html__( 'Disable Gallery Feature from This Theme', 'pennews' ),
);

foreach ( $single_list_check_extra as $id_option => $label_option ) {
	$wp_customize->add_setting( $id_option, array(
		'sanitize_callback' => array( $sanitizer, 'checkbox' ),
	) );
	$wp_customize->add_control( new WP_Customize_Control(
		$wp_customize,
		$id_option,
		array(
			'label'    => $label_option,
			'section'  => 'penci_single',
			'type'     => 'checkbox',
			'settings' => $id_option,
		)
	) );
}

$wp_customize->add_setting( 'penci_rel_com_boxtitle_fsize', array(
	'sanitize_callback' => array( $sanitizer, 'html' )
) );

$wp_customize->add_control( new Penci_Customize_Font_Size_Control( $wp_customize, 'penci_rel_com_boxtitle_fsize', array(
	'label'    => esc_html__( 'Custom Font Size For Related Post & Comments Heading Titltes', 'pennews' ),
	'section'  => 'penci_single',
	'settings' => 'penci_rel_com_boxtitle_fsize',
	'type'     => 'font_size',
) ) );

$wp_customize->add_setting( 'penci_single_next_prev_label', array(
	'sanitize_callback' => array( $sanitizer, 'html' )
) );

$wp_customize->add_control( new Penci_Customize_Font_Size_Control( $wp_customize, 'penci_single_next_prev_label', array(
	'label'    => esc_html__( 'Custom Font Size For Prev/Next Post Text', 'pennews' ),
	'section'  => 'penci_single',
	'settings' => 'penci_single_next_prev_label',
	'type'     => 'font_size',
) ) );

$wp_customize->add_setting( 'penci_single_next_prev_title', array(
	'sanitize_callback' => array( $sanitizer, 'html' )
) );

$wp_customize->add_control( new Penci_Customize_Font_Size_Control( $wp_customize, 'penci_single_next_prev_title', array(
	'label'    => esc_html__( 'Custom Font Size For Posts Title Next/Prev', 'pennews' ),
	'section'  => 'penci_single',
	'settings' => 'penci_single_next_prev_title',
	'type'     => 'font_size',
) ) );

$wp_customize->add_setting( 'penci_single_author_size', array(
	'sanitize_callback' => array( $sanitizer, 'html' )
) );

$wp_customize->add_control( new Penci_Customize_Font_Size_Control( $wp_customize, 'penci_single_author_size', array(
	'label'    => esc_html__( 'Custom Font Size For Author Name', 'pennews' ),
	'section'  => 'penci_single',
	'settings' => 'penci_single_author_size',
	'type'     => 'font_size',
) ) );

// Custom the height of images on gallery images
$wp_customize->add_setting( 'penci_image_height_gallery', array(
	'sanitize_callback' => array( $sanitizer, 'html' )
) );
$wp_customize->add_control( new Penci_Customize_Number_Control( $wp_customize, 'penci_image_height_gallery', array(
	'label'    => esc_html__( 'Custom the height of images on gallery images', 'pennews' ),
	'section'  => 'penci_single',
	'settings' => 'penci_image_height_gallery',
	'type'     => 'number',
) ) );

