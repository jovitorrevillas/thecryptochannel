<?php
/**
 * Register one click import demo data
 */

function penci_get_list_demo() {
	$list_demo = array(
		'01-default' => array(
			'name'  => 'Deafult',
			'pages' => array(
				'front_page' => 'Home Default',
				'blog'       => 'Blog',
				'shop'       => 'Shop',
				'cart'       => 'Cart',
				'checkout'   => 'Checkout',
				'my_account' => 'My Account',
			)
		),
		'30-animal'       => array( 'name' => 'Animal' ),
		'07-architecture' => array( 'name' => 'Architecture News & Magazine' ),
		'08-art'          => array( 'name' => 'Art News & Magazine' ),
		'21-beauty'       => array( 'name' => 'Beauty Cosmetic' ),
		'22-breakingnews' => array( 'name' => 'Breaking News' ),
		'09-business'     => array( 'name' => 'Business News' ),
		'33-bitcoin'      => array( 'name' => 'BitCoin News' ),
		'16-car'          => array( 'name' => 'Car News' ),
		'20-church'       => array( 'name' => 'Church ' ),
		'24-classic'      => array( 'name' => 'Classic' ),
		'23-construct'    => array( 'name' => 'Construction' ),
		'27-creative'     => array( 'name' => 'Creative' ),
		'32-edu'          => array( 'name' => 'Education' ),
		'29-estate'       => array( 'name' => 'Real Estate' ),
		'05-fashion'      => array( 'name' => 'Fashion News & Magazine' ),
		'06-fitness'      => array( 'name' => 'Fitness News & Magazine' ),
		'03-food'         => array( 'name' => 'Food' ),
		'10-game'         => array( 'name' => 'Game News & Magazine' ),
		'17-health'       => array( 'name' => 'Health & Medical News' ),
		'34-hotel'        => array( 'name' => 'PenNews Hotel News' ),
		'25-lifestyle'    => array( 'name' => 'LifeStyle' ),
		'12-movie'        => array( 'name' => 'Movie News' ),
		'35-market'       => array( 'name' => 'PenNews Market News' ),
		'14-photography'  => array( 'name' => 'Photography News & Magazine' ),
		'31-politics'     => array( 'name' => 'Politics' ),
		'26-restaurant'   => array( 'name' => 'Restaurant' ),
		'18-spa'          => array( 'name' => 'Spa News' ),
		'15-sport'        => array( 'name' => 'Sport News' ),
		'36-star'         => array( 'name' => 'PenNews Star News' ),
		'13-tech'         => array( 'name' => 'Tech News & Magazine' ),
		'28-times'        => array( 'name' => 'Time' ),
		'02-travel'       => array( 'name' => 'Travel News' ),
		'04-vegan'        => array( 'name' => 'Vegan News' ),
		'11-video'        => array( 'name' => 'Video News' ),
		'19-yoga'         => array( 'name' => 'Yoga News' ),
	);

	return $list_demo;
}

add_filter( 'penci_demo_packages', 'penci_addons_import_register' );

