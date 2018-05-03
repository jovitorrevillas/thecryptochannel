<?php
global $post;

$single_style = penci_get_setting( 'penci_single_template' );


$single_id                    = get_the_ID();
$use_option_current           = get_post_meta( $single_id, 'penci_use_option_current_single', true );
$single_template_layout       = get_post_meta( $single_id, 'single_template_layout', true );

if( $use_option_current ) {
	$single_style = $single_template_layout;
}

$single_style = $single_style ? $single_style : 'style-1';
if ($post->post_type == 'cryptopedia') {
	if(preg_match("/explained/i", $_SERVER['REQUEST_URI']))
		$single_style = 'single-explained';
	else
		$single_style = 'single-bitcoin101';
}

get_template_part( 'template-parts/single/' . $single_style );
