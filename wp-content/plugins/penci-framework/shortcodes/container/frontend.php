<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

Penci_Global_Blocks::set_is_container( true );
Penci_Global_Blocks::set_is_inner_container( false );


$el_class = $css = $el_id = $el_width = '';
$el_disable_sticky = $output = '';

$atts            = vc_map_get_attributes( $this->getShortcode(), $atts );
extract( $atts );

$el_class    = $this->getExtraClass( $el_class );

$css_classes = array(
	'penci-container-vc',
	$el_width,
	'penci-container' == $el_width ? 'penci-container-width-1080' : 'penci-container-width-1400',
 	$el_class,
	vc_shortcode_custom_css_class( $css )
);
if ( 'yes' !== $el_disable_sticky ) {
	$css_classes[] = 'penci_vc_sticky_sidebar';
}

if ( vc_shortcode_custom_css_has_property( $css, array( 'border', 'background', ) ) ) {
	$css_classes[] = 'vc_row-has-fill';
}

wp_enqueue_script( 'wpb_composer_front_js' );

/**
 * Explode shortcode  penci column inner
 */

if ( isset( $_GET['vc_editable'] ) && 'true' == $_GET['vc_editable'] ) {
	$container_layout = array_filter( explode( '_', $atts['container_layout'] . '_' ) );
	$explode_content = array_filter( explode( '[/penci_column]', $content . '[/penci_column]' ) );
	$count_col =  count( $container_layout );

	$layout_container = $layout_container_fluid = '';
	if ( $count_col == 3 ) {
		$first_col = isset( $container_layout[0] ) ? $container_layout[0] : '';
		$last_col  = isset( $container_layout[1] ) ? $container_layout[1] : '';
		$last2_col = isset( $container_layout[2] ) ? $container_layout[2] : '';

		if( '13' == $first_col && '13' == $last_col ) {
			$layout_container = $layout_container_fluid = 'penci-col-4';
		}elseif( '12' == $first_col && '14' == $last_col ) {
			$layout_container_fluid = 'two-sidebar';
			$css_classes[] = 'penci-vc_two-sidebar penci-vc_content-2sidebar';
		}elseif( '14' == $first_col && '12' == $last2_col ) {
			$layout_container_fluid = 'two-sidebar';
			$css_classes[] = 'penci-vc_two-sidebar penci-vc_2sidebar-content';
		}else{
			$layout_container_fluid = 'two-sidebar';
			$css_classes[] = 'penci-vc_two-sidebar';
		}
	} elseif ( $count_col > 1 ) {
		$first_col = isset( $container_layout[0] ) ? $container_layout[0] : '';
		$last_col  = isset( $container_layout[1] ) ? $container_layout[1] : '';


		if( '13' == $first_col ) {
			$css_classes[] = 'penci-vc_sidebar-left';
			$layout_container = $layout_container_fluid = 'sidebar-left';
		}elseif( '12' == $first_col && '12' == $last_col ) {
			$layout_container = $layout_container_fluid = 'penci-col-6';
		}elseif( '14' == $first_col && '14' == $last_col ) {
			$layout_container = $layout_container_fluid = 'penci-col-3';
		}else {
			$css_classes[] = 'penci-vc_sidebar-right';
			$layout_container = $layout_container_fluid = 'sidebar-right';
		}
	}else{
		$css_classes[] = 'penci-vc_one-column';
	}
}else{
	$explode_content = array_filter( explode( '[/penci_column]', $content . '[/penci_column]' ) );
	$count_col =  count( $explode_content );

	$layout_container = $layout_container_fluid = '';
	if ( $count_col == 3 ) {
		$first_col = isset( $explode_content[0] ) ? $explode_content[0] : '';
		$last_col  = isset( $explode_content[1] ) ? $explode_content[1] : '';
		$last2_col  = isset( $explode_content[2] ) ? $explode_content[2] : '';

		if ( false !== strpos( $first_col, '[penci_column width="1/3"' ) && false !== strpos( $last_col, '[penci_column width="1/3"' ) ) {
			$layout_container = $layout_container_fluid = 'penci-col-4';
		}elseif ( false !== strpos( $first_col, '[penci_column width="1/2"' ) && false !== strpos( $last_col, '[penci_column width="1/4"' ) ) {
			$layout_container = $layout_container_fluid = 'two-sidebar';
			$css_classes[] = 'penci-vc_two-sidebar penci-vc_content-2sidebar';
		}elseif ( false !== strpos( $first_col, '[penci_column width="1/4"' ) && false !== strpos( $last2_col, '[penci_column width="1/2"' ) ) {
			$layout_container = $layout_container_fluid = 'two-sidebar';
			$css_classes[] = 'penci-vc_two-sidebar penci-vc_2sidebar-content';
		}else{
			$layout_container = $layout_container_fluid = 'two-sidebar';
			$css_classes[] = 'penci-vc_two-sidebar';
		}

	} elseif ( $count_col > 1 ) {
		$first_col = isset( $explode_content[0] ) ? $explode_content[0] : '';
		$last_col  = isset( $explode_content[1] ) ? $explode_content[1] : '';


		if ( false !== strpos( $first_col, '[penci_column width="1/3"' ) ) {
			$css_classes[] = 'penci-vc_sidebar-left';
			$layout_container = $layout_container_fluid = 'sidebar-left';
		}else if ( false !== strpos( $first_col, '[penci_column width="1/2"' ) && false !== strpos( $last_col, '[penci_column width="1/2"' ) ) {
			$layout_container = $layout_container_fluid = 'penci-col-6';
		}else if ( false !== strpos( $first_col, '[penci_column width="1/4"' ) && false !== strpos( $last_col, '[penci_column width="1/4"' ) ) {
			$layout_container = $layout_container_fluid = 'penci-col-3';
		}else {
			$css_classes[] = 'penci-vc_sidebar-right';
			$layout_container = $layout_container_fluid = 'sidebar-right';
		}
	}else{
		$css_classes[] = 'penci-vc_one-column';
	}
}

