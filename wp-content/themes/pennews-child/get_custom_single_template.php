<?php
//////////////////////////////////////
// Show a different single.php
// than the default
// for custom taxonomies
// that is post-type: guides;
/////////////////////////////////////

function get_custom_single_template($single_template) {
    global $post;

    if ($post->post_type == 'cryptopedia') {
		echo get_template_directory_uri();
		$single_template = get_template_directory_uri() . '-child/single-bitcoin101.php';
     }
     return $single_template;
}

add_filter( "single_template", "get_custom_single_template" ) ;
?> 