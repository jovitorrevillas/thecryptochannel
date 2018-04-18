<?php

add_filter( 'get_the_archive_title', 'penci_get_the_archive_title',9999 );

if ( ! function_exists( 'penci_get_the_archive_title' ) ) {
	function penci_get_the_archive_title( $title ) {

		$hide_prefix = get_theme_mod( 'archive_hide_prefix_page_title' ) ? get_theme_mod( 'archive_hide_prefix_page_title' ) : false;

		if ( is_category() ) {
			$title = ! $hide_prefix ? penci_get_tran_setting( 'penci_prefix_ar_title_cat' ) . ' ' : '';
			$title .= single_cat_title( '', false );
		} elseif ( is_tag() ) {
			$title = ! $hide_prefix ? penci_get_tran_setting( 'penci_prefix_ar_title_tag' ) . ' ' : '';
			$title .= single_tag_title( '', false );
		} elseif ( is_author() ) {
			$title = ! $hide_prefix ? penci_get_tran_setting( 'penci_prefix_ar_title_auhor' ) . ' ' : '';
			$title .= '<span class="vcard">' . get_the_author() . '</span>';
		} elseif ( is_year() ) {
			$title = ! $hide_prefix ? penci_get_tran_setting( 'penci_prefix_ar_title_year' ) . ' ' : '';
			$title .= get_the_date( 'Y' );
		} elseif ( is_month() ) {
			$title = ! $hide_prefix ? penci_get_tran_setting( 'penci_prefix_ar_title_month' ) . ' ' : '';
			$title .= get_the_date('F Y' );
		} elseif ( is_day() ) {
			$title = ! $hide_prefix ? penci_get_tran_setting( 'penci_prefix_ar_title_day' ) . ' ' : '';
			$title .= get_the_date( _x( 'F j, Y' ) );
		} elseif ( is_post_type_archive() ) {
			$title = ! $hide_prefix ? penci_get_tran_setting( 'penci_prefix_ar_title_archive' ) . ' ' : '';
			$title .= post_type_archive_title( '', false );
		} elseif ( is_tax() ) {
			$tax   = get_taxonomy( get_queried_object()->taxonomy );
			$title = ! $hide_prefix ? $tax->labels->singular_name : '';
			$title .= single_term_title( '', false );
		}

		return $title;
	}
}
