<?php
if ( function_exists( 'penci_customizer_general' ) ) {
	return;
}
function penci_customizer_general() {
	$font_for_title               = get_theme_mod( 'penci_font_for_title' );
	$font_weight_title            = get_theme_mod( 'penci_font_weight_title' );

	$font_block__heading_title   = get_theme_mod( 'penci_font_block_heading_title' );
	$fweight_block_heading_title = get_theme_mod( 'penci_fweight_block_heading_title' );

	$font_for_body                = get_theme_mod( 'penci_font_for_body' );
	$font_for_size_body           = get_theme_mod( 'penci_font_for_size_body' );
	$space_between_content_footer = get_theme_mod( 'penci_space_between_content_footer' );

	$css = '';
	if ( $font_for_title ) {
		$css .= sprintf( 'h1, h2, h3, h4, h5, h6,.error404 .page-title,
		.error404 .penci-block-vc .penci-block__title, .product_list_widget .product-title, .footer__bottom.style-2 .block-title {font-family: %s}',
			penci_google_fonts_parse_attributes( $font_for_title ) );
	}
	if ( $font_weight_title ) {
		$css .= sprintf( 'h1, h2, h3, h4, h5, h6,.error404 .page-title,
		 .error404 .penci-block-vc .penci-block__title, .product_list_widget .product-title, .footer__bottom.style-2 .block-title {font-weight: %s}',
			esc_attr( $font_weight_title ) );
	}

	if ( $font_block__heading_title ) {
		$css .= '.penci-block-vc .penci-block__title{ font-family:' . penci_google_fonts_parse_attributes( $font_block__heading_title ) . '; }';
	}

	if ( $fweight_block_heading_title ) {
		$css .= '.penci-block-vc .penci-block__title{ font-weight:' . esc_attr( $fweight_block_heading_title ) . '; }';
	}

	if ( $font_for_body ) {
		$css .= sprintf(
			'body, button, input, select, textarea,'.
			'#site-navigation .penci-megamenu .penci-mega-thumbnail .mega-cat-name{font-family: %s}', penci_google_fonts_parse_attributes( $font_for_body ) );
	}

	if ( $font_for_size_body ) {
		$css .= sprintf( '.single .entry-content,.page .entry-content{ font-size:%spx; }', esc_attr( $font_for_size_body ) );
	}

	$margin_bottom_nav =  get_theme_mod( 'penci_margin_bottom_menu_main' );

	if ( $margin_bottom_nav || 0 ===  $margin_bottom_nav ) {
		$css .= sprintf( '.site-content,.penci-page-style-1 .site-content, 
		.page-template-full-width.penci-block-pagination .site-content,
		.penci-page-style-2 .site-content, .penci-single-style-1 .site-content, 
		.penci-single-style-2 .site-content,.penci-page-style-3 .site-content,
		.penci-single-style-3 .site-content{ margin-top:%spx; }', esc_attr($margin_bottom_nav ) );}


	if( $space_between_content_footer ) {
		$css .= sprintf( '.site-content, .page-template-full-width.penci-block-pagination .site-content{ margin-bottom:%spx; }', esc_attr( $space_between_content_footer ) );
	}

	$space_content_sidebar = get_theme_mod( 'penci_space_between_content_sidebar' );
	if ( $space_content_sidebar && $space_content_sidebar < 151 ) {

		$half_space = $space_content_sidebar / 2;

		$important = '!important';

		$css .= '.penci-vc_two-sidebar.penci-vc_2sidebar-content.penci-container .penci-wide-content,';
		$css .= '.penci-vc_two-sidebar.penci-vc_2sidebar-content.penci-container-fluid  .penci-wide-content,';
		$css .= '.penci-vc_two-sidebar.penci-vc_content-2sidebar.penci-container .penci-wide-content,';
		$css .= '.penci-vc_two-sidebar.penci-vc_content-2sidebar.penci-container-fluid .penci-wide-content {padding-left: 0 !important;padding-right: 0 !important;}';


		$css .= sprintf( '@media screen and (min-width: 1240px){
		.two-sidebar .site-main .penci-container .penci-wide-content,
		.penci-vc_two-sidebar.penci-container .penci-wide-content,
		.penci-vc_two-sidebar.penci-container-fluid .penci-wide-content{ padding-left: %dpx%s; padding-right:%dpx%s;  }}',
			    esc_attr( $space_content_sidebar ), esc_attr( $important ), esc_attr( $space_content_sidebar ) ,  esc_attr( $important ) );

		$css .= sprintf( '@media screen and (min-width: 1240px){
		 .penci-vc_sidebar-left .penci-content-main,
		 .penci-container-width-1400 .penci-con_innner-sidebar-left .penci_column_inner-main, 
		 .sidebar-left .site-main .penci-wide-content{ padding-left:%dpx %s;padding-right: 0 %s; }}',
			    esc_attr( $space_content_sidebar ) , esc_attr( $important ), esc_attr( $important ) );

		$css .= sprintf( '@media screen and (min-width: 1240px){ 
		 .penci-vc_sidebar-right .penci-content-main,
		 .sidebar-right .site-main .penci-wide-content,
		 .penci-container-width-1400 .penci-con_innner-sidebar-right .penci_column_inner-main { padding-right:%dpx %s; padding-left:0 %s; }}',
			   esc_attr( $space_content_sidebar ) , esc_attr( $important ), esc_attr( $important ) );

		$css .= sprintf( '@media screen and (min-width: 1240px){  .penci-container__content .penci-col-6:nth-child(2n+1), .penci-two-column .penci-container__content .penci-two-column-item:nth-child(2n+1){ padding-right:%dpx %s; }}',
			esc_attr( $half_space ), esc_attr( $important ) );
		$css .= sprintf( '@media screen and (min-width: 1240px){  .penci-container__content .penci-col-6:nth-child(2n+2), .penci-two-column .penci-container__content .penci-two-column-item:nth-child(2n+2){ padding-left:%dpx %s; }}',
			esc_attr( $half_space ), esc_attr( $important ) );

		$css .= sprintf( '@media screen and (min-width: 1240px){  .penci-container__content .penci-col-4:nth-child(3n+1){ padding-right:%dpx %s; }}',
			esc_attr( $half_space ), esc_attr( $important ) );
		$css .= sprintf( '@media screen and (min-width: 1240px){  .penci-container__content .penci-col-4:nth-child(3n+2){ padding-left:%dpx %s; padding-right:%dpx %s; }}',
			esc_attr( $half_space ), esc_attr( $important ), esc_attr( $half_space ), esc_attr( $important ) );
		$css .= sprintf( '@media screen and (min-width: 1240px){  .penci-container__content .penci-col-4:nth-child(3n+3){ padding-left:%dpx %s; }}',
			esc_attr( $half_space ), esc_attr( $important ) );


		$css .= sprintf( '@media screen and (min-width: 1240px){  .penci-container__content .penci-col-3:nth-child(4n+1){ padding-right:%dpx %s; }}',
			esc_attr( $half_space ), esc_attr( $important ) );
		$css .= sprintf( '@media screen and (min-width: 1240px){  .penci-container__content .penci-col-3:nth-child(4n+2),
		.penci-container__content .penci-col-3:nth-child(4n+3){ padding-left:%dpx %s; padding-right:%dpx %s; }}',
			esc_attr( $half_space ),esc_attr( $important ), esc_attr( $half_space ), esc_attr( $important ) );
		$css .= sprintf( '@media screen and (min-width: 1240px){  .penci-container__content .penci-col-3:nth-child(4n+4){ padding-left:%dpx %s; }}',
			esc_attr( $half_space ), esc_attr( $important ) );

		/**
		 * @media screen and (min-width: 1024px)
		 */
		$css .= sprintf( '@media screen and (min-width: 1240px){ 
		 .penci-vc_two-sidebar.penci-vc_content-2sidebar.penci-container .penci-wide-content,
		 .penci-vc_two-sidebar.penci-vc_content-2sidebar.penci-container-fluid .penci-wide-content,
		 .penci-vc_two-sidebar.penci-vc_2sidebar-content.penci-container .penci-wide-content,
		 .penci-vc_two-sidebar.penci-vc_2sidebar-content.penci-container-fluid .penci-wide-content{ max-width: calc( %s - %dpx) %s; }}',
			'100%', ( ( $space_content_sidebar * 2 ) + 600 ), esc_attr( $important ) );

		$css .= sprintf( '@media screen and (min-width: 1240px){ 
		 .penci-container-1080.penci-vc_two-sidebar .penci-content-main, 
		 .penci-container-width-1080.penci-vc_two-sidebar .penci-content-main{ max-width: calc( %s - %dpx) %s; }}',
			'100%', ( ( $space_content_sidebar * 2 ) + 600 ), esc_attr( $important ) );

		$css .= sprintf( '@media screen and (min-width: 1240px){ .penci-vc_two-sidebar.penci-vc_content-2sidebar.penci-container .widget-area-2,
		 .penci-vc_two-sidebar.penci-vc_content-2sidebar.penci-container-fluid .widget-area-2,
		 .penci-vc_two-sidebar.penci-vc_content-2sidebar.penci-container .widget-area-1, 
		 .penci-vc_two-sidebar.penci-vc_content-2sidebar.penci-container-fluid .widget-area-1{  padding-left:%dpx %s; width: %dpx %s; }}',
			esc_attr( $space_content_sidebar ), esc_attr( $important ), esc_attr( 300 + $space_content_sidebar ), esc_attr( $important ) );

		$css .= sprintf( '@media screen and (min-width: 1240px){ .penci-vc_two-sidebar.penci-vc_2sidebar-content.penci-container .widget-area-2,
		 .penci-vc_two-sidebar.penci-vc_2sidebar-content.penci-container-fluid .widget-area-2,
		 .penci-vc_two-sidebar.penci-vc_2sidebar-content.penci-container .widget-area-1, 
		 .penci-vc_two-sidebar.penci-vc_2sidebar-content.penci-container-fluid .widget-area-1{  padding-right:%dpx %s; width: %dpx %s; }}',
			esc_attr( $space_content_sidebar ), esc_attr( $important ), esc_attr( 300 + $space_content_sidebar ), esc_attr( $important ) );
	}

	return $css;
}