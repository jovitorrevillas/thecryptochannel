<?php
/**
 * Callback for new param 'penci_number'.
 *
 * @param array $settings
 * @param string $value
 *
 * @return string
 */
function penci_vc_param_number( $settings, $value ) {

	$units = array( 'px', 'em', 'rem', '%' );

	$input = '';
	$unit  = '';

	if ( preg_match( '/(\d*)(px|em|rem|%)/', $value, $matches ) ) {
		$input = $matches[1];
		$unit  = $matches[2];
	}

	$output = '<div class="penci-number">';

	// Hidden input
	$output .= sprintf(
		'<input type="hidden" class="wpb_vc_param_value" name="%s" value="%s">',
		esc_attr( $settings['param_name'] ),
		esc_attr( $value )
	);

	// Input and units
	$output .= sprintf( '<input type="number" class="penci-number-input" value="%s">', esc_attr( $input ) );
	$output .= '<select class="penci-number-suffix">';
	foreach ( $units as $v ) {
		$output .= '<option value="' . esc_attr( $v ) . '" ' . selected( $v, $unit, false ) . '>' . esc_html( $v ) . '</option>';
	}
	$output .= '</select>';
	$output .= '</div>';

	return $output;
}