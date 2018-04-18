<?php

/**
 * PenNews functions and definitions
 *
 * @link    https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package PenNews
 */

if ( ! function_exists( 'penci_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 */
	function penci_setup() {

		load_theme_textdomain( 'pennews', get_template_directory() . '/languages' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );

		add_image_size( 'penci-thumb-480-645', 480, 645, true ); // 1 - 1.3448
		add_image_size( 'penci-thumb-480-480', 480, 480, true ); // 1
		add_image_size( 'penci-thumb-480-320', 480, 320, true ); // 1.5

		add_image_size( 'penci-thumb-280-376', 280, 376, true ); // 1 - 1.3448
		add_image_size( 'penci-thumb-280-186', 280, 186, true ); // 1.5
		add_image_size( 'penci-thumb-280-280', 280, 280, true ); // 1.1

		add_image_size( 'penci-thumb-760-570', 760, 570, true ); // 1.3
		add_image_size( 'penci-thumb-1920-auto', 1920, 999999, false );
		add_image_size( 'penci-thumb-960-auto', 960, 999999, false );
		add_image_size( 'penci-thumb-auto-400', 999999, 400, false );
		add_image_size( 'penci-masonry-thumb', 585, 99999, false );

		add_theme_support( 'post-formats', array( 'gallery', 'audio', 'video' ) );

		add_editor_style( array( penci_fonts_url(), get_template_directory_uri() . '/css/font-awesome.min.css', 'css/editor-style.css', ) );

		register_nav_menus( array(
				'menu-1' => esc_html__( 'Primary', 'pennews' ),
				'menu-2' => esc_html__( 'Footer', 'pennews' ),
			)
		);


		add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', ) );
		add_theme_support( 'custom-background', apply_filters( 'penci_custom_background_args', array( 'default-color' => '', 'default-image' => '', ) ) );
		add_theme_support( 'custom-logo' );
		add_theme_support( 'woocommerce' );
		add_theme_support( 'wc-product-gallery-lightbox' );

		if( ! penci_get_setting( 'penci_woo_disable_zoom' ) ):
			 add_theme_support( 'wc-product-gallery-zoom' );
  		endif;
	}
endif;
add_action( 'after_setup_theme', 'penci_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function penci_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'penci_content_width', 1400 );
}

add_action( 'after_setup_theme', 'penci_content_width', 0 );


require get_template_directory() . '/inc/default.php';
require get_template_directory() . '/inc/transition-default.php';
require get_template_directory() . '/inc/widgets.php';
require get_template_directory() . '/inc/fonts.php';
require get_template_directory() . '/inc/media.php';
require get_template_directory() . '/inc/custom-header.php';
require get_template_directory() . '/inc/template-tags.php';
require get_template_directory() . '/inc/extras.php';
require get_template_directory() . '/inc/excerpt.php';
require get_template_directory() . '/inc/jetpack.php';
require get_template_directory() . '/inc/customizer/customizer.php';
require get_template_directory() . '/inc/social-media.php';
require get_template_directory() . '/inc/social-share.php';
require get_template_directory() . '/inc/breadcrumbs.php';
require get_template_directory() . '/inc/post-format/post-format.php';
require get_template_directory() . '/inc/custom-css/custom-css.php';
require get_template_directory() . '/inc/max-mega-menu/max-mega-menu.php';
require get_template_directory() . '/inc/login-popup.php';
require get_template_directory() . '/inc/woocommerce.php';
require get_template_directory() . '/inc/single-loadmore.php';
require get_template_directory() . '/inc/ajaxified-search.php';
require get_template_directory() . '/inc/json-schema-validar.php';

require get_template_directory() . '/inc/custom-sidebar.php';
Penci_Custom_Sidebar::initialize();

/**
 * Load dashboard
 */
require get_template_directory() . '/inc/dashboard/class-penci-dashboard.php';
$dashboard = new Penci_Dashboard();

if ( is_admin() ) {
	require_once get_template_directory() . '/inc/class-tgm-plugin-activation.php';
	require_once get_template_directory() . '/inc/admin/plugins.php';
}

remove_action( 'wp_head', 'rest_output_link_wp_head' );

require_once('wp-updates-theme.php');
new WPUpdatesThemeUpdater_2239( 'http://wp-updates.com/api/2/theme', basename( get_template_directory() ) );
