<?php 

$wp_customize->add_section( 'custom_footer', array(
	'title'    => esc_html__( 'Footer', 'pennews' ),
	'priority' => 3
) );

// Social Media
$wp_customize->add_setting( 'rss_footer_link', array(
	'default'           => '#',
	'sanitize_callback' => array( $sanitizer, 'text' )
) );
$wp_customize->add_control( 'rss_footer_link', array(
	'label'    	=> esc_html__( 'RSS Link', 'pennews' ),
	'section'  	=> 'custom_footer',
	'settings'	=> 'rss_footer_link',
	'type' 		=> 'text',
	'priority' 	=> 1
) );

$wp_customize->add_setting( 'twitter_footer_link', array(
	'default'           => '#',
	'sanitize_callback' => array( $sanitizer, 'text' )
) );
$wp_customize->add_control( 'twitter_footer_link', array(
	'label'    	=> esc_html__( 'Twitter Link', 'pennews' ),
	'section'  	=> 'custom_footer',
	'settings'	=> 'twitter_footer_link',
	'type' 		=> 'text',
	'priority' 	=> 2
) );

$wp_customize->add_setting( 'telegram_footer_link', array(
	'default'           => '#',
	'sanitize_callback' => array( $sanitizer, 'text' )
) );
$wp_customize->add_control( 'telegram_footer_link', array(
	'label'    	=> esc_html__( 'Telegram Link', 'pennews' ),
	'section'  	=> 'custom_footer',
	'settings'	=> 'telegram_footer_link',
	'type' 		=> 'text',
	'priority' 	=> 3
) );

$wp_customize->add_setting( 'youtube_footer_link', array(
	'default'           => '#',
	'sanitize_callback' => array( $sanitizer, 'text' )
) );
$wp_customize->add_control( 'youtube_footer_link', array(
	'label'    	=> esc_html__( 'Youtube Link', 'pennews' ),
	'section'  	=> 'custom_footer',
	'settings'	=> 'youtube_footer_link',
	'type' 		=> 'text',
	'priority' 	=> 4
) );

$wp_customize->add_setting( 'facebook_footer_link', array(
	'default'           => '#',
	'sanitize_callback' => array( $sanitizer, 'text' )
) );
$wp_customize->add_control( 'facebook_footer_link', array(
	'label'    	=> esc_html__( 'Facebook Link', 'pennews' ),
	'section'  	=> 'custom_footer',
	'settings'	=> 'facebook_footer_link',
	'type' 		=> 'text',
	'priority' 	=> 5
) );

$wp_customize->add_setting( 'footer_message_social', array(
	'default'           => '#',
	'sanitize_callback' => array( $sanitizer, 'text' )
) );
$wp_customize->add_control( 'footer_message_social', array(
	'label'    	=> esc_html__( 'Social Media Message', 'pennews' ),
	'section'  	=> 'custom_footer',
	'settings'	=> 'footer_message_social',
	'type' 		=> 'text',
	'priority' 	=> 6
) );


$wp_customize->add_setting( 'footer_message_email', array(
	'default'           => '#',
	'sanitize_callback' => array( $sanitizer, 'text' )
) );
$wp_customize->add_control( 'footer_message_email', array(
	'label'    	=> esc_html__( 'Email Message', 'pennews' ),
	'section'  	=> 'custom_footer',
	'settings'	=> 'footer_message_email',
	'type' 		=> 'textarea',
	'priority' 	=> 7
) );

$wp_customize->add_setting( 'tos_link', array(
	'default'           => '#',
	'sanitize_callback' => array( $sanitizer, 'text' )
) );
$wp_customize->add_control( 'tos_link', array(
	'label'    	=> esc_html__( 'Terms of Service Link', 'pennews' ),
	'section'  	=> 'custom_footer',
	'settings'	=> 'tos_link',
	'type' 		=> 'text',
	'priority' 	=> 8
) );

$wp_customize->add_setting( 'tos_message', array(
	'default'           => '#',
	'sanitize_callback' => array( $sanitizer, 'text' )
) );
$wp_customize->add_control( 'tos_message', array(
	'label'    	=> esc_html__( 'Terms of Service Message', 'pennews' ),
	'section'  	=> 'custom_footer',
	'settings'	=> 'tos_message',
	'type' 		=> 'text',
	'priority' 	=> 9
) );