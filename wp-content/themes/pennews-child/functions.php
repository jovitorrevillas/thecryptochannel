<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'penci-style-child', get_stylesheet_directory_uri() . '/style.css', array( 'parent-style' ), wp_get_theme()->get( 'Version' ) );

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






// PHILIP F
add_shortcode('about_sc','about_sc_handler');

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

    if( $people->have_posts() ) :


        $tempo = '<ul>';

            while( $people->have_posts() ) :
                $people->the_post();


                $tempo .= '<div style="

                display: inline-block;
                border: 1px solid whitesmoke;
                width: 31.3333333%;
                border-radius: 7px;
                background-color: white;
                height: auto;
                margin-top: 15px;
                margin-right: 1.5%;
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
                   
                    <div  style="
                    border: 1px solid black;
                    padding: 10px 15px;
                    width: 30%;
                    float: right;
                    display: inline-block;">
                        <a href="#">THE LINKS</a>
                    </div>

                </div>'; ?>

            <?php
            endwhile;
            wp_reset_postdata();

        $tempo .= '</ul>';

    else :
        $tempo = esc_html_e( 'No testimonials in the diving taxonomy!', 'text-domain' );
    endif;
    return $tempo;
}