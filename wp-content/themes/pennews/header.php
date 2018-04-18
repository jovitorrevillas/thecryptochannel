<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link    https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package PenNews
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>

	<?php
	if( get_theme_mod( 'penci_custom_code_inside_head_tag' ) ){
		echo do_shortcode( get_theme_mod( 'penci_custom_code_inside_head_tag' ) );
	}
	?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'pennews' ); ?></a>
	<?php

	$pennews_hide_header = false;
	if ( is_page() ) {
		$pennews_hide_header = get_post_meta( get_the_ID(), 'penci_hide_page_header', true );
	}

	if( ! $pennews_hide_header ):
		do_action( 'penci_header_top' );

		$header_layout = penci_get_setting( 'penci_header_layout' );
		if( 'header_s7' != $header_layout ){
			get_template_part( 'template-parts/topbar/topbar' );
		}

		get_template_part( 'template-parts/header/' . penci_get_setting( 'penci_header_layout' ) );
		get_template_part( 'template-parts/header/header_mobile' );
		penci_render_google_adsense( 'penci_archive_ad_below_header' );
		get_template_part( 'template-parts/header/header-signup-form' );
	endif;
	?>
	<div id="content" class="site-content">
