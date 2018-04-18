<?php
/**
 * Enqueue scripts and styles.
 */
function penci_scripts() {
	wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/css/font-awesome.min.css', '', '4.5.0' );
	wp_enqueue_style( 'line-awesome', get_template_directory_uri() . '/css/line-awesome.min.css', '', '4.5.0' );
	wp_enqueue_style( 'weather-icons', get_template_directory_uri() . '/css/weather-icons.min.css', '', '2.0.8' );
	wp_enqueue_style( 'penci-fonts', penci_fonts_url() );
	wp_enqueue_style( 'penci-style', get_stylesheet_uri(), '', '1.1' );

	wp_enqueue_script( 'penci', get_template_directory_uri() . '/js/script.min.js', array( 'jquery' ), '1.1', true );

	$localize_script = array(
		'ajaxUrl'         => admin_url( 'admin-ajax.php' ),
		'nonce'           => wp_create_nonce( 'ajax-nonce' ),
		'errorMsg'        => esc_html__( 'Something wrong happened. Please try again.', 'pennews' ),
		'login'           => penci_get_tran_setting( 'penci_plogin_email_place' ),
		'password'        => penci_get_tran_setting( 'penci_plogin_pass_place' ),
		'errorPass'       => '<p class="message message-error">' . penci_get_tran_setting( 'penci_plogin_mess_error_email_pass' ) . '</p>',
		'prevNumber'      => penci_get_setting( 'penci_autoload_prev_number' ),
		'minlengthSearch' => penci_get_setting( 'penci_ajaxsearch_minlength' ),
		'linkTitle'       => penci_get_tran_setting( 'penci_linkTitle_text' ),
		'linkTextAll'     => penci_get_tran_setting( 'penci_linkTextAll_text' ),
		'linkText'        => penci_get_tran_setting( 'penci_linkText_text' ),

	);
	wp_localize_script( 'penci', 'PENCILOCALIZE', $localize_script );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}

add_action( 'wp_enqueue_scripts', 'penci_scripts' );

if( !function_exists('penci_admin_scripts') ) {
	function penci_admin_scripts( $hook ) {

		if ( $hook == 'widgets.php' ) {
			wp_enqueue_style( 'wp-color-picker' );
			wp_enqueue_script( 'wp-color-picker' );
			wp_enqueue_media();
			wp_enqueue_script( 'penci-admin-widget', get_template_directory_uri() . '/js/admin-widget.js', array( 'jquery', 'colorpicker' ), '1.0.0', true );

			wp_localize_script( 'penci-admin-widget', 'Penci', array(
				'WidgetImageTitle'   => esc_html__( 'Select an image', 'pennews' ),
				'WidgetImageButton'  => esc_html__( 'Insert into widget', 'pennews' ),
				'ajaxUrl'            => admin_url( 'admin-ajax.php' ),
				'nonce'              => wp_create_nonce( 'ajax-nonce' ),
				'sidebarAddFails'    => esc_html__( 'Adding custom sidebar fails.', 'pennews' ),
				'sidebarRemoveFails' => esc_html__( 'Removing custom sidebar fails.', 'pennews' ),
				'cfRemovesidebar'    => esc_html__( 'Are you sure you want to remove this custom sidebar?', 'pennews' ),
			) );
		}

		wp_enqueue_style( 'penci-admin', get_template_directory_uri() . '/css/admin.css' );
	}
}
add_action( 'admin_enqueue_scripts', 'penci_admin_scripts' );

/**
 * Get Google fonts URL for the theme.
 *
 * @return string Google fonts URL for the theme.
 */
