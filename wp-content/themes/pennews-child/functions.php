<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
add_action( 'wp_enqueue_scripts', 'enqueue_site_script' );

add_shortcode('about_sc','about_sc_handler');		//ADD SHORT CODE --ABOUT CARDS
add_shortcode('events_sc','events_sc_handler');		//ADD SHORT CODE --ABOUT CARDS

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



function about_sc_handler($content,$tag){  

    $params = array(
        'post_type'   => 'people',
        'tax_query'   => array(
            array(
                'taxonomy' => 'people_tax',
                'field'    => 'slug',
                'terms'    => $tag
            )
        )
    );
	
    $people = new WP_Query($params);
	//printf( '<pre>%s</pre>', var_export( get_post_custom(), true ) );
    if( $people->have_posts() ) :


        $tempo = '
		<div style="width:auto;  display: flex; flex-wrap:wrap; margin: 0 auto;">';

            while( $people->have_posts() ) :
                $people->the_post();
				$f = get_post_meta(get_the_ID(),'fb_meta_box',true);
				$t = get_post_meta(get_the_ID(),'tw_meta_box',true);
			    $l = get_post_meta(get_the_ID(),'li_meta_box',true);
				
				$fb = (empty($f) ? '' : '<a href="http://wwww.facebook.com/'.$f.'"><i class="fa fa-facebook"></i></a>  ' );
				$tw = (empty($t) ? '' : '<a href="http://wwww.twitter.com/'.$t.'"><i class="fa fa-twitter"></i></a>  ' );
				$li = (empty($l) ? '' : '<a href="http://wwww.linkedin.com/in/'.$l.'"><i class="fa fa-linkedin"></i></a>  ' );
	
                $tempo .= '
				<div style="
				min-width: 345px;
                display: inline-block;
                border: 1px solid whitesmoke;
                width: 31.3333333%;
                border-radius: 7px;
                background-color: white;
                height: auto;
                margin-top: 15px;
				margin-right: 15px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                ">
                   
                   <div>
                        <img style="
                        width: auto;
                        border-top-left-radius: 7px;
                        border-top-right-radius: 7px;"
                             src="'. get_the_post_thumbnail_url().'">
                    </div>
                
                    <div  style="
                    padding: 10px 15px;
                    width: 50%;
                    display: inline-block;">
                        <a href="#"> '.get_the_title().'</a>
                    </div>
                   
                    <div align="right"  style="
                    padding: 10px 15px;
                    width: 30%;
                    float: right;
                    display: inline-block;">
                        '.$fb.$tw.$li.'
                    </div>

                </div>
				'; ?>

            <?php
            endwhile;
            wp_reset_postdata();

        $tempo .= '</div>';

    else :
        $tempo = esc_html_e( 'No members found yet!', 'text-domain' );
    endif;
    return $tempo;
}

function events_sc_handler($content,$tag){  

    $params = array(
        'post_type'   => 'events',
        'tax_query'   => array(
            array(
                'taxonomy' => 'etype_tax',
                'field'    => 'slug',
                'terms'    => $tag
            )
        )
    );
	
	print_r($tag);
	
    $events = new WP_Query($params);
    if( $events->have_posts() ) :


        $tempo = '
		<div style="width:100%;padding:5px;">';

            while( $events->have_posts() ) :
                $events->the_post();
// 				$eurl = (filter_var(get_post_meta(get_the_ID(),'event_url_mb',true),FILTER_VALIDATE_URL) 
// 						 ? get_post_meta(get_the_ID(),'event_url_mb',true) : 'You entered an invalid URL!') ;
	
				$from = get_post_meta(get_the_ID(),'from_date_mb',true);
			    $to = get_post_meta(get_the_ID(),'to_date_mb',true);
				$add = get_post_meta(get_the_ID(),'event_address_mb',true);
				
				
// 				$f = explode("/",$from);
// 				$t = explode("/",$to);

// 				$yearf = DateTime::createFromFormat('y', $f[2]);
// 				$yeart = DateTime::createFromFormat('y', $t[2]);

// 				$time = "";


// 				if($f[0] == $t[0] && $f[2] == $t[2]){

// 					$time = date('F', mktime(0, 0, 0, $f[0], 10))
// 						." ".$f[1]."-".$t[1].", ".$yearf->format('Y')
// 						;
// 				}else{
// 					$time = date('F', mktime(0, 0, 0, $f[0], 10))
// 						." ".$f[1].", ".$yearf->format('Y')." - ".date('F', mktime(0, 0, 0, $t[0], 10))
// 						." ".$t[1].", ".$yeart->format('Y')
// 						;
// 				}

                $tempo .= '
					<div><a href="#"><h2>'.get_the_title().'</h2></a></div>
					<div style="display: inline-block;"></div> <div style="display: inline-block;"><b>|					</b></div> <div style="display: inline-block;">'.$add.'</div>
					<div style="width: 100%;">
						<p>
							
						</p>
					</div>
				'; ?>

            <?php
            endwhile;
            wp_reset_postdata();

        $tempo .= '</div>';

    else :
        $tempo = esc_html_e( 'No events were set.', 'text-domain' );
    endif;
    return $tempo;
}



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
    
	wp_nonce_field( 'sm_links_nonce', 'meta_box_nonce' );
	?>
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

function my_theme_scripts() {
	if(is_page(483)) {
	    wp_enqueue_style( 'bootstrap-datetimepicker-css', '//rawcdn.githack.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.min.css');
		wp_enqueue_script( 'ckeditor', '//cdn.ckeditor.com/4.9.2/full/ckeditor.js');
		wp_enqueue_script( 'moment', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment.min.js');
		wp_enqueue_script( 'bootstrap-datetimepicker-js', '//rawcdn.githack.com/AuspeXeu/bootstrap-datetimepicker/master/js/bootstrap-datetimepicker.min.js');
	}

}

add_action( 'wp_enqueue_scripts', 'my_theme_scripts' );


