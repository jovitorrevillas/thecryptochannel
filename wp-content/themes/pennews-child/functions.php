<?php
//Disable AdminBar
show_admin_bar(false);

add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
add_action( 'wp_enqueue_scripts', 'enqueue_site_script' );


add_action( 'add_meta_boxes', 'add_links_meta_box' ); //ADD CUSTOM META BOX --ABOUT LINKS
add_action( 'save_post', 'links_meta_box_save' );	// SAVE CUSTOM META BOX DATA --ABOUT LINKS

add_action( 'add_meta_boxes', 'add_events_meta_box' ); //ADD CUSTOM META BOX --EVENTS DETAILS
add_action( 'save_post', 'events_meta_box_save' );	// SAVE CUSTOM META BOX DATA --EVENTS DETAILS



include ('custom_post_types.php');
include ('rewrite_rule_guides.php');

function theme_enqueue_styles() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'penci-style-child', get_stylesheet_directory_uri() . '/style.css', array( 'parent-style' ), wp_get_theme()->get( 'Version' ) );
}

// Main.js
function enqueue_site_script() {
    wp_enqueue_script( 'site-main', get_template_directory_uri() . '-child/main.js', array('jquery'), '1.0.0', true );
}

function clean_custom_menu( $theme_location ) {
    if ( ($theme_location) && ($locations = get_nav_menu_locations()) && isset($locations[$theme_location]) ) {
        $menu = get_term( $locations[$theme_location], 'nav_menu' );
        $menu_items = wp_get_nav_menu_items($menu->term_id);
 
        $menu_list  = '<nav class="penci-container">' ."\n";
        $menu_list .= '<div class="footer-nav">' ."\n";
 
        $count = 0;
        $submenu = false;
         
        foreach( $menu_items as $menu_item ) {
             
            $link = $menu_item->url;
            $title = $menu_item->title;
             
            if ( !$menu_item->menu_item_parent ) {
                $parent_id = $menu_item->ID;
                 
                $menu_list .= '<div class="footer-menu-item">' ."\n";
                $menu_list .= '<h3 class="category-title">'.$title.'</h3>'."\n";
            }
 
            if ( $parent_id == $menu_item->menu_item_parent ) {
 
                if ( !$submenu ) {
                    $submenu = true;
                    $menu_list .= '<ul class="sub-menu">' ."\n";
                }
 
                $menu_list .= '<li class="item">' ."\n";
                $menu_list .= '<a href="'.$link.'" class="title">'.$title.'</a>' ."\n";
                $menu_list .= '</li>' ."\n";
                     
 
                if ( $menu_items[ $count + 1 ]->menu_item_parent != $parent_id && $submenu ){
                    $menu_list .= '</ul>' ."\n";
                    $submenu = false;
                }
 
            }
 
            if ( $menu_items[ $count + 1 ]->menu_item_parent != $parent_id ) { 
                $menu_list .= '</div>' ."\n";      
                $submenu = false;
            }
 
            $count++;
        }
         
        $menu_list .= '</div>' ."\n";
        $menu_list .= '</nav>' ."\n";
 
    } else {
        $menu_list = '<!-- no menu defined in location "'.$theme_location.'" -->';
    }
    echo $menu_list;
}






// Philip Functions -- About Page



//CREATE CUSTOM METABOXES --ABOUT

function add_links_meta_box(){
	add_meta_box( 'sm_links_id', 'Social Media Links', 'html_links_metabox', 'people', 'normal', 'default' );
}