function penci_fonts_url() {
	$fonts   = array();
	$subsets = 'latin,latin-ext';

	$array_fonts = array( 'Roboto', 'Mukta Vaani', 'Oswald', 'Teko' );


	$array_options = $array_get = array();

	if ( get_theme_mod( 'penci_font_textlogo' ) ) {
		$array_options[] = get_theme_mod( 'penci_font_textlogo' );
	}
	if ( get_theme_mod( 'penci_font_textlogo_on_mobile' ) ) {
		$array_options[] = get_theme_mod( 'penci_font_textlogo_on_mobile' );
	}
	if ( get_theme_mod( 'penci_fwidget_font_blocktitle' ) ) {
		$array_options[] = get_theme_mod( 'penci_fwidget_font_blocktitle' );
	}
	if ( get_theme_mod( 'penci_font_for_title' ) ) {
		$array_options[] = get_theme_mod( 'penci_font_for_title' );
	}
	if ( get_theme_mod( 'penci_font_for_body' ) ) {
		$array_options[] = get_theme_mod( 'penci_font_for_body' );
	}
	if ( get_theme_mod( 'penci_font_slogan' ) ) {
		$array_options[] = get_theme_mod( 'penci_font_slogan' );
	}
	if ( get_theme_mod( 'penci_font_main_menu_item' ) ) {
		$array_options[] = get_theme_mod( 'penci_font_main_menu_item' );
	}
	if ( get_theme_mod( 'penci_font_blocktitle' ) ) {
		$array_options[] = get_theme_mod( 'penci_font_blocktitle' );
	}
	if ( get_theme_mod( 'penci_footer_font_textlogo' ) ) {
		$array_options[] = get_theme_mod( 'penci_footer_font_textlogo' );
	}

	if ( get_theme_mod( 'penci_block_pag_rmore_font' ) ) {
		$array_options[] = get_theme_mod( 'penci_block_pag_rmore_font' );
	}

	if ( get_theme_mod( 'penci_arch_rmore_font' ) ) {
		$array_options[] = get_theme_mod( 'penci_arch_rmore_font' );
	}

	if ( get_theme_mod( 'penci_font_block_heading_title' ) ) {
		$array_options[] = get_theme_mod( 'penci_font_block_heading_title' );
	}

	if ( get_theme_mod( 'penci_font_textlogo_mobile_nav' ) ) {
		$array_options[] = get_theme_mod( 'penci_font_textlogo_mobile_nav' );
	}

	if( ! empty( $array_options ) ) {
		foreach( $array_options as $font ) {
			$font_family  = str_replace( '"', '', $font );
			$font_family_explo   = explode( ", ", $font_family );
			$array_get[]         = $font_family_explo[0];
		}
	}

	$array_end  = array_unique( array_merge( $array_fonts, $array_get ), SORT_REGULAR );

	$string_end = implode( $array_end, ':300,300italic,400,400italic,500,500italic,700,700italic,800,800italic|' );
	$string_end .= ':300,300italic,400,400italic,500,500italic,700,700italic,800,800italic';

	if ( 'off' !== _x( 'on', 'Google font: on or off', 'pennews' ) ) {
		$fonts_url = add_query_arg( 'family', urlencode( $string_end . ':300,300italic,400,400italic,500,500italic,700,700italic,800,800italic&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext' ), "//fonts.googleapis.com/css" );
	}

	return $fonts_url;
}

add_filter( 'style_loader_src', 'penci_remove_ver_fonts_google', 9999, 2 );

/**
 * Function to remove version numbers
 */
if ( ! function_exists( 'penci_remove_ver_fonts_google' ) ) {
	function penci_remove_ver_fonts_google( $src, $handle ) {

		if ( 'penci-fonts' != $handle ) {
			return $src;
		}
		if ( strpos( $src, 'ver=' ) ) {
			$src = remove_query_arg( 'ver', $src, $handle );
		}

		return $src;
	}
}

if( ! function_exists( 'penci_add_css_ie' ) ) {
	function penci_add_css_ie() {
		if (preg_match('~MSIE|Internet Explorer~i', $_SERVER['HTTP_USER_AGENT']) || (strpos($_SERVER['HTTP_USER_AGENT'], 'Trident/7.0; rv:11.0') !== false)) {
			echo '<st' . 'yle type="text/css">.main-navigation.pencimn-slide_down ul li:hover > ul,.main-navigation.pencimn-slide_down ul ul{-webkit-transform: none;-moz-transform: none; -ms-transform: none; -o-transform: none; transform: none;}</st' . 'yle>';
		}
	}
}

add_action('wp_head', 'penci_add_css_ie', 999 );