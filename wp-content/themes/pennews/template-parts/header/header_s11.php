<?php $class_header_width = penci_get_class_header_width( false ); ?>
<header id="masthead" class="site-header header--s11" data-height="<?php echo penci_get_data_height_nav(); ?>" <?php penci_get_schema_header(); ?>>
	<?php if( $class_header_width && 'penci-container-full' != $class_header_width ): ?><div class="<?php penci_get_class_header_width(); ?>"><?php endif; ?>
	<?php get_template_part( 'template-parts/header/logo' ); ?>
	<?php get_template_part( 'template-parts/header/cart_search_social' ); ?>
	<?php get_template_part( 'template-parts/header/menu' ); ?>
	<?php if( $class_header_width && 'penci-container-full' != $class_header_width ): ?></div><?php endif; ?>
</header><!-- #masthead -->
