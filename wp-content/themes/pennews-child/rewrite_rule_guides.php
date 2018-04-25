<?php
//////////////////
// Tell WordPress how to interpret the cryptopedia URL structure
/////////////////
// Custom Post Types
add_action( 'init', 'customtax_cryptopedia_tax' );
add_action( 'init', 'cpt_cryptopedia' );
// Rewrite Rules
add_filter( 'rewrite_rules_array', 'pennews_add_rewrite_rules' );
add_filter( 'post_type_link', 'pennews_filter_post_type_link', 10, 2 );


///////////////////////////////////////////////////////////////////////////
// Start

function pennews_add_rewrite_rules( $rules ) {
  $new = array();
  $new['cryptopedia/([^/]+)/(.+)/?$'] = 'index.php?cryptopedia=$matches[2]';
  $new['cryptopedia/(.+)/?$'] = 'index.php?cryptopedia_tax=$matches[1]';

  return array_merge( $new, $rules ); // Ensure our rules come first
}


function pennews_filter_post_type_link( $link, $post ) {
  if ( $post->post_type == 'cryptopedia' ) {
    if ( $cats = get_the_terms( $post->ID, 'cryptopedia_tax' ) ) {
      $link = str_replace( '%crypto_category%', current( $cats )->slug, $link );
    }
  }
  return $link;
}


function cpt_cryptopedia() {

  /**
   * Post Type: Guides.
   */

  $labels = array(
    "name" => __( "Guides", "pennews-child" ),
    "singular_name" => __( "Guide", "pennews-child" ),
  );

  $args = array(
    "label" => __( "Guides", "pennews-child" ),
    "labels" => $labels,
    "description" => "",
    "public" => true,
    "publicly_queryable" => true,
    "show_ui" => true,
    "show_in_rest" => false,
    "rest_base" => "",
    "has_archive" => true,
    "show_in_menu" => true,
    "show_in_nav_menus" => true,
    "exclude_from_search" => false,
    "capability_type" => "post",
    "map_meta_cap" => true,
    "hierarchical" => false,
    "rewrite" => array( "slug" => "cryptopedia/%crypto_category%", "with_front" => true ),
    "query_var" => true,
    "supports" => array( "title", "editor", "thumbnail" ),
  );

  register_post_type( "cryptopedia", $args );
}

function customtax_cryptopedia_tax() {

  /**
   * Taxonomy: Guide Categories.
   */

  $labels = array(
    "name" => __( "Guide Categories", "pennews-child" ),
    "singular_name" => __( "Guide Category", "pennews-child" ),
  );

  $args = array(
    "label" => __( "Guide Categories", "pennews-child" ),
    "labels" => $labels,
    "public" => true,
    "hierarchical" => false,
    "label" => "Guide Categories",
    "show_ui" => true,
    "show_in_menu" => true,
    "show_in_nav_menus" => true,
    "query_var" => true,
    "rewrite" => array( 'slug' => 'cryptopedia', 'with_front' => true, ),
    "show_admin_column" => true,
    "show_in_rest" => true,
    "rest_base" => "cryptopedia_tax",
    "show_in_quick_edit" => true,
  );
  register_taxonomy( "cryptopedia_tax", array( "cryptopedia" ), $args );
}

//END
////////////////////////////////////////////////////////////////////


function crypto_widget(){
    register_sidebar( array(
        'name' => __( 'Guides Widget', 'pennews-child' ),
        'id' => 'crypto_widget',
        'description' => __( 'Page Contents and Section Guide', 'pennews-child' ),
        'before_widget' => '<aside>',
        'after_widget' => '</aside>',
        'before_title' => '<h4 class="penci-block__title">',
        'after_title' => '</h4>',
    ) );
}
add_action( 'widgets_init', 'crypto_widget' );