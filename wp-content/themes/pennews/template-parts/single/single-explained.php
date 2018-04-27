<?php

$single_style    = penci_get_setting( 'penci_single_template' );
$single_hide_img = penci_get_setting( 'penci_hide_single_featured_img' );
$align_title     = 'penci-title-' . penci_get_setting( 'penci_single_align_post_title' );
$single_loadmore = penci_get_setting( 'penci_auto_load_prev_post' );
?>


	<header class="entry-header penci-entry-header <?php echo esc_attr( $align_title ); ?>">
									<?php
									if ( ! penci_get_setting( 'penci_hide_single_category' ) ) {
										echo '<div class="penci-entry-categories">';
										penci_get_categories();
										echo '</div>';
									}
									the_title( '<h2 class="entry-title penci-entry-title ' . $align_title . '">', '</h2>' );
									?>

									<div class="entry-meta penci-entry-meta">
										<?php penci_posted_on(); ?>
									</div><!-- .entry-meta -->
									<?php
									if ( ! penci_get_setting( 'penci_hide_single_social_share_top' ) ) {
										get_template_part( 'template-parts/social-share' );
									}
									?>
								</header><!-- .entry-header -->

<!-- Featured Image  -->
<?php while ( have_posts() ) : the_post(); ?>
	<div class="entry-media penci-entry-media">
		<?php if ( penci_post_formats() && ! $single_hide_img ): ?>
			<?php penci_post_formats( 'penci-thumb-1920-auto', true, true ); ?>
		<?php endif; ?>
	</div>
<?php endwhile;  ?>
<!-- End of Featured Image  -->


	<div class="penci-container<?php echo ( 'style-5' == $single_style && ( $single_hide_img || ! has_post_thumbnail()  ) ? ' penci-single-s5-nofimg' : '' ) ?>">
		<div class="penci-container__content">
			
			<aside class="widget-area widget-area-2 penci-sticky-sidebar penci-sidebar-widgets">
				<?php dynamic_sidebar( 'crypto_widget' ); ?>
			</aside>
			
			
			<div class="penci-wide-content penci-sticky-content penci-content-single-inner" >
				<div style="background:none;" class="penci-content-post <?php echo esc_attr( ! $single_hide_img && penci_post_formats() ? '' : 'hide_featured_image' ); ?>">
					<?php
					while ( have_posts() ) : the_post();

						if ( ! penci_get_setting( 'penci_hide_single_breadcrumb' ) && 'style-5' != $single_style ) : penci_breadcrumbs( ); endif;
						?>
						<article   id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
							<?php if ( 'style-5' != $single_style || ( 'style-5' == $single_style && ( $single_hide_img || ! has_post_thumbnail()  ) ) ): ?>
							
							<?php else:
								if ( ! penci_get_setting( 'penci_hide_single_social_share_top' ) ) {
									get_template_part( 'template-parts/social-share' );
								}
							endif;
							?>
							<div class="penci-entry-content entry-content" >
								<?php
								the_content( sprintf(
									wp_kses( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'pennews' ), array( 'span' => array( 'class' => array() ) ) ),
									the_title( '<span class="screen-reader-text">"', '"</span>', false )
								) );

								wp_link_pages( array( 'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'pennews' ), 'after' => '</div>', ) );
								?>
							</div><!-- .entry-content -->

							<footer class="penci-entry-footer">
							Disclaimer. Cointelegraph does not endorse any content or product on this page. While we aim at providing you all important information that we could obtain, readers should do their own research before taking any actions related to the company and carry full responsibility for their decisions, nor this article can be considered as an investment advice.
							</footer><!-- .entry-footer -->
						</article>
						<?php

						get_template_part( 'template-parts/post_pagination' );
						get_template_part( 'template-parts/author-box' );
						get_template_part( 'template-parts/related_posts' );
						get_template_part( 'template-parts/comment-box' );

					endwhile; // End of the loop.
					?>
				</div>

				<?php //get_template_part( 'template-parts/animation-loadpost' ); ?>
			</div>
			
		</div>

	</div>
<?php
