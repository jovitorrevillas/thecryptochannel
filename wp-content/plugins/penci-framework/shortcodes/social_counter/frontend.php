<?php
$atts = vc_map_get_attributes( $this->getShortcode(), $atts );

$unique_id = 'penci-social-counter--' . rand( 1000, 100000 );

$class = Penci_Framework_Helper::get_class_block( array( $this->getCSSAnimation( $atts['css_animation'] ), 'penci-social-counter--' . $atts['style_counter'] ), $atts );
?>
	<div id="<?php echo esc_attr( $unique_id ); ?>" class="penci-block-vc penci-social-counter <?php echo esc_attr( implode( $class, ' ' ) ); ?>">
		<div class="penci-block-heading">
			<?php Penci_Helper_Shortcode::get_block_title( $atts ); ?>
		</div>
		<div class="penci-block_content">
			<?php
			$output = '';

			$penci_social_api = new Penci_Framework_Social_Api();
			$list_socails     = function_exists( 'penci_get_list_social_media' ) ? penci_get_list_social_media() : array();

			$target = ( ! empty( $atts['open_in_new_window'] ) ) ? ' target="_blank"' : '';

			$icon_like   = '<i class="fa fa-thumbs-o-up"></i>';
			$icon_follow = '<i class="fa fa-user-plus"></i>';

			foreach ( $list_socails as $social_id => $social_name ) {

				if ( empty( $atts[ $social_id ] ) ) {
					continue;
				}

				$user_id = isset( $atts[ $social_id ] ) ? $atts[ $social_id ] : '';
				
				switch ( $social_id ) {
					case 'facebook':
						$social_network_meta = array(
							'button' => $icon_like . esc_html__( 'Like', 'penci-framework' ),
							'url'    => "https://www.facebook.com/$user_id",
							'text'   => esc_html__( 'Fans', 'penci-framework' ),
							'api'    => $penci_social_api->get_social_counter( $social_id,$user_id, $atts ),
						);
						break;

					case 'twitter':
						$social_network_meta = array(
							'button' => $icon_follow . esc_html__( 'Follow', 'penci-framework' ),
							'url'    => "https://twitter.com/$user_id",
							'text'   => esc_html__( 'Followers', 'penci-framework' ),
							'api'    => $penci_social_api->get_social_counter( $social_id,$user_id, $atts ),
						);
						break;

					case 'vimeo':
						$social_network_meta = array(
							'button' => $icon_like . esc_html__( 'Like', 'penci-framework' ),
							'url'    => "http://vimeo.com/$user_id",
							'text'   => esc_html__( 'Followers','penci-framework' ),
							'api'    => $penci_social_api->get_social_counter( $social_id,$user_id, $atts ),
						);
						break;

					case 'youtube':
						$social_network_meta = array(
							'button' => $icon_follow . esc_html__( 'Subscribe', 'penci-framework' ),
							'url'    => ( strpos( 'channel/', $user_id ) >= 0 ) ? "http://www.youtube.com/$user_id" : "http://www.youtube.com/user/$user_id",
							'text'   => esc_html__( 'Followers','penci-framework' ),
							'api'    => $penci_social_api->get_social_counter( $social_id,$user_id, $atts ),
						);
						break;

					case 'google':
						$social_network_meta = array(
							'button' => $icon_follow . esc_html__( 'Follow', 'penci-framework' ),
							'url'    => "https://plus.google.com/$user_id",
							'text'   => esc_html__( 'Followers','penci-framework' ),
							'api'    => $penci_social_api->get_social_counter( $social_id,$user_id, $atts ),
						);
						break;

					case 'instagram':
						$social_network_meta = array(
							'button' => $icon_follow . esc_html__( 'Follow', 'penci-framework' ),
							'url'    => "http://instagram.com/$user_id",
							'text'   => esc_html__( 'Followers','penci-framework' ),
							'api'    => $penci_social_api->get_social_counter( $social_id,$user_id, $atts ),
						);
						break;
					case 'pinterest':
						$social_network_meta = array(
							'button' => $icon_follow . esc_html__( 'Follow', 'penci-framework' ),
							'url'    => "https://www.pinterest.com/$user_id",
							'text'   => esc_html__( 'Followers','penci-framework' ),
							'api'    => $penci_social_api->get_social_counter( $social_id,$user_id, $atts ),
						);
						break;

					case 'soundcloud':
						$social_network_meta = array(
							'button' => $icon_follow . esc_html__( 'Follow', 'penci-framework' ),
							'url'    => "https://soundcloud.com/$user_id",
							'text'   => esc_html__( 'Followers','penci-framework' ),
							'api'    => $penci_social_api->get_social_counter( $social_id,$user_id, $atts ),
						);
						break;
					case 'github':
						$social_network_meta = array(
							'button' => $icon_follow . esc_html__( 'Follow', 'penci-framework' ),
							'url'    => "https://github.com/$user_id",
							'text'   => esc_html__( 'Followers','penci-framework' ),
							'api'    => $penci_social_api->get_social_counter( $social_id,$user_id, $atts ),
						);
						break;

					case 'rss':
						$social_network_meta = array(
							'button' => $icon_follow . esc_html__( 'Follow', 'penci-framework' ),
							'url'    => get_bloginfo( 'rss2_url' ),
							'text'   => esc_html__( 'Followers', 'penci-framework' ),
							'api'    => $penci_social_api->get_social_counter( $social_id,$user_id, $atts ),
						);
						break;
					default:
						$social_network_meta = array(
							'button' => $icon_follow . esc_html__( 'Follow', 'penci-framework' ),
							'url'    => $atts[ $social_id ],
							'text'   => esc_html__( 'Followers', 'penci-framework' ),
							'api'    => 0,
						);
						break;

				}

				$output .= '<div class="penci-social__item penci-social__' . $social_id . '">';
				$output .= '<div class="penci-social__content">';
				$output .= '<a href="' . $social_network_meta['url'] . '"' . $target . '>';

				$social_icon = $social_id;
				if ( 'email_me' == $social_id ) {
					$social_icon = 'envelope';
				} elseif ( 'bloglovin' == $social_id ) {
					$social_icon = 'heart';
				} elseif ( 'youtube' == $social_id ) {
					$social_icon = 'youtube-play';
				} elseif ( 'google' == $social_id ) {
					$social_icon = 'google-plus';
				};

				if ( 'style-1' == $atts['style_counter'] ) {
					$output .= '<i class="fa fa-' . $social_icon . '"></i>';
					$output .= '<span class="penci-social__name">' . $social_name . '</span>';
					$output .= '<span class="penci-social__button">' . $social_network_meta['button'] . '</span>';
				} elseif ( 'style-2' == $atts['style_counter'] ) {
					$output .= '<i class="fa fa-' . $social_icon . '"></i>';
				} elseif ( 'style-6' == $atts['style_counter'] ) {
					$output .= '<i class="fa fa-' . $social_icon . '"></i>';
					$output .= '<span class="penci-social__name">' . $social_name . '</span>';
				}else {
					$output .= '<i class="fa fa-' . $social_icon . '"></i>';
					$output .= '<span class="penci-social__number">' . number_format($social_network_meta['api'] ? $social_network_meta['api']  : 0 ) . '</span>';
					$output .= '<span class="penci-social__info-text">' . $social_network_meta['text'] . '</span>';
				}

				$output .= '</a>';
				$output .= '</div>';
				$output .= '</div>';
			}

			echo $output;
			?>
		</div>
	</div>
