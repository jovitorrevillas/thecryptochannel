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
        $terms = get_the_terms($post->ID, 'type');
        if($terms && !is_wp_error( $terms )) {
            //Make a foreach because $terms is an array but it supposed to be only one term
            foreach($terms as $term){
                $single_template = get_template_directory_uri() . 'template-parts/single-'.$term->slug.'.php';
            }
        }
     }
     return $single_template;
}

add_filter( "single_template", "get_custom_single_template" ) ;
?> 