<?php
//////////////////
// Tell WordPress how to interpret the cryptopedia URL structure
// 
// 
/////////////////
// Custom Post Types
add_action( 'init', 'customtax_cryptopedia_tax' );
add_action( 'init', 'cpt_cryptopedia' );
// Rewrite Rules
add_filter( 'rewrite_rules_array', 'pennews_add_rewrite_rules' );
add_filter( 'post_type_link', 'pennews_filter_post_type_link', 10, 2 );





///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// Start

function pennews_add_rewrite_rules( $rules ) {
  $new = array();
  $new['cryptopedia/([^/]+)/(.+)/?$'] = 'index.php?cryptopedia=$matches[2]';
  $new['cryptopedia/(.+)/?$'] = 'index.php?cryptopedia_tax=$matches[1]';

  return array_merge( $new, $rules ); // Ensure our rules come first
}

/**
 * Handle the '%project_category%' URL placeholder
 *
 * @param str $link The link to the post
 * @param WP_Post object $post The post object
 * @return str
 */
function pennews_filter_post_type_link( $link, $post ) {
  if ( $post->post_type == 'cryptopedia' ) {
    if ( $cats = get_the_terms( $post->ID, 'cryptopedia_tax' ) ) {
      $link = str_replace( '%crypto_category%', current( $cats )->slug, $link );
    }
  }
  return $link;
}




// POST TYPE
// Used for registering cpt_project custom post type
// $post_type_args = array(
//   'rewrite' => array(
//     'slug' => 'projects/%project_category%',
//     'with_front' => true
//   )
// );

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

// TAXONOMY
// Some of the args being passed to register_taxonomy() for 'cpt_project_category'
// $taxonomy_args = array(
//   'rewrite' => array(
//     'slug' => 'projects',
//     'with_front' => true
//   )
// );


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
    "show_admin_column" => false,
    "show_in_rest" => false,
    "rest_base" => "cryptopedia_tax",
    "show_in_quick_edit" => false,
  );
  register_taxonomy( "cryptopedia_tax", array( "cryptopedia" ), $args );
}
