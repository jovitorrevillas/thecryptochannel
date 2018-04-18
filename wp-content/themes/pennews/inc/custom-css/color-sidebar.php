<?php
if ( function_exists( 'penci_customizer_color_sidebar' ) ) {
	return;
}
function penci_customizer_color_sidebar() {
	$css = '';


	$background_title_color    = get_theme_mod( 'pcolor_sidebar_bgtitle' );
	$block_title_off_uppercase = get_theme_mod( 'penci_off_uppearcase_block_title' );
	$title_color               = get_theme_mod( 'pcolor_sidebar_title' );
	$title_hover_color         = get_theme_mod( 'pcolor_sidebar_htitle' );

	$bordertop_color    = get_theme_mod( 'pcolor_sidebar_bordertop' );
	$borderbottom_color = get_theme_mod( 'pcolor_sidebar_border_bottom' );
	$borderleft_color   = get_theme_mod( 'pcolor_sidebar_border_left' );
	$borderright_color  = get_theme_mod( 'pcolor_sidebar_border_right' );
	$border_line_color  = get_theme_mod( 'pcolor_sidebar_border_line' );


	$id = '.penci-widget-sidebar';

	$title_temp = '%s .penci-block__title a, %s .penci-block__title span{ color:%s !important; } %s .penci-block-heading:after{ background-color:%s !important; }';


	if ( $bordertop_color ) {
		$css .= sprintf( '%s.style-title-1 .penci-block__title:before{ border-top-color:%s; }', esc_attr( $id ), esc_attr( $bordertop_color ) );
		$css .= sprintf( '%s.style-title-10 .penci-block-heading{ border-top-color:%s; }', esc_attr( $id ), esc_attr( $bordertop_color ) );
	}
	if ( $background_title_color ) :
		$css .= sprintf( '%s .penci-block__title a, %s .penci-block__title span{ background-color:%s !important; }',
			esc_attr( $id ), esc_attr( $id ), esc_attr( $background_title_color ) );

		$css .= sprintf( '%s.style-title-9 .penci-block-heading, %s.style-title-13 .penci-block-heading{ background-color:%s !important; }',
			esc_attr( $id ),esc_attr( $id ), esc_attr( $background_title_color ) );

		$css .= sprintf( '%s.style-title-13 .penci-block__title:after{ border-top-color:%s !important; }',
			esc_attr( $id ), esc_attr( $background_title_color ) );

	endif;
	
	if ( $title_color ) : $css .= sprintf( $title_temp, esc_attr( $id ), esc_attr( $id ), esc_attr( $title_color ), esc_attr( $id ), esc_attr( $title_color ) ); endif;
	if ( $title_hover_color ) : $css .= sprintf( '%s .penci-block__title a:hover{ color:%s !important; }', esc_attr( $id ), esc_attr( $title_hover_color ) ); endif;
	if ( $block_title_off_uppercase ) : $css .= sprintf( '%s .penci-block__title{ text-transform: none; }', esc_attr( $id ) ); endif;

	if ( $borderbottom_color ) {
		$css .= sprintf( '%s .penci-block-heading{ border-bottom-color:%s; }', esc_attr( $id ), esc_attr( $borderbottom_color ) );
		$css .= sprintf( '%s.style-title-5 .penci-block-heading:after{ background-color:%s; }', esc_attr( $id ), esc_attr( $borderbottom_color ) );
	}

	if( $borderleft_color ) {
		$css .= sprintf( '%s.style-title-9 .penci-block-heading{ border-left-color:%s;border-right-color: transparent; }', esc_attr( $id ), esc_attr( $borderleft_color ) );


		$css .= sprintf( '%s.style-title-10 .penci-block-heading{ border-left-color:%s; }', esc_attr( $id ), esc_attr( $borderleft_color ) );
		$css .= sprintf( '%s.style-title-10 .penci-block-heading:after{ background-color:%s; }', esc_attr( $id ), esc_attr( $borderleft_color ) );
	}

	if( $borderright_color ) {
		$css .= sprintf( '%s.style-title-9.style-title-right .penci-block-heading{ border-right-color:%s;border-left-color: transparent; }', esc_attr( $id ), esc_attr( $borderleft_color ) );

		$css .= sprintf( '%s.style-title-10.style-title-right .penci-block-heading{ border-right-color:%s; }', esc_attr( $id ), esc_attr( $borderright_color ) );
		$css .= sprintf( '%s.style-title-10.style-title-right .penci-block-heading:after{ background-color:%s; }', esc_attr( $id ), esc_attr( $borderright_color ) );
	}

	if ( $border_line_color ) {
		$css .= sprintf( '%s.style-title-6 .penci-block__title a:before,
		 %s.style-title-6 .penci-block__title a:after,
		 %s.style-title-6 .penci-block__title span:before,
		 %s.style-title-6 .penci-block__title span:after{ border-top-color:%s; }',
			esc_attr( $id ),
			esc_attr( $id ),
			esc_attr( $id ),
			esc_attr( $id ),
			esc_attr( $border_line_color )
		);

		$css .= sprintf( '%s.style-title-11 .penci-block__title:after{ background-color:%s; }',
			esc_attr( $id ),
			esc_attr( $border_line_color )
		);
	}


	$link_color       = get_theme_mod( 'pcolor_sidebar_link' );
	$link_hcolor      = get_theme_mod( 'pcolor_sidebar_hlink' );
	$text_color       = get_theme_mod( 'pcolor_sidebar_text_color' );
	$background_color = get_theme_mod( 'pcolor_sidebar_backg_color' );
	$post_meta_color  = get_theme_mod( 'pcolor_sidebar_meta_color' );


	if ( $link_color ) :
		$css .= sprintf( '.penci-widget-sidebar a:not( .button ):not( .penci_pmeta-link ){ color:%s;border-color:%s; }', esc_attr( $link_color ), esc_attr( $link_color ) );
	endif;

	if ( $link_hcolor ) :
		$css .= sprintf( '.penci-widget-sidebar a:not( .button ):hover{ color:%s;border-color:%s; }.widget .tagcloud a{background: transparent;}',
			esc_attr( $link_hcolor ), esc_attr( $link_hcolor ) );
	endif;

	if ( $background_color ) :
		$css .= '.penci-widget-sidebar{ background-color: ' . esc_attr( $background_color ) . ';}';
	endif;

	if ( $post_meta_color ) :
		$css .= '.penci-widget-sidebar .penci_post-meta{ color: ' . esc_attr( $post_meta_color ) . ';}';
	endif;

	if ( $text_color ) :
		$css .= '.widget.penci-widget-sidebar,';
		$css .= '.widget.penci-widget-sidebar cite,';
		$css .= '.widget.penci-widget-sidebar ul li{ color: ' . esc_attr( $text_color ) . ';}';
	endif;

	return $css;
}