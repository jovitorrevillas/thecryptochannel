<?php
/**
 * Social buttons class.
 */

$list_social = array( 'facebook', 'twitter', 'google_plus', 'pinterest', 'linkedin', 'tumblr', 'reddit', 'stumbleupon','whatsapp','telegram','email' );

$option_prefix = 'penci_hide_single_share_';

foreach ( $list_social as $k => $item ) {
	if ( penci_get_setting( $option_prefix . $item ) ) {
		unset( $list_social[ $k ] );
	}
}

echo '<span class="penci-social-buttons penci-social-share-footer">';

if ( ! penci_get_setting( $option_prefix . 'text' ) ) {
	echo '<span class="penci-social-share-text">' . penci_get_tran_setting( 'penci-social-share-text' ) . '</span>';
}

// Like
if ( ! penci_get_setting( $option_prefix . 'post_like' ) && function_exists( 'penci_get_post_like_link' ) ) {
	penci_get_post_like_link( get_the_ID(), true, 'single-like-button penci-social-item like' );
}

$total_share = get_theme_mod( $option_prefix . 'total_share' );

if( $total_share ){
	$list_social[''] = 'total_share';
}

Penci_Social_Share::get_social_share( $list_social, true, $total_share );

echo '</span>';