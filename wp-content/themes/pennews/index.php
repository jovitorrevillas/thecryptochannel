<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package PenNews
 */
get_header(); ?>

	<div id="primary" class="content-area penci-archive">
		<main id="main" class="site-main" >
			<div class="penci-container">
				<div class="penci-container__content">
					<div class="penci-wide-content penci-sticky-content">
						<div  id="penci-archive__content" class="penci-archive__content ">
							<?php
							$hide_title      = get_theme_mod( 'penci_hide_archive_title' );
							$align_title     = get_theme_mod( 'penci_archive_align_post_title' );
							$hide_breadcrumb = get_theme_mod( 'penci_hide_archive_breadcrumb' );
							?>
							<?php if( ! $hide_breadcrumb ) : penci_breadcrumbs( $args = '' );  endif; ?>
							<?php penci_render_google_adsense( 'penci_archive_ad_above' ); ?>
							<div class="penci-archive__list_posts">
							<?php
							if ( have_posts() ) :

								$post_i = 1;
								while ( have_posts() ) : the_post();
									get_template_part( 'template-parts/content', 'home' );

									penci_get_markup_infeed_ad( array(
										'order_ad'   => penci_get_setting( 'penci_archive_infeedad_order' ),
										'order_post' => $post_i,
										'code'       => get_theme_mod( 'penci_archive_infeedad_code' ),
										'echo'       => true
									) );

									$post_i ++;
								endwhile;
							else :
								get_template_part( 'template-parts/content', 'none' );
							endif;
							?>
							</div>
							<?php
							penci_posts_pagination();
							penci_render_google_adsense( 'penci_archive_ad_below' );
							?>
						</div>
					</div>
					<?php get_sidebar( 'second' ); ?>
					<?php get_sidebar(); ?>
				</div>
			</div>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();

