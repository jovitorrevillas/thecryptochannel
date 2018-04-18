<div class="header__top header--s6">
	<div class="<?php penci_get_class_header_width( ); ?>">
		<?php get_template_part( 'template-parts/header/logo' ); ?>
	</div>
</div>
<header id="masthead" class="site-header site-header__main header--s6" data-height="<?php echo penci_get_data_height_nav(); ?>" <?php penci_get_schema_header(); ?>>
	<div class="<?php penci_get_class_header_width( ); ?> header-content__container">
		<?php get_template_part( 'template-parts/header/menu' ); ?>
		<?php if ( ! penci_get_setting( 'penci_hide_header_search' ) ): ?>

			<div class="header__search header__search_dis_bg" id="top-search">
				<a class="search-click"><i class="fa fa-search"></i></a>
				<?php get_template_part( 'template-parts/header/search-form' ); ?>
			</div>

		<?php endif; ?>
	</div>
</header><!-- #masthead -->