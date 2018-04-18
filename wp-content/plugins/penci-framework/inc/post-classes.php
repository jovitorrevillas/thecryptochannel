<?php
class Penci_Framework_Post_Classes
{
	/**
	 * Constructor
	 */
	public function __construct()
	{
		add_filter( 'post_class', array( $this, 'post_class' ) );
	}

	/**
	 * Remove post classes for all taxonomies (except categories) for posts
	 *
	 * @param $classes
	 *
	 * @return array
	 */
	public function post_class( $classes )
	{
		$class_remove = array();
		$taxonomies = get_taxonomies( array(), 'names', 'and' );

		foreach ( $taxonomies as $taxonomy )
		{
			$terms = get_terms( $taxonomy, array() );

			foreach ( $terms as $term )
			{
				$class_remove[] = $taxonomy . '-' . $term->slug;
			}
		}

		$classes = array_diff( $classes, $class_remove );

		return $classes;
	}
}

if ( ! function_exists( 'penci_get_post_class' ) ) {
	function penci_get_post_class( $class = '', $post_id = null ) {

		$classes = array();

		if ( $class ) {
			if ( ! is_array( $class ) ) {
				$class = preg_split( '#\s+#', $class );
			}
			$classes = array_map( 'esc_attr', $class );
		} else {
			// Ensure that we always coerce class to being an array.
			$class = array();
		}

		if ( ! $post_id ) {
			return $classes;
		}

		$classes[] = 'hentry';
		$classes[] = 'penci-post-item';

		$classes = array_map( 'esc_attr', $classes );

		return array_unique( $classes );
	}
}