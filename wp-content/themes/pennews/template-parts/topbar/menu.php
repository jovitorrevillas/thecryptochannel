<?php

$show_menu = penci_get_setting( 'penci_topbar_show_menu' );
$id_menu = penci_get_setting( 'penci_topbar_menu' );
if ( empty( $id_menu ) || empty( $show_menu )  ) {
	return;
}

wp_nav_menu( array(
	'menu' => $id_menu,
	'container_class' => 'topbar_item topbar__menu'
) );