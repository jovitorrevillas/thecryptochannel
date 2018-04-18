<?php
if ( function_exists( 'penci_customizer_page' ) ) {
	return;
}
function penci_customizer_page() {
	if ( ! is_page() ) {
		return '';
	}

	$css             = '';
	$size_post_title = get_theme_mod( 'penci_page_size_post_title' );

	if ( $size_post_title ) {
		$css .= sprintf( '.page .penci-entry-title{ font-size:%spx; }', esc_attr( $size_post_title ) );
	}

	$page_id = get_the_ID();
	if ( ! empty( $page_id ) ) {
		$use_option_current  = get_post_meta( $page_id, 'penci_use_option_current_page', true );
		$size_post_title_pre = get_post_meta( $page_id, 'penci_page_size_post_title', true );
		if ( ! empty( $use_option_current ) && $size_post_title_pre ) {
			$css .= sprintf( '.page-id-%s .penci-entry-title{ font-size:%spx; }', esc_attr( $page_id ), esc_attr( $size_post_title_pre ) );
		}
	}

	return $css;
}