function penci_addons_import_register() {

	$penci_demo_url = 'http://pennews.pencidesign.com/pennews-demos/';

	$img_size = array(
		'penci-thumb-480-645' => array( 'width' => 480, 'height' => 645, 'crop' => 1, ),
		'penci-thumb-480-480' => array( 'width' => 480, 'height' => 480, 'crop' => 1, ),
		'penci-thumb-480-320' => array( 'width' => 480, 'height' => 320, 'crop' => 1, ),

		'penci-thumb-280-376' => array( 'width' => 280, 'height' => 376, 'crop' => 1, ),
		'penci-thumb-280-186' => array( 'width' => 280, 'height' => 186, 'crop' => 1, ),
		'penci-thumb-280-280' => array( 'width' => 280, 'height' => 280, 'crop' => 1, ),

		'penci-thumb-760-570'   => array( 'width' => 760, 'height' => 570, 'crop' => 1, ),
		'penci-thumb-1920-auto' => array( 'width' => 1920, 'height' => 999999, 'crop' => 0, ),
		'penci-thumb-960-auto'  => array( 'width' => 960, 'height' => 999999, 'crop' => 0, ),
		'penci-thumb-auto-400'  => array( 'width' => 999999, 'height' => 400, 'crop' => 0, ),
		'penci-masonry-thumb'   => array( 'width' => 585, 'height' => 99999, 'crop' => 0, ),
	);

	$list_demo = array();
	$demos     = penci_get_list_demo();

	foreach ( $demos as $folder => $demo_data ) {

		$pages = isset( $demo_data['pages'] ) ? $demo_data['pages'] : '';
		$menus = isset( $demo_data['menus'] ) ? $demo_data['menus'] : '';

		if ( empty( $pages ) ) {
			$pages = array(
				'front_page' => 'Home',
				'blog'       => '',
			);
		}

		if ( empty( $menus ) ) {
			$menus = array( 'menu-1' => 'main-menu' );
		}

		$list_demo[] = array(
			'name'       => $demo_data['name'],
			'content'    => $penci_demo_url . $folder . '/demo-content.xml',
			'widgets'    => $penci_demo_url . $folder . '/widgets.wie',
			'preview'    => $penci_demo_url . $folder . '/preview.jpg',
			'customizer' => $penci_demo_url . $folder . '/customizer.dat',
			'options'    => $img_size,
			'pages'      => $pages,
			'menus'      => $menus,
		);
	}

	return $list_demo;
}

//add_action( 'pencidi_after_setup_pages', 'penci_addons_import_order_tracking' );

/**
 * Update more page options
 *
 * @param $pages
 */
function penci_addons_import_order_tracking( $pages ) {
	if ( isset( $pages['order_tracking'] ) ) {
		$order = get_page_by_title( $pages['order_tracking'] );

		if ( $order ) {
			update_option( 'sober_order_tracking_page_id', $order->ID );
		}
	}

	if ( isset( $pages['portfolio'] ) ) {
		$portfolio = get_page_by_title( $pages['portfolio'] );

		if ( $portfolio ) {
			update_option( 'sober_portfolio_page_id', $portfolio->ID );
		}
	}
}

//add_action( 'penci_before_import_content', 'penci_addons_import_order_tracking' );

/**
 * Prepare product attributes before import demo content
 *
 * @param $file
 */
function penci_addons_import_product_attributes( $file ) {
	global $wpdb;

	if ( ! class_exists( 'WXR_Parser' ) ) {
		require_once WP_PLUGIN_DIR . '/penci-demo-importer/includes/parsers.php';
	}

	$parser      = new WXR_Parser();
	$import_data = $parser->parse( $file );

	if ( isset( $import_data['posts'] ) ) {
		$posts = $import_data['posts'];

		if ( $posts && sizeof( $posts ) > 0 ) {
			foreach ( $posts as $post ) {
				if ( 'product' === $post['post_type'] ) {
					if ( ! empty( $post['terms'] ) ) {
						foreach ( $post['terms'] as $term ) {
							if ( strstr( $term['domain'], 'pa_' ) ) {
								if ( ! taxonomy_exists( $term['domain'] ) ) {
									$attribute_name = wc_sanitize_taxonomy_name( str_replace( 'pa_', '', $term['domain'] ) );

									// Create the taxonomy
									if ( ! in_array( $attribute_name, wc_get_attribute_taxonomies() ) ) {
										$attribute = array(
											'attribute_label'   => $attribute_name,
											'attribute_name'    => $attribute_name,
											'attribute_type'    => 'select',
											'attribute_orderby' => 'menu_order',
											'attribute_public'  => 0
										);
										$wpdb->insert( $wpdb->prefix . 'woocommerce_attribute_taxonomies', $attribute );
										delete_transient( 'wc_attribute_taxonomies' );
									}

									// Register the taxonomy now so that the import works!
									register_taxonomy(
										$term['domain'],
										apply_filters( 'woocommerce_taxonomy_objects_' . $term['domain'], array( 'product' ) ),
										apply_filters( 'woocommerce_taxonomy_args_' . $term['domain'], array(
											'hierarchical' => true,
											'show_ui'      => false,
											'query_var'    => true,
											'rewrite'      => false,
										) )
									);
								}
							}
						}
					}
				}
			}
		}
	}
}

