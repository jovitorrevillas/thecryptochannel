<?php
if ( function_exists( 'penci_customizer_single' ) ) {
	return;
}
function penci_customizer_single() {
	if ( ! is_singular() ) {
		return '';
	}

	$css = '';

	$related_post_title_size = get_theme_mod( 'penci_related_post_title_size' );
	$rel_com_boxtitle_fsize  = get_theme_mod( 'penci_rel_com_boxtitle_fsize' );
	$single_author_size      = get_theme_mod( 'penci_single_author_size' );
	$single_next_prev_title  = get_theme_mod( 'penci_single_next_prev_title' );
	$single_next_prev_label  = get_theme_mod( 'penci_single_next_prev_label' );
	$single_size_post_meta   = get_theme_mod( 'penci_single_size_post_meta' );
	$single_size_post_title  = get_theme_mod( 'penci_single_size_post_title' );

	if ( $single_size_post_title ) {
		$css .= sprintf( '.single .penci-entry-title{ font-size:%spx; }', esc_attr( $single_size_post_title ) );
	}

	if ( $single_size_post_meta ) {
		$css .= sprintf( '.single .penci-entry-meta{ font-size:%spx; }', esc_attr( $single_size_post_meta ) );
	}

	if ( $single_next_prev_label ) {
		$css .= sprintf( '.single .penci-post-pagination span{ font-size:%spx; }', esc_attr( $single_next_prev_label ) );
	}

	if ( $single_next_prev_title ) {
		$css .= sprintf( '.penci-post-pagination h5{ font-size:%spx; }', esc_attr( $single_next_prev_title ) );
	}

	if ( $single_author_size ) {
		$css .= sprintf( '.penci-author-content h5 a{ font-size:%spx; }', esc_attr( $single_author_size ) );
	}

	if ( $related_post_title_size ) {
		$css .= sprintf( '.penci-post-related .item-related h4{ font-size:%spx; }', esc_attr( $related_post_title_size ) );
	}

	if ( $rel_com_boxtitle_fsize ) {
		$css .= '.penci-post-related .post-title-box .post-box-title,.post-comments .post-title-box .post-box-title, .site-content .post-comments #respond h3{ font-size: ' . $rel_com_boxtitle_fsize . 'px !important; }';
	}

	return $css;
}