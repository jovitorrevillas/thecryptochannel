<?php

add_action( 'init', 'custom_post_types_people');
add_action( 'init', 'custom_post_types_events');

add_shortcode('about_sc','about_sc_handler');		//ADD SHORT CODE --ABOUT CARDS
add_shortcode('home_sc','homepage_handler');		//ADD SHORT CODE --ABOUT CARDS
add_shortcode('events_sc','events_sc_handler');		//ADD SHORT CODE --EVENTS DISpLAy
add_shortcode('events_feat','events_feat_sc_handler');		//ADD SHORT CODE --EVENTS DISpLAy

function custom_post_types_people() {
// POST TYPES
	/**
	 * Post Type: peoples.
	 */

	$labels0 = array(
		"name" => __( "People", "pennews-child" ),
		"singular_name" => __( "person", "pennews-child" ),
	);

	$args0 = array(
		"label" => __( "peoples", "pennews-child" ),
		"labels" => $labels0,
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

// TAXONOMIES
	/**
	 * Taxonomy: team.
	 */

	$labels1 = array(
		"name" => __( "Team", "pennews-child" ),
		"singular_name" => __( "team", "pennews-child" ),
	);

	$args1 = array(
		"label" => __( "team", "pennews-child" ),
		"labels" => $labels1,
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

	register_post_type( "people", $args0 );
	register_taxonomy( "people_tax", array( "people" ), $args1 );
}

function custom_post_types_events(){
	// POST TYPES
	/**
	 * Post Type: peoples.
	 */

	$labels0 = array(
		"name" => __( "Events", "pennews-child" ),
		"singular_name" => __( "event", "pennews-child" ),
	);

	$args0 = array(
		"label" => __( "events", "pennews-child" ),
		"labels" => $labels0,
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
		"rewrite" => array( "slug" => "events", "with_front" => true ),
		"query_var" => true,
		"supports" => array( "title", "editor", "thumbnail"),
		"taxonomies" => array("etype_tax"),
	);
	
	// TAXONOMIES
	/**
	 * Taxonomy: team.
	 */

	$labels1 = array(
		"name" => __( "Event Types", "pennews-child" ),
		"singular_name" => __( "etype", "pennews-child" ),
	);

	$args1 = array(
		"label" => __( "etype", "pennews-child" ),
		"labels" => $labels1,
		"public" => true,
		"hierarchical" => false,
		"label" => "etype",
		"show_ui" => true,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"query_var" => true,
		"rewrite" => array( 'slug' => 'etype_tax', 'with_front' => true, ),
		"show_admin_column" => true,
		"show_in_rest" => true,
		"rest_base" => "",
		"show_in_quick_edit" => false,
	);
	
	register_post_type( "events", $args0 );
	register_taxonomy( "etype_tax", array( "events" ), $args1 );
}









function homepage_handler($content,$tag){  

    $params = array(
        'post_type'   => 'post',
    );
	
    $people = new WP_Query($params);
	//printf( '<pre>%s</pre>', var_export( get_post_custom(), true ) );
    if( $people->have_posts() ) :


        $tempo = '
		<div style="width:auto;  display: flex; flex-wrap:wrap; margin: 0 auto;">';

            while( $people->have_posts() ) :
                $people->the_post();
	
                $tempo .= '
				<div style="
				min-width: 345px;
                display: inline-block;
                border: 1px solid whitesmoke;
                width: 30.3333333%;
                border-radius: 7px;
                background-color: white;
                height: auto;
                margin-top: 15px;
				margin-left: 15px;
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
                    width: 100%;
					height: 88px;
                    display: block;">
                        <a href="'.get_permalink().'"><span class="postTitle"> '.get_the_title().'</span></a>
                    </div>
                   
                    <div style="
					float: right;
                    padding: 10px 15px;
                    width: 40%;
                    display: inline-block;">
                        '.get_the_date().' 
                    </div>

                </div>
				'; ?>

            <?php
            endwhile;
            wp_reset_postdata();

        $tempo .= '</div>';

    else :
	
    endif;
    return $tempo;
}

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


        $tempo = '
		<div style="width:auto;  display: flex; flex-wrap:wrap; margin: 0 auto;">';

            while( $people->have_posts() ) :
                $people->the_post();
				$f = get_post_meta(get_the_ID(),'fb_meta_box',true);
				$t = get_post_meta(get_the_ID(),'tw_meta_box',true);
			    $l = get_post_meta(get_the_ID(),'li_meta_box',true);
				$p = get_post_meta(get_the_ID(),'pos_meta_box',true);
	
				$fb = (empty($f) ? '' : '<a href="http://wwww.facebook.com/'.$f.'"><i class="fa fa-facebook"></i></a>  ' );
				$tw = (empty($t) ? '' : '<a href="http://wwww.twitter.com/'.$t.'"><i class="fa fa-twitter"></i></a>  ' );
				$li = (empty($l) ? '' : '<a href="http://wwww.linkedin.com/in/'.$l.'"><i class="fa fa-linkedin"></i></a>  ' );
				$po = (empty($p) ? '' : '<div style="text-align:left;color:#A1A9C1;width:100%;padding-top: 0;padding-left:15px;padding-right:15px;padding-bottom:15px;">'.$p.'</div>' );
	
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
					'.$po.'
                </div>
				'; ?>

            <?php
            endwhile;
            wp_reset_postdata();

        $tempo .= '</div>';

    else :
        
    endif;
    return $tempo;
}

function events_sc_handler($content,$tag){  
if(!$tag){
	
    $params = array(
        'post_type'   => 'events'
    );
}
	else
		
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
	
    $events = new WP_Query($params);
    if( $events->have_posts() ) :


        $tempo = '
		<div style="width:100%;padding:5px;">';

            while( $events->have_posts() ) :
                $events->the_post();
				$eurl = (filter_var(get_post_meta(get_the_ID(),'event_url_mb',true),FILTER_VALIDATE_URL) 
						 ? get_post_meta(get_the_ID(),'event_url_mb',true) : 'You entered an invalid URL!') ;
	
				$from = get_post_meta(get_the_ID(),'from_date_mb',true); 
			    $to = get_post_meta(get_the_ID(),'to_date_mb',true);
				$add = get_post_meta(get_the_ID(),'event_address_mb',true);
				
				$time = concat_date($from,$to);
				

                $tempo .= '
					<div style="margin-bottom:10px;margin-top:15px;"><a href="'.$eurl.'"><h4>'.get_the_title().'</h4></a></div>
					<div style="display: inline-block; color: black; font-weight:600;">'.$time.'</div> <div style="display: inline-block;font-weight: 800;">|</div> <div style="display: inline-block; font-weight:600;">'.$add.'</div>
					<div style="width: 100%; padding-top:15px;">
					
							'.get_the_content().'
					
					</div>
					<hr>
				'; ?>

            <?php
            endwhile;
            wp_reset_postdata();

        $tempo .= '</div>';


    endif;
    return $tempo;
}

function concat_date($from,$to){
				$time = "";
	
				$f = explode("/",$from);
				$t = explode("/",$to);
	
				$fd = date("F d, Y", mktime(0, 0, 0, $f[0], $f[1], $f[2]));
				$td = date("F d, Y", mktime(0, 0, 0, $t[0], $t[1], $t[2]));

				$fdd = explode(" ",$fd);
				$tdd = explode(" ",$td);



				if($fdd[0] == $tdd[0] && $fdd[1] == $tdd[1] && $fdd[2] == $tdd[2]){
					$time = implode($fdd," ");
				}else if ($fdd[0] == $tdd[0] && $fdd[2] == $tdd[2]){
				$time = $fdd[0]." ".str_replace(",","",$fdd[1])."-".$tdd[1]." ".$fdd[2];

				}else{
					$time = implode($fdd," ")." - ".implode($tdd," ");
				}
				
		return $time;
	
}

function events_feat_sc_handler($content,$tag){  
		
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
	
    $events = new WP_Query($params);
    if( $events->have_posts() ) :
$tempo = '';
            while( $events->have_posts() ) :
                $events->the_post();
				$eurl = (filter_var(get_post_meta(get_the_ID(),'event_url_mb',true),FILTER_VALIDATE_URL) 
						 ? get_post_meta(get_the_ID(),'event_url_mb',true) : 'You entered an invalid URL!') ;
	
				$from = get_post_meta(get_the_ID(),'from_date_mb',true); 
			    $to = get_post_meta(get_the_ID(),'to_date_mb',true);
				$add = get_post_meta(get_the_ID(),'event_address_mb',true);
				
				$time = concat_date($from,$to);
				

                $tempo .= '
				<div class="vc_col-sm-12" style="background-color: white;padding-top:10px;box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);margin-top: 15px;">
					<div class="vc_col-sm-4" style="padding-right: 15px;display:inline-block;">
						<img class="vc_img-placeholder vc_single_image-img" src="'.get_the_post_thumbnail_url().'" />
					</div>
					<div class="vc_col-sm-8" style="display:inline-block;">
						<div><a href="'.$eurl.'"><h4>'.get_the_title().'</h4></a></div>
						<div style="display: inline-block; color: black; font-weight:600;margin-top:10px;">'.$time.'</div> <div style="display: inline-block;font-weight: 900;margin-top:10px;">|</div> <div style="color: #a1a1a1; display: inline-block; font-weight:600;margin-top:10px;">'.$add.'</div>
						<div style="width: 100%; padding-top:15px;margin-top:10px;">

								'.get_the_content().'

						</div>
					</div>
				</div>
				'; ?>

            <?php
            endwhile;
            wp_reset_postdata();



    endif;
    return $tempo;
}