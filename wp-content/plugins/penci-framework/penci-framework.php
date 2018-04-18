<?php
/*
Plugin Name: Penci Framework
Plugin URI: http://pencidesign.com/
Description: Penci Framework.
Version: 1.1
Author: PenciDesign
Author URI: http://pencidesign.com/
License: GPLv2 or later
Text Domain: penci-framework
*/

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Main plugin class.
 */
class Penci_Framework {
	/**
	 * Constructor
	 *
	 * Add actions for methods that define constants, load translation and load includes.
	 *
	 * @since 0.1
	 * @access public
	 */
	public function __construct() {

		define( 'PENCI_FW_VERSION', '1.0.0' );
		define( 'PENCI_ADDONS_DIR', plugin_dir_path( __FILE__ ) );
		define( 'PENCI_ADDONS_URL', plugin_dir_url( __FILE__ ) );

		$this->load_files();

		if ( defined( 'WPB_VC_VERSION' ) ) {
			add_action( 'vc_before_init', array( $this, 'init' ), 5 );
			if ( defined( 'WPB_VC_VERSION' ) ) {
				add_action( 'admin_print_scripts-post.php', array( $this, 'printScriptsMessages', ), 9999 );
				add_action( 'admin_print_scripts-post-new.php', array( $this, 'printScriptsMessages', ), 9999 );
			}

			add_action( 'vc_after_init', array( $this, 'vc_after_init_actions' ) );
		}

		add_action( 'init', array( $this, 'load_translation' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'admin_scripts' ) );
		add_action( 'penci_page_404_after',array( $this, 'penci_page_404_add_last_news' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue' ) );
	}

	/**
	 * Remove VC Elements
	 */
	function vc_after_init_actions() {
		if( function_exists('vc_remove_element') ){
			vc_remove_element( 'vc_wp_archives' );
			vc_remove_element( 'vc_wp_calendar' );
			vc_remove_element( 'vc_wp_categories' );
			vc_remove_element( 'vc_wp_custommenu' );
			vc_remove_element( 'vc_wp_links' );
			vc_remove_element( 'vc_wp_meta' );
			vc_remove_element( 'vc_wp_pages' );
			vc_remove_element( 'vc_wp_posts' );
			vc_remove_element( 'vc_wp_recentcomments' );
			vc_remove_element( 'vc_wp_rss' );
			vc_remove_element( 'vc_wp_search' );
			vc_remove_element( 'vc_wp_tagcloud' );
			vc_remove_element( 'vc_wp_text' );
		}

		add_filter( 'vc_shortcode_set_template_vc_row', array( $this, 'set_template_vc_row' ) );
		add_filter( 'vc_shortcode_set_template_vc_row_inner', array( $this,'set_template_vc_row_inner' ) );
		add_filter( 'vc_shortcode_set_template_vc_column', array( $this,'set_template_vc_column' ) );
		add_filter( 'vc_shortcode_set_template_vc_column_inner',array( $this,'set_template_vc_column_inner'  ) );

		add_action( 'vc_frontend_editor_render', array( $this, 'frontend_editor_render' ) );
		add_action( 'vc_load_iframe_jscss', array( $this, 'load_iframe_jscss' ) );
	}

	function frontend_editor_render() {
		wp_enqueue_script( 'penci-frontend_editor', plugins_url( 'assets/js/frontend-editor.js', __FILE__ ), array( 'vc-frontend-editor-min-js' ), '1.0', true );
	}

	function load_iframe_jscss() {
		wp_enqueue_style( 'penci-frontend_editor', plugins_url( 'assets/css/frontend-editor.css', __FILE__ ), '', PENCI_FW_VERSION );
	}

	public function enqueue(){
		wp_enqueue_style( 'pencisc', plugins_url( 'assets/css/single-shortcode.css', __FILE__ ), '');
	}

	function penci_page_404_add_last_news() {
		if ( function_exists( 'penci_get_setting' ) && penci_get_setting( 'penci_404_hide_latest_news' ) ) {
			return;
		}

		echo do_shortcode( '[penci_block_14 style_block_title="style-title-1" title="Latest News" block_title_url="#" limit="8" post_excrept_length="15" style_pag="load_more"]' );
	}

	/**
	 * Load translation
	 */
	public function load_translation() {
		load_plugin_textdomain( 'penci-framework', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	}


	/**
	 * Enqueue scripts and styles.
	 */
	public function printScriptsMessages() {
		if ( ! vc_is_frontend_editor() && $this->isValidPostType( get_post_type() ) ) {
			wp_enqueue_script( 'pen-vc-backend', plugins_url( 'assets/js/vc-backend.js', __FILE__ ), array( 'vc-backend-min-js' ), '', true );

			$localize_script = array(
				'ajaxUrl'   => admin_url( 'admin-ajax.php' ),
				'nonce'     => wp_create_nonce( 'ajax-nonce' ),
			);
			wp_localize_script( 'pen-vc-backend', 'PENCILOCALIZE', $localize_script );
		}
	}

	public function isValidPostType( $type = '' ) {
		if ( 'vc_grid_item' === $type ) {
			return false;
		}

		return vc_check_post_type( ! empty( $type ) ? $type : get_post_type() );
	}


	/**
	 * Enqueue style for the admin.
	 *
	 * @param $hook
	 */
	public function admin_scripts( $hook ) {
	}

	/**
	 * Load all file
	 */
	public function load_files() {

		// Lib
		require_once dirname( __FILE__ ) . '/lib/meta-box/meta-box.php';
		require_once dirname( __FILE__ ) . '/lib/include/include.php';
		require_once dirname( __FILE__ ) . '/lib/group/group.php';
		require_once dirname( __FILE__ ) . '/lib/conditional/conditional.php';
		require_once dirname( __FILE__ ) . '/lib/columns/meta-box-columns.php';
		require_once dirname( __FILE__ ) . '/lib/mb-settings-page/mb-settings-page.php';
		require_once dirname( __FILE__ ) . '/inc/meta-boxes.php';

		require_once dirname( __FILE__ ) . '/inc/post-classes.php';
		new Penci_Framework_Post_Classes;

		// Module
		require_once dirname( __FILE__ ) . '/inc/pre-query.php';
		require_once dirname( __FILE__ ) . '/inc/cache.php';
		require_once dirname( __FILE__ ) . '/inc/social-counter/social-counter.php';
		require_once dirname( __FILE__ ) . '/inc/user-social.php';
		require_once dirname( __FILE__ ) . '/inc/post-like.php';
		require_once dirname( __FILE__ ) . '/inc/post-views-count.php';
		require_once dirname( __FILE__ ) . '/inc/pagination.php';
		require_once dirname( __FILE__ ) . '/inc/transition-text.php';
		require_once dirname( __FILE__ ) . '/inc/videos_list.php';
		require_once dirname( __FILE__ ) . '/inc/pinterest.php';

		require_once dirname( __FILE__ ) . '/inc/global_blocks.php';
		require_once dirname( __FILE__ ) . '/inc/custom-vc/custom-vc.php';
		new Penci_Custom_VC;

		require_once dirname( __FILE__ ) . '/inc/extra.php';
		require_once dirname( __FILE__ ) . '/inc/helper.php';
		new Penci_Framework_Helper;
		require_once dirname( __FILE__ ) . '/inc/helper-shortcode.php';
		new Penci_Helper_Shortcode;

		require_once dirname( __FILE__ ) . '/inc/global_js.php';
		require_once dirname( __FILE__ ) . '/inc/ajax-filter.php';
		new Penci_Framework_Ajax_Filter;

		require_once dirname( __FILE__ ) . '/inc/shortcode-params.php';

		require_once dirname( __FILE__ ) . '/mega-menu/mega-menu.php';
		require_once dirname( __FILE__ ) . '/weather/weather.php';

		//require_once dirname( __FILE__ ) . '/post-gallery/gallery.php';

		require_once dirname( __FILE__ ) . '/instagram/instaram.php';
		require_once dirname( __FILE__ ) . '/instagram/widget.php';

		// Widget
		require_once dirname( __FILE__ ) . '/inc/module-widget.php';
		require_once dirname( __FILE__ ) . '/widgets/widgets.php';

		require_once dirname( __FILE__ ) . '/single-shortcodes/init.php';
	}

	/**
	 * Register shortcodes.
	 */
	public function init() {
		// Visual Composer Addons
		if ( ! defined( 'WPB_VC_VERSION' ) ) {
			return;
		}

		require_once dirname( __FILE__ ) . '/inc/params/params.php';
		require_once dirname( __FILE__ ) . '/inc/shortcode-classes.php';
		require_once dirname( __FILE__ ) . '/inc/shortcode-settings.php';

		$this->load_shortcodes();
	}

	/**
	 * Load all shortcodes.
	 */
	protected function load_shortcodes() {
		$dirs = glob( dirname( __FILE__ ) . '/shortcodes/*', GLOB_ONLYDIR );

		foreach ( $dirs as $dir ) {
			$settings = include "$dir/settings.php";
			new PenCi_Shortcode_Settings( basename( $dir ), $settings );
		}
	}

	public function set_template_vc_row() {
		return PENCI_ADDONS_DIR . "vc_templates/vc_row.php";
	}

	public function set_template_vc_row_inner() {
		return PENCI_ADDONS_DIR . "vc_templates/vc_row_inner.php";
	}

	public function set_template_vc_column() {
		return PENCI_ADDONS_DIR . "vc_templates/vc_column.php";
	}

	public function set_template_vc_column_inner() {
		return PENCI_ADDONS_DIR . "vc_templates/vc_column_inner.php";
	}
}

new Penci_Framework;