<?php
$is_widget = Penci_Helper_Shortcode::check_blockvc_is_widget( $atts );
$id_social_block = '#' . $unique_id;
$css_custom      = Penci_Helper_Shortcode::get_general_css_custom( $id_social_block , $atts );

if ( $atts['icon_font_size'] ) {
	$css_custom .= sprintf( '%s .penci-social__item .fa{ font-size:%s; }', $id_social_block , $atts['icon_font_size'] );
}

if ( $atts['background_social_color'] ) {
	$css_custom .= sprintf( '%s .penci-social__content{ background-color:%s; }', $id_social_block , $atts['background_social_color'] );
	$css_custom .= sprintf( '%s .penci-social__instagram .penci-social__content:before{ opacity: 0; }', $id_social_block );


}

if ( $atts['background_social_hcolor'] ) {
	$css_custom .= sprintf( '%s .penci-social__content:hover{ background-color:%s; }', $id_social_block , $atts['background_social_hcolor'] );
	$css_custom .= sprintf( '%s .penci-social__instagram .penci-social__content:hover:before{ opacity: 1 }', $id_social_block );

}

if ( $atts['item_text_color'] ) {
 $css_custom .= sprintf( '%s a,%s .penci-social__number,%s .penci-social__info-text{ color:%s; }',
  $id_social_block , $id_social_block , $id_social_block , $atts['item_text_color'], $atts['item_text_color'], $atts['item_text_color'] );
}

if ( $atts['item_text_hover_color'] ) {
 $css_custom .= sprintf( '%s a:hover,%s a:hover .penci-social__number,%s a:hover .penci-social__info-text{ color:%s; }',
	$id_social_block,
	$id_social_block,
	$id_social_block,
	$atts['item_text_hover_color'],
	$atts['item_text_hover_color'],
	$atts['item_text_hover_color'] 
  ); 
}

$css_custom .= Penci_Helper_Shortcode::get_typo_css_custom( array(
		'e_admin'      => 'block_title',
		'font-size'    => '18px',
		'google_fonts' => Penci_Helper_Shortcode::get_font_family( 'oswald', $is_widget ),
		'template'     => $id_social_block  . ( $atts['style_block_title'] ? '.' . $atts['style_block_title'] : '' ) . ' .penci-block__title{ %s }',
	), $atts
);

$css_custom .= Penci_Helper_Shortcode::get_typo_css_custom( array(
		'e_admin'      => 'social_item',
		'font-size'    => '',
		'google_fonts' => Penci_Helper_Shortcode::get_font_family( 'roboto', $is_widget ),
		'template' => $id_social_block  . ' a,' . $id_social_block  . ' .penci-social__number,' . $id_social_block  . ' .penci-social__info-text,' . $id_social_block  . ' .penci-social__item .penci-social__button,' . $id_social_block  . '.penci-social-counter--style-6 .penci-social__name { %s }' ,
	), $atts
);

if ( $css_custom ) {
	echo '<style>';
	echo $css_custom ;
	echo '</style>';
}
