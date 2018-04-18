<?php
if ( function_exists( 'penci_customizer_color_single' ) ) {
	return;
}
function penci_customizer_color_single() {
	$css = '';
	$type = 'color';

	$single_title = get_theme_mod( 'pcolor_single_title' );
	$single_links = get_theme_mod( 'pcolor_single_links' );
	$single_accent = get_theme_mod( 'pcolor_single_accent' );

	if ( $single_title ) {
		$css .= sprintf( '.penci-page-title, .penci-entry-title{ color:%s; }', esc_attr( $single_title ) );
	}

	if ( $single_links ) {
		$css .= sprintf( '.entry-content a, .comment-content a,.entry-content .penci_list_shortcode li:before, .comment-content .penci_list_shortcode li:before{ color:%s; }',
			esc_attr( $single_links ) );
	}

	if ( $single_accent ) {
		$css .= sprintf( '.entry-content h1, .entry-content h2, .entry-content h3,
		 .entry-content h4, .entry-content h5, .entry-content h6,
		  .comment-content h1, .comment-content h2, .comment-content h3, 
		  .comment-content h4, .comment-content h5, .comment-content h6,
		  .entry-content blockquote, .entry-content q,
		  .post-title-box .post-box-title,
		  #respond h3
		  { color:%s; }', esc_attr( $single_accent ) );
	}

	// Box share
	$single_border_boxshare = get_theme_mod( 'pcolor_single_border_boxshare' );
	$single_title_boxshare  = get_theme_mod( 'pcolor_single_title_boxshare' );

	if ( $single_border_boxshare ) {
		$css .= sprintf( '.penci-social-buttons.penci-social-share-footer{ border-color:%s; }', esc_attr( $single_border_boxshare ) );
	}

	if ( $single_title_boxshare ) {
		$css .= sprintf( '.penci-social-buttons .penci-social-share-text{ color:%s; }', esc_attr( $single_title_boxshare ) );
	}

	$but_share_like_color        = get_theme_mod( 'pcolor_single_but_share_like_color' );
	$but_share_like_bgcolor      = get_theme_mod( 'pcolor_single_but_share_like_bgcolor' );
	$but_share_face_color        = get_theme_mod( 'pcolor_single_but_share_face_color' );
	$but_share_face_bgcolor      = get_theme_mod( 'pcolor_single_but_share_face_bgcolor' );
	$but_share_twitter_color     = get_theme_mod( 'pcolor_single_but_share_twitter_color' );
	$but_share_twitter_bgcolor   = get_theme_mod( 'pcolor_single_but_share_twitter_bgcolor' );
	$but_share_google_color      = get_theme_mod( 'pcolor_single_but_share_google_color' );
	$but_share_google_bgcolor    = get_theme_mod( 'pcolor_single_but_share_google_bgcolor' );
	$but_share_pinterest_color   = get_theme_mod( 'pcolor_single_but_share_pinterest_color' );
	$but_share_pinterest_bgcolor = get_theme_mod( 'pcolor_single_but_share_pinterest_bgcolor' );
	$but_share_email_color       = get_theme_mod( 'pcolor_single_but_share_email_color' );
	$but_share_email_bgcolor     = get_theme_mod( 'pcolor_single_but_share_email_bgcolor' );

	// Button like
	if ( $but_share_like_color || $but_share_like_bgcolor ) {
		$css .= sprintf( '.penci-social-buttons .penci-social-item.like{ %s %s }',
			$but_share_like_color ? 'color:' . esc_attr( $but_share_like_color ) . ';' : '',
			$but_share_like_bgcolor ? 'background-color:' . esc_attr( $but_share_like_bgcolor ) . ';' : ''
		);
	}

	// Button face
	if ( $but_share_face_color || $but_share_face_bgcolor ) {
		$css .= sprintf( '.penci-social-buttons .penci-social-item.facebook { %s %s }',
			$but_share_face_color ? 'color:' . esc_attr( $but_share_face_color ) . ';' : '',
			$but_share_face_bgcolor ? 'background-color:' . esc_attr( $but_share_face_bgcolor ) . ';' : ''
		);
	}
	// Button twitter
	if ( $but_share_twitter_color || $but_share_twitter_bgcolor ) {
		$css .= sprintf( '.penci-social-buttons .penci-social-item.twitter { %s %s }',
			$but_share_twitter_color ? 'color:' . esc_attr( $but_share_twitter_color ) . ';' : '',
			$but_share_twitter_bgcolor ? 'background-color:' . esc_attr( $but_share_twitter_bgcolor ) . ';' : ''
		);
	}
	// Button google
	if ( $but_share_google_color || $but_share_google_bgcolor ) {
		$css .= sprintf( '.penci-social-buttons .penci-social-item.google_plus  { %s %s }',
			$but_share_google_color ? 'color:' . esc_attr( $but_share_google_color ) . ';' : '',
			$but_share_google_bgcolor ? 'background-color:' . esc_attr( $but_share_google_bgcolor ) . ';' : ''
		);
	}
	// Button pinterest
	if ( $but_share_pinterest_color || $but_share_pinterest_bgcolor ) {
		$css .= sprintf( '.penci-social-buttons .penci-social-item.pinterest { %s %s }',
			$but_share_pinterest_color ? 'color:' . esc_attr( $but_share_pinterest_color ) . ';' : '',
			$but_share_pinterest_bgcolor ? 'background-color:' . esc_attr( $but_share_pinterest_bgcolor ) . ';' : ''
		);
	}

	// Button email
	if ( $but_share_email_color || $but_share_email_bgcolor ) {
		$css .= sprintf( '.penci-social-buttons .penci-social-item.email  { %s %s }',
			$but_share_email_color ? 'color:' . esc_attr( $but_share_email_color ) . ';' : '',
			$but_share_email_bgcolor ? 'background-color:' . esc_attr( $but_share_email_bgcolor ) . ';' : ''
		);
	}

	$but_share_linkedin_color      = get_theme_mod( 'pcolor_single_but_share_linkedin_color' );
	$but_share_linkedin_bgcolor    = get_theme_mod( 'pcolor_single_but_share_linkedin_bgcolor' );
	$but_share_tumblr_color        = get_theme_mod( 'pcolor_single_but_share_tumblr_color' );
	$but_share_tumblr_bgcolor      = get_theme_mod( 'pcolor_single_but_share_tumblr_bgcolor' );
	$but_share_reddit_color        = get_theme_mod( 'pcolor_single_but_share_reddit_color' );
	$but_share_reddit_bgcolor      = get_theme_mod( 'pcolor_single_but_share_reddit_bgcolor' );
	$but_share_stumbleupon_color   = get_theme_mod( 'pcolor_single_but_share_stumbleupon_color' );
	$but_share_stumbleupon_bgcolor = get_theme_mod( 'pcolor_single_but_share_stumbleupon_bgcolor' );
	$but_share_whatsapp_color      = get_theme_mod( 'pcolor_single_but_share_whatsapp_color' );
	$but_share_whatsapp_bgcolor    = get_theme_mod( 'pcolor_single_but_share_whatsapp_bgcolor' );
	$but_share_telegram_color      = get_theme_mod( 'pcolor_single_but_share_telegram_color' );
	$but_share_telegram_bgcolor    = get_theme_mod( 'pcolor_single_but_share_telegram_bgcolor' );

	// Button linkedin
	if ( $but_share_linkedin_color || $but_share_linkedin_bgcolor ) {
		$css .= sprintf( '.penci-social-buttons .penci-social-item.linkedin{ %s %s }',
			$but_share_linkedin_color ? 'color:' . esc_attr( $but_share_linkedin_color ) . ';' : '',
			$but_share_linkedin_bgcolor ? 'background-color:' . esc_attr( $but_share_linkedin_bgcolor ) . ';' : ''
		);
	}

	// Button tumblr
	if ( $but_share_tumblr_color || $but_share_tumblr_bgcolor ) {
		$css .= sprintf( '.penci-social-buttons .penci-social-item.tumblr{ %s %s }',
			$but_share_tumblr_color ? 'color:' . esc_attr( $but_share_tumblr_color ) . ';' : '',
			$but_share_tumblr_bgcolor ? 'background-color:' . esc_attr( $but_share_tumblr_bgcolor ) . ';' : ''
		);
	}

	// Button reddit
	if ( $but_share_reddit_color || $but_share_reddit_bgcolor ) {
		$css .= sprintf( '.penci-social-buttons .penci-social-item.reddit{ %s %s }',
			$but_share_reddit_color ? 'color:' . esc_attr( $but_share_reddit_color ) . ';' : '',
			$but_share_reddit_bgcolor ? 'background-color:' . esc_attr( $but_share_reddit_bgcolor ) . ';' : ''
		);
	}

	// Button stumbleupon
	if ( $but_share_stumbleupon_color || $but_share_reddit_bgcolor ) {
		$css .= sprintf( '.penci-social-buttons .penci-social-item.stumbleupon{ %s %s }',
			$but_share_stumbleupon_color ? 'color:' . esc_attr( $but_share_stumbleupon_color ) . ';' : '',
			$but_share_stumbleupon_bgcolor ? 'background-color:' . esc_attr( $but_share_stumbleupon_bgcolor ) . ';' : ''
		);
	}

	// Button whatsapp
	if ( $but_share_whatsapp_color || $but_share_reddit_bgcolor ) {
		$css .= sprintf( '.penci-social-buttons .penci-social-item.whatsapp{ %s %s }',
			$but_share_whatsapp_color ? 'color:' . esc_attr( $but_share_whatsapp_color ) . ';' : '',
			$but_share_whatsapp_bgcolor ? 'background-color:' . esc_attr( $but_share_whatsapp_bgcolor ) . ';' : ''
		);
	}

	// Button telegram
	if ( $but_share_telegram_color || $but_share_reddit_bgcolor ) {
		$css .= sprintf( '.penci-social-buttons .penci-social-item.telegram{ %s %s }',
			$but_share_telegram_color ? 'color:' . esc_attr( $but_share_telegram_color ) . ';' : '',
			$but_share_telegram_bgcolor ? 'background-color:' . esc_attr( $but_share_telegram_bgcolor ) . ';' : ''
		);
	}

	// Categories
	$single_cat_accent    = get_theme_mod( 'pcolor_single_cat_accent' );
	$single_cat_accentbg  = get_theme_mod( 'pcolor_single_cat_accentbg' );
	$single_cat_haccent   = get_theme_mod( 'pcolor_single_cat_haccent' );
	$single_cat_haccentbg = get_theme_mod( 'pcolor_single_cat_haccentbg' );

	$single_cat_css = $single_cat_hcss = '';
	if ( $single_cat_accent ) {
		$single_cat_css .= 'color:' . esc_attr( $single_cat_accent ) . ';';
	}
	if ( $single_cat_accentbg ) {
		$single_cat_css .= 'background-color:' . esc_attr( $single_cat_accentbg ) . ';';
	}

	if ( $single_cat_css ) {
		$css .= '.single .penci-cat-links a, .page .penci-cat-links a{ ' . esc_attr( $single_cat_css ) . '}';
	}

	if ( $single_cat_haccent ) {
		$single_cat_hcss .= 'color:' . esc_attr( $single_cat_haccent ) . ';';
	}
	if ( $single_cat_haccentbg ) {
		$single_cat_hcss .= 'background-color:' . esc_attr( $single_cat_haccentbg ) . ';';
	}

	if ( $single_cat_hcss ) {
		$css .= '.single .penci-cat-links a:hover, .page .penci-cat-links a:hover{ ' . esc_attr( $single_cat_hcss ) . ' }';
	}

	// Post meta
	$single_post_meta  = get_theme_mod( 'pcolor_single_post_meta' );
	$single_post_metah = get_theme_mod( 'pcolor_single_post_metah' );

	if ( $single_post_meta ) {
		$css .= sprintf( '.penci-entry-meta{ color:%s; }', esc_attr( $single_post_meta ) );
	}

	if ( $single_post_meta ) {
		$css .= sprintf( '.penci-entry-meta a:hover{ color:%s; }', esc_attr( $single_post_metah ) );
	}

	// Blockquote
	$blockquote_text = penci_get_setting( 'pcolor_single_blockquote_text' );
	$blockquote_border = penci_get_setting( 'pcolor_single_blockquote_border' );

	if ( $blockquote_text ) {
		$css .= sprintf( '.penci-entry-content blockquote, .penci-entry-content q{ color:%s; }', esc_attr( $blockquote_text ) );
	}
	if ( $blockquote_border ) {
		$css .= sprintf( '.penci-entry-content blockquote:before, .penci-entry-content q:before{ border-color:%s; }', esc_attr( $blockquote_border ) );
	}

	// Post pagination
	$single_title_boxpag = get_theme_mod( 'pcolor_single_title_boxpag' );
	$single_pag_post_title = get_theme_mod( 'pcolor_single_pag_post_title' );
	$single_pag_post_titleh = get_theme_mod( 'pcolor_single_pag_post_titleh' );

	if ( $single_title_boxpag ) {
		$css .= sprintf( '.penci-post-pagination span{ color:%s; }', esc_attr( $single_title_boxpag ) );
	}

	if ( $single_pag_post_title ) {
		$css .= sprintf( '.penci-post-pagination h5 a{ color:%s; }', esc_attr( $single_pag_post_title ) );
	}

	if ( $single_pag_post_titleh ) {
		$css .= sprintf( '.penci-post-pagination a:hover h5{ transition:all 0.3s; color:%s; }', esc_attr( $single_pag_post_titleh ) );
	}

	// Author box
	$single_title_author         = get_theme_mod( 'pcolor_single_title_author' );
	$single_title_hover_author   = get_theme_mod( 'pcolor_single_title_hover_author' );
	$single_author_contact       = get_theme_mod( 'pcolor_single_author_contact' );
	$single_author_hover_contact = get_theme_mod( 'pcolor_single_author_hover_contact' );

	if ( $single_title_author ) {
		$css .= sprintf( '.penci-author-content h5 a{ color:%s; }', esc_attr( $single_title_author ) );
	}

	if ( $single_title_author ) {
		$css .= sprintf( '.penci-author-content h5 a:hover{ color:%s; }', esc_attr( $single_title_hover_author ) );
	}

	if ( $single_author_contact ) {
		$css .= sprintf( '.penci-author-content .author-social{ color:%s; }', esc_attr( $single_author_contact ) );
	}

	if ( $single_author_hover_contact ) {
		$css .= sprintf( '.penci-author-content .author-social:hover{ color:%s; }', esc_attr( $single_author_hover_contact ) );
	}

	// Related posts
	$single_related_post_title  = get_theme_mod( 'pcolor_single_related_post_title' );
	$single_related_post_titleh = get_theme_mod( 'pcolor_single_related_post_titleh' );

	if ( $single_related_post_title ) {
		$css .= sprintf( '.penci-post-related .item-related h4 a{ color:%s; }', esc_attr( $single_related_post_title ) );
	}

	if ( $single_related_post_titleh ) {
		$css .= sprintf( '.penci-post-related .item-related h4 a:hover{ color:%s; }', esc_attr( $single_related_post_titleh ) );
	}

	return $css;
}