// Render class content main
$class_container_main = '';
if ( 'penci-container' == $el_width ) {
	if ( 'sidebar-left' == $layout_container ) {
		$class_container_main = 'penci-wide-content';
	} elseif ( 'sidebar-right' == $layout_container ) {
		$class_container_main = 'penci-wide-content';
	}  elseif ( 'two-sidebar' == $layout_container_fluid ) {
		$class_container_main = 'penci-wide-content';
	}elseif ( 'penci-col-6' == $layout_container ) {
		$class_container_main = 'penci-col-6';
	}elseif ( 'penci-col-3' == $layout_container ) {
		$class_container_main = 'penci-col-3';
	}elseif ( 'penci-col-4' == $layout_container ) {
		$class_container_main = 'penci-col-4';
	}
} elseif ( 'penci-container-fluid' == $el_width ) {
	if ( 'sidebar-left' == $layout_container_fluid ) {
		$class_container_main = 'penci-container penci-sidebar-left';
	} elseif ( 'sidebar-right' == $layout_container_fluid ) {
		$class_container_main = 'penci-container penci-sidebar-right';
	} elseif ( 'two-sidebar' == $layout_container_fluid ) {
		$class_container_main = 'penci-wide-content';
	}elseif ( 'penci-col-6' == $layout_container_fluid ) {
		$class_container_main = 'penci-col-6';
	}elseif ( 'penci-col-3' == $layout_container_fluid ) {
		$class_container_main = 'penci-col-3';
	}elseif ( 'penci-col-4' == $layout_container_fluid ) {
		$class_container_main = 'penci-col-4';
	}
}

// Move shortcode content main to the end
foreach ( $explode_content as $k => $column_inner ) {
	if ( false !== strpos( $column_inner, '[penci_column width="1/2"' ) || false !== strpos( $column_inner, '[penci_column width="2/3"' ) ) {

		$item_move = $explode_content[ $k ];
		unset( $explode_content[ $k ] );
		array_unshift( $explode_content, $item_move );
		break;
	}
}

// Fix shortcode
foreach ( $explode_content as $k => $column_inner ) {

	$pre_column_inner = $column_inner;

	if ( false !== strpos( $column_inner, '[penci_column width="1/2"' ) ) {
		$pre_column_inner = str_replace( '[penci_column width="1/2"', '[penci_column width="1/2" class_layout="' . $class_container_main . '" ', $column_inner );
	}

	if ( false !== strpos( $column_inner, '[penci_column width="2/3"' ) ) {
		$pre_column_inner = str_replace( '[penci_column width="2/3"', '[penci_column width="2/3" class_layout="' . $class_container_main . '"', $column_inner );
	}

	if ( false !== strpos( $column_inner, '[penci_column width="1/4"' ) ) {
		$pre_column_inner = str_replace( '[penci_column width="1/4"', '[penci_column width="1/4" class_layout="' . $class_container_main . '" ', $column_inner );
	}
	if ( false !== strpos( $column_inner, '[penci_column width="1/3"' ) ) {
		$pre_column_inner = str_replace( '[penci_column width="1/3"', '[penci_column width="1/3" class_layout="' . $class_container_main . '" ', $column_inner );
	}

	if ( $count_col == 3 && false !== strpos( $column_inner, '[penci_column width="1/4"' ) ) {
		$pre_column_inner = str_replace( '[penci_column', '[penci_column class_layout="' . ( 1 == $k ? 'widget-area-2' : 'widget-area-1' ) . '"', $column_inner );
	} elseif ( $count_col == 2 && false !== strpos( $column_inner, '[penci_column width="1/3"' ) ) {
		$pre_column_inner = str_replace( '[penci_column', '[penci_column class_layout="widget-area-1"', $column_inner );
	}

	if ( false === strpos( $column_inner, '[/penci_column]' ) ) {
		$pre_column_inner .= '[/penci_column]';
	}

	$explode_content[ $k ] = $pre_column_inner;
}

if ( isset( $_GET['vc_editable'] ) && 'true' == $_GET['vc_editable'] ) {
	$explode_content = $content;
}else{
	$explode_content = implode( '', array_filter( $explode_content ) );
}

// Build attributes for wrapper
$el_id = ! empty( $el_id ) ? 'id="' . esc_attr( $el_id ) . '"' : '';
$wrapper_class = 'class="' . implode( ' ', array_filter( array_unique( $css_classes ) ) ) . '"';

$class_row = '';

if( in_array( $class_container_main, array( 'penci-col-6','penci-col-4','penci-col-3' ) ) ) {
	$class_row = ' row';
}

$output .= '<div ' . $el_id . $wrapper_class . '>';
$output .= '<div class="penci-container__content' . $class_row . '">';
$output .= wpb_js_remove_wpautop( $explode_content );
$output .= '</div>';
$output .= '</div>';

echo $output;