function html_links_metabox(){
	global $post;
	$values = get_post_custom( $post->ID );
    $fb_text = isset( $values['fb_meta_box'] ) ? esc_attr($values['fb_meta_box'][0]) : '';
	$tw_text = isset( $values['tw_meta_box'] ) ?  esc_attr($values['tw_meta_box'][0]) : '';
	$li_text = isset( $values['li_meta_box'] ) ?  esc_attr($values['li_meta_box'][0]) : '';
    $pos_text = isset( $values['pos_meta_box'] ) ?  esc_attr($values['pos_meta_box'][0]) : '';
	
	wp_nonce_field( 'sm_links_nonce', 'meta_box_nonce' );
	?>
<label for="pos_meta_box">Position (<i>For management team members only</i>)</label><br>
    <input type="text" name="pos_meta_box" id="pos_meta_box" value="<?=$pos_text?>" /><br><br>

<label for="fb_meta_box">Facebook (<i>Username only</i>)</label><br>
    <input type="text" name="fb_meta_box" id="fb_meta_box" value="<?=$fb_text?>" />
<br><br>
	<label for="tw_meta_box">Twitter (<i>Username only</i>)</label><br>
    <input type="text" name="tw_meta_box" id="tw_meta_box" value="<?=$tw_text?>" />
<br><br>
	<label for="li_meta_box">LinkedIn (<i>Username only</i>)</label><br>
    <input type="text" name="li_meta_box" id="li_meta_box" value="<?=$li_text?>" />
    <?php
}

