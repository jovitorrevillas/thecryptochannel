<?php
/*
 * wp_nav_menu( array(
 *		'container'      => '',
 *		'theme_location' => 'menu-1',
 *		'fallback_cb'    => 'penci_menu_fallback',
 *		'walker'         => class_exists( 'Penci_Walker_Nav_Menu' ) ? new Penci_Walker_Nav_Menu() : ''
 *	) );
 */
require_once dirname( __FILE__ ) . '/main-menu.php';
require_once dirname( __FILE__ ) . '/walker_nav_menu.php';
require_once dirname( __FILE__ ) . '/menu-render.php';
require_once dirname( __FILE__ ) . '/ajax-filter.php';
