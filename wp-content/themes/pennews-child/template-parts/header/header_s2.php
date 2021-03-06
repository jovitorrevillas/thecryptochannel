<div class="header__top header--s2">
	<div class="<?php echo penci_get_class_header_width(); ?> header-top__container">
		<?php get_template_part( 'template-parts/header/logo' ); ?>
		<div style="display: flex; flex-direction: row;">
			<?php echo do_shortcode('[ccpw id="500"]'); ?>
			<?php echo do_shortcode('[ccpw id="698"]'); ?>
		</div>
	</div>
</div>
<header id="masthead" class="site-header header--s2" data-height="<?php echo penci_get_data_height_nav(); ?>" <?php penci_get_schema_header(); ?>>
	<div class="<?php echo penci_get_class_header_width(); ?> header-content__container">
		<?php get_template_part( 'template-parts/header/menu' ); ?>
		<?php get_template_part( 'template-parts/header/cart_search_social' ); ?>
	</div>
</header><!-- #masthead -->

<?php if(is_singular('cryptopedia')): ?>
<style>
	.embed-responsive{
		height: inherit !important;
	}
	.embed-responsive-16by9{
		padding-bottom: 0 !important;
	}
</style>
<?php endif; ?>