function links_meta_box_save( $post_id )
{
    // Bail if we're doing an auto save
    if( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
     
    // if our nonce isn't there, or we can't verify it, bail
    if( !isset( $_POST['meta_box_nonce'] ) || !wp_verify_nonce( $_POST['meta_box_nonce'], 'sm_links_nonce' ) ) return;
     
    // if our current user can't edit this post, bail
    if( !current_user_can( 'edit_post', $post_id ) ) return;
	
	$allowed = array( 
        'a' => array( // on allow a tags
            'href' => array() // and those anchors can only have href attribute
        )
    );
	
	// Make sure your data is set before trying to save it
    if( array_key_exists('pos_meta_box', $_POST) )
        update_post_meta( $post_id, 'pos_meta_box', wp_kses( $_POST['pos_meta_box'], $allowed ) );
	
	if( array_key_exists('fb_meta_box', $_POST) )
        update_post_meta( $post_id, 'fb_meta_box', wp_kses( $_POST['fb_meta_box'], $allowed ) );

	
	if( array_key_exists('tw_meta_box', $_POST) )
        update_post_meta( $post_id, 'tw_meta_box', wp_kses( $_POST['tw_meta_box'], $allowed ) );
	
	if( array_key_exists('li_meta_box', $_POST) )
        update_post_meta( $post_id, 'li_meta_box', wp_kses( $_POST['li_meta_box'], $allowed ) );
      
}

//CREATE CUSTOM METABOXES --EVENTS

function add_events_meta_box(){
	add_meta_box( 'events_id', 'Event Details', 'html_events_metabox', 'events', 'normal', 'default' );
}

function html_events_metabox(){
	global $post;
	$values = get_post_custom( $post->ID );
    $eurl_text = isset( $values['event_url_mb'] ) ? esc_attr($values['event_url_mb'][0]) : '';
	$from_text = isset( $values['from_date_mb'] ) ?  esc_attr($values['from_date_mb'][0]) : '';
	$to_text = isset( $values['to_date_mb'] ) ?  esc_attr($values['to_date_mb'][0]) : '';
    $eadd_text = isset( $values['event_address_mb'] ) ?  esc_attr($values['event_address_mb'][0]) : '';
	
	wp_nonce_field( 'events_nonce', 'meta_box_nonce' );
	?>


<label for="event_url_mb"><strong>Event URL</strong></label><br>
    <input type="text" name="event_url_mb" id="event_url_mb" value="<?=$eurl_text?>" />
<br><br>

	<label for="event_dates"><strong>Event Date</strong></label><br>
    &nbsp;&nbsp;<label for="from_date_mb"><i>From</i></label><input type="text" class="from-date" name="from_date_mb" id="from_date_mb" value="<?=$from_text?>" /><br>
	&nbsp;&nbsp;<label for="to_date_mb"><i>To</i></label><input type="text" class="to-date" name="to_date_mb" id="to_date_mb" value="<?=$to_text?>" /><br>

<br>
	<label for="event_dates"><strong>Event Location</strong></label><br>
	<input type="text" name="event_address_mb" id="event_address_mb" value="<?=$eadd_text?>"/>
    <?php
}

function events_meta_box_save( $post_id )
{
    // Bail if we're doing an auto save
    if( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
     
    // if our nonce isn't there, or we can't verify it, bail
    if( !isset( $_POST['meta_box_nonce'] ) || !wp_verify_nonce( $_POST['meta_box_nonce'], 'events_nonce' ) ) return;
     
    // if our current user can't edit this post, bail
    if( !current_user_can( 'edit_post', $post_id ) ) return;
	
	$allowed = array( 
        'a' => array( // on allow a tags
            'href' => array() // and those anchors can only have href attribute
        )
    );
	
	// Make sure your data is set before trying to save it
    if( array_key_exists('event_url_mb', $_POST) )
        update_post_meta( $post_id, 'event_url_mb', wp_kses( $_POST['event_url_mb'], $allowed ) );

	
	if( array_key_exists('from_date_mb', $_POST) )
        update_post_meta( $post_id, 'from_date_mb', wp_kses( $_POST['from_date_mb'], $allowed ) );
	
	if( array_key_exists('to_date_mb', $_POST) )
        update_post_meta( $post_id, 'to_date_mb', wp_kses( $_POST['to_date_mb'], $allowed ) );
	
	if( array_key_exists('event_address_mb', $_POST) )
        update_post_meta( $post_id, 'event_address_mb', wp_kses( $_POST['event_address_mb'], $allowed ) );
	
      
}

function cryptopedia_scripts() {
	if(is_page(483)) {
	    wp_enqueue_style( 'bootstrap-datetimepicker-css', '//rawcdn.githack.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.min.css');
		wp_enqueue_style('bootstrap-datetimepicker', '//rawcdn.githack.com/smalot/bootstrap-datetimepicker/master/css/bootstrap-datetimepicker.min.css');
		wp_enqueue_script( 'ckeditor', '//cdn.ckeditor.com/4.9.2/full/ckeditor.js');
		wp_enqueue_script( 'moment', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment.min.js');
		wp_enqueue_script( 'bootstrap-datetimepicker-js', '//rawcdn.githack.com/AuspeXeu/bootstrap-datetimepicker/master/js/bootstrap-datetimepicker.min.js');
	    wp_enqueue_style( 'bootstrap-glyphicon', '//rawcdn.githack.com/wcoder/bootstrap-glyphicons/master/css/glyphicons.css');
	}

}

add_action( 'wp_enqueue_scripts', 'cryptopedia_scripts' );


function add_sidebar_scripts(){
	
	if(is_singular('cryptopedia')){
		wp_enqueue_script('scrollspy', get_template_directory_uri() . '/js/scrollspy.js');
		wp_enqueue_script('sidebar', get_template_directory_uri() . '/js/sidebar.js', array('jquery'), 1, true);
		wp_enqueue_style( 'sidebar-widget-style', get_stylesheet_directory_uri() . '/sidebar.css');

	}
}

add_action('wp_enqueue_scripts', 'add_sidebar_scripts');

//Michael Custom Meta Boxes for Explained Page

function explained_custom( $meta_boxes ) {
	$prefix = '';

	$meta_boxes[] = array(
		'id' => 'sharebox_right',
		'title' => esc_html__( 'Share Box Right', 'metabox-online-generator' ),
		'post_types' => array('cryptopedia' ),
		'context' => 'normal',
		'priority' => 'default',
		'autosave' => false,
		'tax_query'   => array(
						array(
							'taxonomy' => 'cryptopedia_tax',
							'field'    => 'slug',
							'terms'    => 'explained'
						)
					),
		'fields' => array(
			array(
				'id' => $prefix . 'sponsor_label',
				'type' => 'text',
				'name' => esc_html__( 'Sponsor Text', 'metabox-online-generator' ),
				'desc' => esc_html__( 'add text here', 'metabox-online-generator' ),
			),
			array(
				'id' => $prefix . 'sponsor_link',
				'type' => 'text',
				'name' => esc_html__( 'Sponsor Link', 'metabox-online-generator' ),
			),
			array(
				'id' => $prefix . 'image_advanced_2',
				'type' => 'image_advanced',
				'name' => esc_html__( 'Image Advanced', 'metabox-online-generator' ),
			),
		),
	);

	return $meta_boxes;
}
add_filter( 'rwmb_meta_boxes', 'explained_custom' );



