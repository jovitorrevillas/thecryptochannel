<?php
/**
 * Add theme dashboard page
 *
 * @package EightyDays
 */

/**
 * Dashboard class.
 */
class Penci_Dashboard {
	/**
	 * Store the theme data.
	 *
	 * @var WP_Theme Theme data.
	 */
	private $theme;

	/**
	 * Theme slug.
	 *
	 * @var string Theme slug.
	 */
	private $slug;
	
	/**
	 * System status.
	 *
	 * @var array System status.
	 */
	private $system_status;

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->theme = wp_get_theme();
		$this->slug  = $this->theme->template;
		$this->system_status  = $this->system_status();

		add_action( 'admin_menu', array( $this, 'add_menu' ) );
		add_action('admin_bar_menu', array( $this, 'add_bar_menu' ), 999 );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		add_action( 'admin_init', array( $this, 'redirect' ) );
		add_filter('upload_mimes', array( $this, 'custom_mime_types' ) );

		$this->load_files();
	}

	function load_files(){
		require_once dirname( __FILE__ ) . '/inc/require-activation.php';
	}

	public function custom_mime_types($mime_types){
		$mime_types['woff'] = 'application/x-font-woff';
		$mime_types['svg'] = 'image/svg+xml';
		return $mime_types;
	}

	/**
	 * Add theme dashboard page.
	 */
	public function add_menu() {

		add_menu_page( 'PenNews', 'PenNews', 'manage_options', 'pennews_dashboard_welcome', array( $this, 'dashboard_welcome' ), null, 3 );

		add_submenu_page( 'pennews_dashboard_welcome', esc_html__( 'System status', 'pennews' ), esc_html__( 'System status', 'pennews' ), 'manage_options', 'pennews_system_status', array( $this, 'dashboard_system_status' ) );
		add_submenu_page( 'pennews_dashboard_welcome', esc_html__( 'Custom fonts', 'pennews' ), esc_html__( 'Fonts options', 'pennews' ), 'manage_options', 'pennews_custom_fonts', array( $this, 'custom_fonts' ) );
		add_submenu_page( 'pennews_dashboard_welcome', esc_html__( 'Migrator Data', 'pennews' ), esc_html__( 'Migrator Data', 'pennews' ), 'manage_options', 'pennews_migrator', array( $this, 'migrator_panel' ) );

		$this->replace_text_submenu();

		add_action( 'admin_init', array( $this, 'register_settings' ) );
	}

	public function register_settings(){
		register_setting( 'pennews-settings-group', 'pennews_enable_all_fontgoogle' );
		register_setting( 'pennews-settings-group', 'pennews_custom_fontgoogle' );

		register_setting( 'pennews-settings-group', 'pennews_custom_font1' );
		register_setting( 'pennews-settings-group', 'pennews_custom_fontfamily1' );
		register_setting( 'pennews-settings-group', 'pennews_custom_font2' );
		register_setting( 'pennews-settings-group', 'pennews_custom_fontfamily2' );
		register_setting( 'pennews-settings-group', 'pennews_custom_font3' );
		register_setting( 'pennews-settings-group', 'pennews_custom_fontfamily3' );

		register_setting( 'pennews-settings-group', 'pennews_custom_font4' );
		register_setting( 'pennews-settings-group', 'pennews_custom_fontfamily4' );
		register_setting( 'pennews-settings-group', 'pennews_custom_font5' );
		register_setting( 'pennews-settings-group', 'pennews_custom_fontfamily5' );
		register_setting( 'pennews-settings-group', 'pennews_custom_font6' );
		register_setting( 'pennews-settings-group', 'pennews_custom_fontfamily6' );
		register_setting( 'pennews-settings-group', 'pennews_custom_font7' );
		register_setting( 'pennews-settings-group', 'pennews_custom_fontfamily7' );
		register_setting( 'pennews-settings-group', 'pennews_custom_font8' );
		register_setting( 'pennews-settings-group', 'pennews_custom_fontfamily8' );
		register_setting( 'pennews-settings-group', 'pennews_custom_font9' );
		register_setting( 'pennews-settings-group', 'pennews_custom_fontfamily9' );
		register_setting( 'pennews-settings-group', 'pennews_custom_font10' );
		register_setting( 'pennews-settings-group', 'pennews_custom_fontfamily10' );
	}

	public function replace_text_submenu(){
		global $submenu;
		$submenu['pennews_dashboard_welcome'][0][0] = esc_html__( 'Welcome', 'pennews' );
	}


	public function add_bar_menu() {
		global $wp_admin_bar;
		if ( ! is_super_admin() || ! is_admin_bar_showing() ) {
			return;
		}

		$wp_admin_bar->add_menu(array(
			'parent' => 'site-name',
			'id' => 'pennews-dashboard',
			'title' => $this->theme->name,
			'href' => admin_url('admin.php?page=pennews_dashboard_welcome')
		));
	}

	/**
	 * Show dashboard page.
	 */
	public function dashboard_welcome() {
		?>
		<div class="wrap about-wrap penci-about-wrap">
			<?php include get_template_directory() . '/inc/dashboard/sections/welcome.php'; ?>
			<?php include get_template_directory() . '/inc/dashboard/sections/getting-started.php'; ?>
		</div>
		<?php
	}

	public function dashboard_system_status() {
		?>
		<div class="wrap about-wrap penci-about-wrap">
			<?php include get_template_directory() . '/inc/dashboard/sections/welcome.php'; ?>
			<?php include get_template_directory() . '/inc/dashboard/sections/system-status.php'; ?>
		</div>
		<?php
	}
	public function custom_fonts() {
		?>
		<div class="wrap about-wrap penci-about-wrap">
			<?php include get_template_directory() . '/inc/dashboard/sections/welcome.php'; ?>
			<?php include get_template_directory() . '/inc/dashboard/sections/custom-fonts.php'; ?>
		</div>
		<?php
	}

	public function migrator_panel() {
		?>
		<div class="wrap about-wrap penci-about-wrap">
			<h1><?php esc_html_e( 'PenNews Migrator Data','pennews' ); ?></h1>
			<div class="about-text"><?php esc_html_e( 'Migration plugin from PenciDesign for all your blog data. Switch to PenNews without losing data.','pennews' ); ?></div>
			<a target="_blank" href="<?php echo esc_url( 'http://pennews.pencidesign.com/' ); ?>" class="wp-badge">PenciDesign</a>
			<h2 class="nav-tab-wrapper">
				<a href="<?php echo admin_url( 'admin.php?page=pennews_dashboard_welcome' ) ?>" class="nav-tab"><?php esc_html_e( 'Getting started', 'pennews' ); ?></a>
				<a href="<?php echo admin_url( 'customize.php' ) ?>" class="nav-tab"><?php esc_html_e( 'Customize Style', 'pennews' ); ?></a>
				<a href="<?php echo admin_url( 'admin.php?page=pennews_system_status' ) ?>" class="nav-tab"><?php esc_html_e( 'System status', 'pennews' ); ?></a>
				<a href="<?php echo admin_url( 'admin.php?page=pennews_custom_fonts' ) ?>" class="nav-tab"><?php esc_html_e( 'Fonts options', 'pennews' ); ?></a>
				<a href="<?php echo admin_url( 'admin.php?page=pennews_migrator' ) ?>" class="nav-tab nav-tab-active"><?php esc_html_e( 'Migrator Data', 'pennews' ); ?></a>
				<?php if( ! penci_pennews_is_activated() ): ?>
					<a href="<?php echo admin_url( 'admin.php?page=pennews_active_theme' ) ?>" class="nav-tab"><?php esc_html_e( 'Active theme', 'pennews' ); ?></a>
				<?php endif; ?>
			</h2>
			<div class="penci-migrator-panel">
				<?php
				if( class_exists( 'Penci_PenNews_Migrator' ) ){
					do_action( 'penci_migrator_panel' );
				}else{
					echo '<p>';
					esc_html_e( 'Penci PenNews Migrator Plugin is required, click on the button below to go to the plugins page to install it.','pennews' );
					echo '</p>';
					?>
					<a class="button button-primary button-hero" href="<?php echo admin_url( 'plugins.php' ); ?>">Go to the Plugins Page</a>
					<?php
				}

				?>
			</div>
		</div>
		<?php
	}

	/**
	 * Enqueue scripts for dashboard page.
	 *
	 * @param string $hook Page hook.
	 */
	public function enqueue_scripts( $hook ) {
		if( 'pennews_page_pennews_custom_fonts' == $hook ||
		    'pennews_page_pennews_system_status' == $hook ||
		    'toplevel_page_pennews_dashboard_welcome' == $hook ||
		    'pennews_page_pennews_active_theme' == $hook ||
		    'pennews_page_pennews_migrator' == $hook ||
		    'pennews_dashboard_welcome' == $hook ){
			wp_enqueue_media();
			wp_enqueue_style( "{$this->slug}-semantic", get_template_directory_uri() . '/inc/dashboard/css/semantic.min.css' );
			wp_enqueue_style( "{$this->slug}-dashboard-style", get_template_directory_uri() . '/inc/dashboard/css/dashboard-style.css' );
			wp_enqueue_script( "{$this->slug}-transition", get_template_directory_uri() . '/inc/dashboard/js/transition.min.js', array( 'jquery' ) );
			wp_enqueue_script( "{$this->slug}-dropdown", get_template_directory_uri() . '/inc/dashboard/js/dropdown.min.js', array( 'jquery' ) );
			wp_enqueue_script( "{$this->slug}-dashboard-script", get_template_directory_uri() . '/inc/dashboard/js/script.js', array( 'jquery', "{$this->slug}-dropdown" ) );

			$custom_fontgoogle = get_option( 'pennews_custom_fontgoogle' );
			$custom_fontgoogle = array_filter( explode( '|', $custom_fontgoogle . '|' ) );


			$localize_script = array(
				'setSelected'    => $custom_fontgoogle,
				'ajaxUrl'         => admin_url( 'admin-ajax.php' ),
				'nonce'           => wp_create_nonce( 'ajax-nonce' )
			);
			wp_localize_script( "{$this->slug}-dashboard-script", 'PENCIDASHBOARD', $localize_script );
		}

	}

	/**
	 * Redirect to dashboard page after theme activation.
	 */
	public function redirect() {
		global $pagenow;
		if ( is_admin() && isset( $_GET['activated'] ) && 'themes.php' === $pagenow ) {
			wp_safe_redirect( admin_url( "admin.php?page=pennews_dashboard_welcome" ) );
			exit;
		}
	}

	public function system_status(){
		$system_status = array(
			'Theme config' => array(
				array(
					'check_name' => esc_html__( 'Theme name', 'pennews' ),
					'tooltip' => esc_html__( 'Theme name', 'pennews' ),	
					'value' =>   $this->theme->name,
	           		'status' => 'info'	
				),
				array(
					'check_name' => esc_html__( 'Theme version', 'pennews' ),
					'tooltip' => esc_html__( 'Theme current version', 'pennews' ),
					'value' =>  $this->theme->version,
	           		'status' => 'info'	
				),
				array(
					'check_name' => esc_html__( 'Theme database version', 'pennews' ),
					'tooltip' => esc_html__( 'Theme database version', 'pennews' ),
					'value' =>  $this->theme->version,
	           		'status' => 'info'	
				),
			),
			'Server environment' => array(
				array(
					'check_name' => esc_html__( 'Server software', 'pennews' ),
					'tooltip' => esc_html__( 'Server software version', 'pennews' ),	
					'value' =>   esc_html( $_SERVER['SERVER_SOFTWARE'] ),
	           		'status' => 'info'	
				),
				array(
					'check_name' => esc_html__( 'PHP Version', 'pennews' ),
					'tooltip' => esc_html__( 'You should have PHP version 5.2.4 or greater (recommended: PHP 5.4 or greater)', 'pennews' ),
					'value' =>  phpversion(),
	           		'status' => 'info'	
				),
				array(
					'check_name' => esc_html__( 'post_max_size', 'pennews' ),
					'tooltip' => esc_html__( 'Sets max size of post data allowed. This setting also affects file upload. To upload large files you have to increase this value and in some cases you also have to increase the upload_max_filesize value.', 'pennews' ),
					'value' =>  sprintf( ini_get('post_max_size') . '<span class="status-small-text"> - You cannot upload images, themes and plugins that have a size bigger than this value.</span>'),
	           		'status' => 'info'	
				),
			),
			'WordPress and plugins' => array(
				array(
					'check_name' => esc_html__( 'WP Home URL', 'pennews' ),
					'tooltip' => esc_html__( 'WordPress Address (URL) - the address where your WordPress core files reside', 'pennews' ),	
					'value' =>   home_url(),
	           		'status' => 'info'	
				),array(
					'check_name' => esc_html__( 'WP Site URL', 'pennews' ),
					'tooltip' => esc_html__( 'Site Address (URL) - the address you want people to type in their browser to reach your WordPress blog', 'pennews' ),	
					'value' =>   site_url(),
	           		'status' => 'info'	
				),array(
					'check_name' => esc_html__( 'WP version', 'pennews' ),
					'tooltip' => esc_html__( 'Wordpress version', 'pennews' ),	
					'value' =>   get_bloginfo('version'),
	           		'status' => 'info'	
				),array(
					'check_name' => esc_html__( 'WP multisite enabled', 'pennews' ),
					'tooltip' => esc_html__( 'WP multisite', 'pennews' ),	
					'value' =>   is_multisite() ? esc_html__( 'Yes','pennews' ) : esc_html__( 'No','pennews' ),
	           		'status' => 'info'	
				),array(
					'check_name' => esc_html__( 'WP Language', 'pennews' ),
					'tooltip' => esc_html__( 'WP Language - can be changed from Settings -> Genera', 'pennews' ),	
					'value' =>   get_locale(),
	           		'status' => 'info'	
				),
			)
		);

		 $max_input_vars = ini_get('max_input_vars');

	 	if ($max_input_vars == 0 or $max_input_vars >= 2000 ) {
	       $system_status['Server environment'][] = array(
	            'check_name' => esc_html__( 'max_input_vars','pennews' ),
	            'tooltip' => esc_html__( 'This parameter is properly set','pennews' ),
	            'value' =>  $max_input_vars,
	            'status' => 'green'
	        );
	    } else {
	    	$system_status['Server environment'][] = array(
	            'check_name' => esc_html__( 'max_input_vars','pennews' ),
	            'tooltip' => esc_html__( 'This sets how many input variables may be accepted (limit is applied to $_GET, $_POST and $_COOKIE superglobal separately). By default this parameter is set to 1000 and this may cause issues when saving the menu, we recommend that you increase it to 2000 or more. ','pennews' ),
	            'value' =>  $max_input_vars . '<span class="status-small-text"></span>',
	            'status' => 'green'
	        );
	    }

	     // Wp debug
	    if (defined('WP_DEBUG') and WP_DEBUG === true) {

	        $system_status['WordPress and plugins'][] = array(
	            'check_name' => esc_html__( 'WP_DEBUG', 'pennews' ),
	            'tooltip' => esc_html__( 'The debug mode is intended for development and it may display unwanted messages. You should disable it on your side.', 'pennews' ),
	            'value' => 'WP_DEBUG is enabled. <span class="status-small-text">It may display unwanted messages. To see how you can change this please check our guide.</span>',
	            'status' => 'yellow'
	        );
	    } else {
	        $system_status['WordPress and plugins'][] = array(
	            'check_name' => esc_html__( 'WP_DEBUG', 'pennews' ),
	            'tooltip' => esc_html__( 'The debug mode is disabled.', 'pennews' ),
	            'value' => esc_html__( 'False', 'pennews' ),
	            'status' => 'green'
	        );
	    }

		return $system_status;

	}
}
