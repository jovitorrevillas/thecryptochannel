<div class="site-branding">
	<?php if( penci_get_setting( 'penci_use_textlogo' ) && penci_get_setting( 'penci_text_logo' ) ) : ?>
		<?php if ( is_front_page() ) : ?>
		<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" itemprop="url"><?php echo penci_get_setting( 'penci_text_logo' ); ?></a></h1>
		<?php else : ?>
		<div class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" itemprop="url"><?php echo penci_get_setting( 'penci_text_logo' ); ?></a></div>
		<?php endif; ?>
	<?php elseif ( function_exists( 'the_custom_logo' ) && has_custom_logo() ) : ?>
		<?php the_custom_logo(); ?>
	<?php endif; ?>
	<?php
	$description = penci_get_setting( 'penci_header_slogan_text' );
	if ( $description ) : ?>
		<span class="site-description"><?php echo esc_html( $description ); ?></span>
	<?php endif; ?>
</div><!-- .site-branding -->
