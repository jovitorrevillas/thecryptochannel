<?php

add_action( 'init', 'custom_post_types_pen' );

function custom_post_types_pen() {
// POST TYPES
	/**
	 * Post Type: peoples.
	 */

	$labels0 = array(
		"name" => __( "People", "pennews-child" ),
		"singular_name" => __( "person", "pennews-child" ),
	);

	$args = array(
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
		"name" => __( "team", "pennews-child" ),
		"singular_name" => __( "team", "pennews-child" ),
	);

	$args = array(
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

	register_taxonomy( "people_tax", array( "people" ), $args );
	register_post_type( "people", $args );
}

