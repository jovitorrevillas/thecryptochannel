<?php
if ( function_exists( 'penci_customizer_archive' ) ) {
	return;
}
function penci_customizer_archive() {
	$css = '';

	if ( is_archive() || is_home() ) {
		$size_post_title      = get_theme_mod( 'penci_archive_size_post_title' );
		$fweight_post_title   = get_theme_mod( 'penci_arch_fweight_item_ptitle' );
		$size_item_post_title = get_theme_mod( 'penci_archive_size_item_post_title' );
		$size_item_post_meta  = get_theme_mod( 'penci_archive_size_item_post_meta' );
		$size_item_post_desc  = get_theme_mod( 'penci_archive_size_item_post_desc' );

		if ( $size_post_title ) {
			$css .= sprintf( '.penci-archive__content .penci-page-title{ font-size:%spx; }', esc_attr( $size_post_title ) );
		}

		if ( $size_item_post_title ) {
			$css .= sprintf( '.penci-archive .penci-archive__content .penci-post-item .entry-title{ font-size:%spx; }', esc_attr( $size_item_post_title ) );
		}

		if ( $fweight_post_title ) {
			$css .= sprintf( '.penci-archive .penci-archive__content .penci-post-item .entry-title{ font-weight:%s; }', esc_attr( $fweight_post_title ) );
		}

		if ( $size_item_post_meta ) {
			$css .= sprintf( '.penci-archive__list_posts .penci-post-item .entry-meta{ font-size:%spx; }', esc_attr( $size_item_post_meta ) );
		}
		if ( $size_item_post_desc ) {
			$css .= sprintf( '.penci-archive__list_posts .penci-post-item .entry-content{ font-size:%spx; }', esc_attr( $size_item_post_desc ) );
		}

		// Color
		$archive_title_color               = get_theme_mod( 'penci_archive_title_color' );
		$archive_title_border_bottom_color = get_theme_mod( 'penci_archive_title_border_bottom_color' );
		$archive_breadcrumbs_color         = get_theme_mod( 'penci_archive_breadcrumbs_color' );
		$archive_post_title_color          = get_theme_mod( 'penci_archive_list_post_title_color' );
		$archive_post_meta_color           = get_theme_mod( 'penci_archive_list_post_meta_color' );
		$archive_post_des_color            = get_theme_mod( 'penci_archive_list_post_des_color' );

		$archive_post_cat_color    = get_theme_mod( 'penci_archive_list_post_cat_color' );
		$archive_post_cat_bgcolor  = get_theme_mod( 'penci_archive_list_post_cat_bgcolor' );
		$archive_post_cat_hcolor   = get_theme_mod( 'penci_archive_list_post_cat_hcolor' );
		$archive_post_cat_hbgcolor = get_theme_mod( 'penci_archive_list_post_cat_hbgcolor' );

		if ( $archive_title_color ) {
			$css .= sprintf( '.penci-archive__content  .penci-page-title { color: %s; }',
				esc_attr( $archive_title_color ) );
		}
		if ( $archive_title_border_bottom_color ) {
			$css .= sprintf( '.site-main .penci-archive__content .penci-entry-header{ border-color: %s; }',
				esc_attr( $archive_title_border_bottom_color ) );
		}
		if ( $archive_breadcrumbs_color ) {
			$css .= sprintf( '.penci-archive__content  .penci_breadcrumbs a,.penci-archive__content .penci_breadcrumbs span{ color: %s; }',
				esc_attr( $archive_breadcrumbs_color ) );
		}
		if ( $archive_post_title_color ) {
			$css .= sprintf( '.penci-archive__list_posts .penci-post-item .entry-title, .penci-archive__list_posts .penci-post-item .entry-title a{ color: %s; }',
				esc_attr( $archive_post_title_color ) );
		}
		if ( $archive_post_meta_color ) {
			$css .= sprintf( '.penci-archive__list_posts  .penci-archive .entry-meta,
			 .penci-archive .penci-archive__list_posts .entry-meta a,
			 .penci-archive .penci-archive__content .entry-meta span:not(.penci-chart-text),
			 .penci-archive .penci-archive__list_posts .entry-meta span{ color: %s; }',
				esc_attr( $archive_post_meta_color ) );

		}
		if ( $archive_post_des_color ) {
			$css .= sprintf( '.penci-archive__list_posts .penci-post-item .entry-content{ color: %s; }',
				esc_attr( $archive_post_des_color ) );
		}

		if ( $archive_post_cat_color ) {
			$css .= sprintf( '.penci-archive .penci-archive__list_posts .penci-cat-links a{ color: %s; }',
				esc_attr( $archive_post_cat_color ) );
		}
		if ( $archive_post_cat_bgcolor ) {
			$css .= sprintf( '.penci-archive .penci-archive__list_posts .penci-cat-links a{ background-color: %s; }',
				esc_attr( $archive_post_cat_bgcolor ) );
		}

		if ( $archive_post_cat_hcolor ) {
			$css .= sprintf( '.penci-archive .penci-archive__list_posts .penci-cat-links a:hover{ color: %s; }',
				esc_attr( $archive_post_cat_hcolor ) );
		}
		if ( $archive_post_cat_hbgcolor ) {
			$css .= sprintf( '.penci-archive .penci-archive__list_posts .penci-cat-links a:hover{ background-color: %s; }',
				esc_attr( $archive_post_cat_hbgcolor ) );
		}
	}

	$block_pag_size_item_post_title    = get_theme_mod( 'penci_block_pag_size_item_post_title' );
	$block_pag_fweight_item_post_title = get_theme_mod( 'penci_block_pag_fweight_item_ptitle' );
	$block_pag_size_item_post_meta     = get_theme_mod( 'penci_block_pag_size_item_post_meta' );
	$block_pag_size_item_post_desc     = get_theme_mod( 'penci_block_pag_size_item_post_desc' );

	if ( $block_pag_size_item_post_title ) {
		$css .= sprintf( '.penci-block-vc-pag  .penci-archive__list_posts .penci-post-item .entry-title{ font-size:%spx; }',
			esc_attr( $block_pag_size_item_post_title ) );
	}

	if ( $block_pag_fweight_item_post_title ) {
		$css .= sprintf( '.penci-block-vc-pag  .penci-archive__list_posts .penci-post-item .entry-title{ font-weight:%s; }',
			esc_attr( $block_pag_fweight_item_post_title ) );
	}
	if ( $block_pag_size_item_post_meta ) {
		$css .= sprintf( '.penci-block-vc-pag .penci-archive__list_posts .penci-post-item .entry-meta{ font-size:%spx; }',
			esc_attr( $block_pag_size_item_post_meta ) );
	}
	if ( $block_pag_size_item_post_desc ) {
		$css .= sprintf( '.penci-block-vc-pag .penci-archive__list_posts .penci-post-item .entry-content{ font-size:%spx; }',
			esc_attr( $block_pag_size_item_post_desc ) );
	}


	// Color
	$block_pag_breadcrumbs_color  = get_theme_mod( 'penci_block_pag_breadcrumbs_color' );
	$block_pag_post_title_color   = get_theme_mod( 'penci_block_pag_list_post_title_color' );
	$block_pag_post_meta_color    = get_theme_mod( 'penci_block_pag_list_post_meta_color' );
	$block_pag_post_des_color     = get_theme_mod( 'penci_block_pag_list_post_des_color' );
	$block_pag_post_cat_color     = get_theme_mod( 'penci_block_pag_list_post_cat_color' );
	$block_pag_post_cat_bgcolor   = get_theme_mod( 'penci_block_pag_list_post_cat_bgcolor' );
	$block_pag_post_cat_hcolor    = get_theme_mod( 'penci_block_pag_list_post_cat_hcolor' );
	$block_pag_post_cat_hbgcolor  = get_theme_mod( 'penci_block_pag_list_post_cat_hbgcolor' );

	if ( $block_pag_breadcrumbs_color ) {
		$css .= sprintf( '.penci-block-pagination .penci_breadcrumbs i, .penci-block-pagination .penci_breadcrumbs a,.penci-block-pagination .penci_breadcrumbs span { color: %s; }', esc_attr( $block_pag_breadcrumbs_color ) );
	}

	if ( $block_pag_post_title_color ) {
		$css .= sprintf( '.penci-block-vc-pag .penci-archive__list_posts .penci-post-item .entry-title, .penci-archive__list_posts .penci-post-item .entry-title a{ color: %s; }', esc_attr( $block_pag_post_title_color ) );
	}

	if ( $block_pag_post_meta_color ) {
		$css .= sprintf( '.penci-block-vc-pag .penci-archive__list_posts .penci-post-item .entry-meta,
		 .penci-block-vc-pag .penci-archive .penci-archive__list_posts .entry-meta a,
		 .penci-block-vc-pag .penci-archive .penci-archive__list_posts .entry-meta span{ color: %s; }', esc_attr( $block_pag_post_meta_color ) );
	}
	if ( $block_pag_post_des_color ) {
		$css .= sprintf( '.penci-block-vc-pag .penci-archive__list_posts .penci-post-item .entry-content{ color: %s; }', esc_attr( $block_pag_post_des_color ) );
	}

	if ( $block_pag_post_cat_color ) {
		$css .= sprintf( '.penci-block-vc-pag .penci-archive__list_posts .penci-cat-links a{ color: %s; }', esc_attr( $block_pag_post_cat_color ) );
	}
	if ( $block_pag_post_cat_bgcolor ) {
		$css .= sprintf( '.penci-block-vc-pag .penci-archive__list_posts .penci-cat-links a{ background-color: %s; }', esc_attr( $block_pag_post_cat_bgcolor ) );
	}

	if ( $block_pag_post_cat_hcolor ) {
		$css .= sprintf( '.penci-block-vc-pag .penci-archive__list_posts .penci-cat-links a:hover{ color: %s; }', esc_attr( $block_pag_post_cat_hcolor ) );
	}
	if ( $block_pag_post_cat_hbgcolor ) {
		$css .= sprintf( '.penci-block-vc-pag .penci-archive__list_posts .penci-cat-links a:hover{ background-color: %s; }', esc_attr( $block_pag_post_cat_hbgcolor ) );
	}

	// Button read more
	$css_read_button = $css_read_button_hover = '';
	$penci_arch_rmore_font = get_theme_mod( 'penci_arch_rmore_font' );
	if ( get_theme_mod( 'penci_arch_rmore_font' ) ) {
		$css_read_button .= 'font-family:' . penci_google_fonts_parse_attributes( $penci_arch_rmore_font ) . ';';
	}
	if ( get_theme_mod( 'penci_arch_rmore_fweight' ) ) {
		$css_read_button .= 'font-weight:' . get_theme_mod( 'penci_arch_rmore_fweight' ) . ';';
	}
	if ( get_theme_mod( 'penci_arch_rmore_fsize' ) ) {
		$css_read_button .= 'font-size:' . get_theme_mod( 'penci_arch_rmore_fsize' ) . 'px; ';
	}

	if ( get_theme_mod( 'penci_penci_arch_rmore_color' ) ) {
		$css_read_button .= 'color:' . get_theme_mod( 'penci_penci_arch_rmore_color' ) . ';';
	}
	if ( get_theme_mod( 'penci_penci_arch_rmore_bgcolor' ) ) {
		$css_read_button .= 'background-color:' . get_theme_mod( 'penci_penci_arch_rmore_bgcolor' ) . ';';
	}
	if ( get_theme_mod( 'penci_penci_arch_rmore_hcolor' ) ) {
		$css_read_button_hover .= 'color:' . get_theme_mod( 'penci_penci_arch_rmore_hcolor' ) . ';';
	}
	if ( get_theme_mod( 'penci_penci_arch_rmore_hbgcolor' ) ) {
		$css_read_button_hover .= 'background-color:' . get_theme_mod( 'penci_penci_arch_rmore_hbgcolor' ) . ';';
	}

	if ( $css_read_button ) {
		$css .= '.penci-pmore-link .more-link{ ' . ( $css_read_button ) . ' }';
	}
	if ( $css_read_button_hover ) {
		$css .= '.penci-pmore-link .more-link:hover{ ' . esc_attr( $css_read_button_hover ) . ' }';
	}


	// Button read more on block pag number
	$css_read_button2 = $css_read_button_hover2 = '';
	$block_pag_rmore_font = get_theme_mod( 'penci_block_pag_rmore_font' );
	if ( $block_pag_rmore_font ) {
		$css_read_button2 .= 'font-family:' . penci_google_fonts_parse_attributes( $block_pag_rmore_font ) . ';';
	}
	if ( get_theme_mod( 'penci_block_pag_rmore_fweight' ) ) {
		$css_read_button2 .= 'font-weight:' . get_theme_mod( 'penci_block_pag_rmore_fweight' ) . ';';
	}
	if ( get_theme_mod( 'penci_block_pag_rmore_fsize' ) ) {
		$css_read_button2 .= 'font-size:' . get_theme_mod( 'penci_block_pag_rmore_fsize' ) . 'px; ';
	}

	if ( get_theme_mod( 'penci_block_pag_rmore_color' ) ) {
		$css_read_button2 .= 'color:' . get_theme_mod( 'penci_block_pag_rmore_color' ) . ';';
	}
	if ( get_theme_mod( 'penci_block_pag_rmore_bgcolor' ) ) {
		$css_read_button2 .= 'background-color:' . get_theme_mod( 'penci_block_pag_rmore_bgcolor' ) . ';';
	}
	if ( get_theme_mod( 'penci_block_pag_rmore_hcolor' ) ) {
		$css_read_button_hover2 .= 'color:' . get_theme_mod( 'penci_block_pag_rmore_hcolor' ) . ';';
	}
	if ( get_theme_mod( 'penci_block_pag_rmore_hbgcolor' ) ) {
		$css_read_button_hover2 .= 'background-color:' . get_theme_mod( 'penci_block_pag_rmore_hbgcolor' ) . ';';
	}

	if ( $css_read_button2 ) {
		$css .= '.penci-block-vc-pag .penci-pmore-link .more-link{ ' . ( $css_read_button2 ) . ' }';
	}
	if ( $css_read_button_hover2 ) {
		$css .= '.penci-block-vc-pag .penci-pmore-link .more-link:hover{ ' . esc_attr( $css_read_button_hover2 ) . ' }';
	}


	return $css;
}

