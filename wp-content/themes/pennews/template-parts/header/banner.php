<?php
$header_img = penci_get_setting( 'penci_header_img' );
$header_img_link = penci_get_setting( 'penci_header_img_link' );
if( empty( $header_img ) ) {
	return;
}
?>
<div class="header__banner" itemscope="" itemtype="https://schema.org/WPAdBlock" data-type="image">
	<a href="<?php echo ( $header_img_link ? esc_url( $header_img_link ) : '#' ); ?>" target="_blank" itemprop="url">
		<img src="<?php echo esc_url( $header_img ); ?>" alt="<?php esc_html_e( 'Banner','pennews' ); ?>">
	</a>
</div>