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
