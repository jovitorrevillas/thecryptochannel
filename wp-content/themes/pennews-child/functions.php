<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
add_action( 'wp_enqueue_scripts', 'enqueue_site_script' );
function theme_enqueue_styles() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'penci-style-child', get_stylesheet_directory_uri() . '/style.css', array( 'parent-style' ), wp_get_theme()->get( 'Version' ) );
}

// Main.js
function enqueue_site_script() {
    wp_enqueue_script( 'site-main', get_template_directory_uri() . '-child/main.js', array(jquery), '1.0.0', true );
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
        $tempo = esc_html_e( 'No testimonials in the diving taxonomy!', 'text-domain' );
    endif;
    return $tempo;
}

function cptui_register_my_cpts_people() {

	/**
	 * Post Type: peoples.
	 */

	$labels = array(
		"name" => __( "peoples", "pennews-child" ),
		"singular_name" => __( "person", "pennews-child" ),
	);

	$args = array(
		"label" => __( "peoples", "pennews-child" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => false,
		"rest_base" => "",
		"has_archive" => false,
		"show_in_menu" => true,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => array( "slug" => "people", "with_front" => true ),
		"query_var" => true,
		"supports" => array( "title", "editor", "thumbnail" ),
		"taxonomies" => array( "people_tax" ),
	);

	register_post_type( "people", $args );
}


function cptui_register_my_taxes_people_tax() {

	/**
	 * Taxonomy: team.
	 */

	$labels = array(
		"name" => __( "team", "pennews-child" ),
		"singular_name" => __( "team", "pennews-child" ),
	);

	$args = array(
		"label" => __( "team", "pennews-child" ),
		"labels" => $labels,
		"public" => true,
		"hierarchical" => false,
		"label" => "team",
		"show_ui" => true,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"query_var" => true,
		"rewrite" => array( 'slug' => 'people_tax', 'with_front' => true, ),
		"show_admin_column" => true,
		"show_in_rest" => true,
		"rest_base" => "",
		"show_in_quick_edit" => false,
	);
	register_taxonomy( "people_tax", array( "people" ), $args );
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

function my_theme_scripts() {
	if(is_page(483)) {
		wp_enqueue_script('ckeditor', '//cdn.ckeditor.com/4.9.2/full/ckeditor.js');
	}
}

add_shortcode('about_sc','about_sc_handler');
add_action( 'init', 'cptui_register_my_cpts_people' );
add_action( 'init', 'cptui_register_my_taxes_people_tax' );
add_action( 'add_meta_boxes', 'add_links_meta_box' ); //ADD CUSTOM META BOX --ABOUT LINKS
add_action( 'save_post', 'links_meta_box_save' );	// SAVE CUSTOM META BOX DATA --ABOUT LINKS

add_action( 'wp_enqueue_scripts', 'my_theme_scripts' );
