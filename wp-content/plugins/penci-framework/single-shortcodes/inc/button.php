<?php
/**
 * Show button shortcode
 *
 * @param array  $atts
 * @param string $content
 *
 * @return string
 */
if ( ! function_exists( 'penci_button_shortcode' ) ) {
	function penci_button_shortcode( $atts, $content )
	{
		$atts = shortcode_atts( array(
			'link'          => '#',
			'color'         => '',
			'size'          => '',
			'icon'          => '',
			'icon_position' => '',

			'id'               => '',
			'nofollow'         => '',
			'background'       => '',
			'text_color'       => '',
			'target'           => '',
			'align'            => '',
			'full'             => '',
			'class'            => '',
			'margin_bottom'    => '',
		), $atts, 'button' );

		extract( $atts );

		$classes = array( 'pencisc-button', 'button' );
		if ( $full )
			$classes[] = 'pencisc-full';
		if ( $class )
			$classes[] = $class;
		if ( 'right' == $icon_position )
			$classes[] = 'pencisc-icon-right';
		if ( $color )
			$classes[] = "pencisc-background-$color";
		if ( $align )
			$classes[] = "pencisc-align-$align";
		if ( $size )
			$classes[] = "pencisc-$size";
		$classes = implode( ' ', $classes );
		$style = '';
		if ( $background )
			$style .= "background:$background;";
		if ( $text_color )
			$style .= "color:$text_color;";

		if ( $margin_bottom || 0 == $margin_bottom ) {
			$style .= "margin-bottom:$margin_bottom;";
		}

		$content = do_shortcode( $content );

		$html = "<a href='$link' class='$classes'" .
		        ( $id ? " id='$id'" : '' ) .
		        ( $nofollow ? " rel='nofollow'" : '' ) .
		        ( $target ? " target='$target'" : '' ) .
		        ( $style ? " style='$style'" : '' ) .
		        '>';
		if ( $icon )
		{
			$icon = '<i class="' . $icon . '"></i>';
			$content = $icon_position == 'right' ? ( $content . $icon ) : ( $icon . $content );
		}
		$html .= $content . '</a>';
		if ( $align == 'center' )
			$html = '<div style="text-align:center">' . $html . '</div>';

		return apply_filters( 'pencisc_shortcode_button', $html, $atts, $content );
	}
}