<?php

add_action( 'widgets_init', 'penci_register_widgets' );
/**
 * Register widgets
 */
function penci_register_widgets()
{

	register_widget( 'Penci_Widget_Block_6' );
	register_widget( 'Penci_Widget_Block_7' );
	register_widget( 'Penci_Widget_Block_10' );
	register_widget( 'Penci_Widget_Block_11' );
	register_widget( 'Penci_Widget_Block_15' );
	register_widget( 'Penci_Widget_Block_16' );
	register_widget( 'Penci_Widget_Block_23' );
	register_widget( 'Penci_Widget_Block_25' );

	register_widget( 'Penci_Widget_Social_Counter' );
	register_widget( 'Penci_Widget_Ad_Box' );
	register_widget( 'Penci_Widget_Authors_Box' );
	register_widget( 'Penci_WidgetPopular_Categories' );

	register_widget( 'Penci_Widget_Pinterest' );
	register_widget( 'Penci_Widget_Latest_Tweets' );
	register_widget( 'Penci_Widget_Facebook_Page' );


	register_widget( 'Penci_Widget_About_Us' );
	register_widget( 'Penci_Widget_Videos_Playlist' );
	register_widget( 'Penci_Widget_Weather' );
	register_widget( 'Penci_Widget_Login_Form' );
}

class Penci_Widget_Login_Form extends Penci_Framework_Widget {
	var $block_id = 'login_form';
}

class Penci_Widget_Videos_Playlist extends Penci_Framework_Widget {
	var $block_id = 'videos_playlist';
}

class Penci_Widget_Weather extends Penci_Framework_Widget {
	var $block_id = 'weather';
}

class Penci_Widget_About_Us extends Penci_Framework_Widget {
	var $block_id = 'about_us';
}

class Penci_Widget_Block_6 extends Penci_Framework_Widget {
	var $block_id = 'block_6';
}

class Penci_Widget_Block_7 extends Penci_Framework_Widget {
	var $block_id = 'block_7';
}

class Penci_Widget_Block_10 extends Penci_Framework_Widget {
	var $block_id = 'block_10';
}

class Penci_Widget_Block_11 extends Penci_Framework_Widget {
	var $block_id = 'block_11';
}

class Penci_Widget_Block_15 extends Penci_Framework_Widget {
	var $block_id = 'block_15';
}
class Penci_Widget_Block_16 extends Penci_Framework_Widget {
	var $block_id = 'block_16';
}

class Penci_Widget_Block_23 extends Penci_Framework_Widget {
	var $block_id = 'block_23';
}

class Penci_Widget_Block_25 extends Penci_Framework_Widget {
	var $block_id = 'block_25';
}

class Penci_Widget_Social_Counter extends Penci_Framework_Widget {
	var $block_id = 'social_counter';
}

class Penci_Widget_Ad_Box extends Penci_Framework_Widget {
	var $block_id = 'ad_box';
}

class Penci_Widget_Authors_Box extends Penci_Framework_Widget {
	var $block_id = 'authors_box';
}

class Penci_WidgetPopular_Categories extends Penci_Framework_Widget {
	var $block_id = 'popular_category';
}

class Penci_Widget_Pinterest extends Penci_Framework_Widget {
	var $block_id = 'pinterest';
}
class Penci_Widget_Latest_Tweets extends Penci_Framework_Widget {
	var $block_id = 'latest_tweets';
}
class Penci_Widget_Facebook_Page extends Penci_Framework_Widget {
	var $block_id = 'facebook_page';
}
