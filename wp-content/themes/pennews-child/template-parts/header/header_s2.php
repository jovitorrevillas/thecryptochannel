<div class="header__top header--s2">
	<div class="<?php echo penci_get_class_header_width(); ?> header-top__container">
		<?php get_template_part( 'template-parts/header/logo' ); ?>
		<div>
			<?php echo do_shortcode('[ccpw id="500"]'); ?>
		</div>
	</div>
</div>
<header id="masthead" class="site-header header--s2" data-height="<?php echo penci_get_data_height_nav(); ?>" <?php penci_get_schema_header(); ?>>
	<div class="<?php echo penci_get_class_header_width(); ?> header-content__container">
		<?php get_template_part( 'template-parts/header/menu' ); ?>
		<?php get_template_part( 'template-parts/header/cart_search_social' ); ?>
	</div>
</header><!-- #masthead -->