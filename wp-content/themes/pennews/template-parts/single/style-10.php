<?php
$single_hide_img = penci_get_setting( 'penci_hide_single_featured_img' );
$align_title     = 'penci-title-' . penci_get_setting( 'penci_single_align_post_title' );
?>

<?php while ( have_posts() ) : the_post(); ?>
	<?php if ( penci_post_formats() && ! $single_hide_img ): ?>
		<div class="entry-media penci-entry-media">
			<div class="penci-container">
				<?php if ( ! penci_get_setting( 'penci_hide_single_breadcrumb' ) ) : penci_breadcrumbs( ); endif; ?>
				<div class="penci_media_object">
					<div class="penci-post-header penci-featured-col-1">
						<div class="entry-media__content ">
							<div class="entry-header penci-entry-header penci-entry-header-top <?php echo esc_attr( $align_title ); ?>">
								<?php
								if ( ! penci_get_setting( 'penci_hide_single_category' ) ) {
									echo '<div class="penci-entry-categories">';
									penci_get_categories();
									echo '</div>';
								}

								the_title( '<h1 class="entry-title penci-entry-title">', '</h1>' );
								?>

								<div class="entry-meta penci-entry-meta">
									<?php penci_posted_on(); ?>
								</div><!-- .entry-meta -->
							</div>
						</div>
						<div class="penci-ad-box">
							<?php
								$header_ad_box         = get_theme_mod( 'penci_single_header_ad_box' );
								$use_option_current    = get_post_meta( get_the_ID(), 'penci_use_option_current_single', true );
								$pre_header_ad_box     = get_post_meta( get_the_ID(), 'pre_ad_code_s10', true );

								if( $use_option_current && $pre_header_ad_box ) {
									$header_ad_box = $pre_header_ad_box ;
								}
							?>
							<?php echo ( $header_ad_box ); ?>
						</div>
					</div>
					<div class="penci-featured-col-2 penci_mobj__body">
						<?php penci_post_formats( 'penci-thumb-1920-auto', true ); ?>
					</div>
				</div>
			</div>
		</div>
	<?php endif; ?>
<?php endwhile; ?>
<div class="penci-container">
	<div class="penci-container__content <?php echo esc_attr( ! $single_hide_img && penci_post_formats() ? '' : 'hide_featured_image' ); ?>">
		<div class="penci-wide-content penci-sticky-content penci-content-single-inner">
			<div class="penci-content-post">
				<?php
				while ( have_posts() ) : the_post();
					?>
					<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
						<?php if ( $single_hide_img || ! has_post_thumbnail() ): ?>
							<header class="entry-header penci-entry-header <?php echo esc_attr( $align_title ); ?>">
								<?php
								if ( ! penci_get_setting( 'penci_hide_single_category' ) ) {
									echo '<div class="penci-entry-categories">';
									penci_get_categories();
									echo '</div>';
								}
								the_title( '<h1 class="entry-title penci-entry-title">', '</h1>' );
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
						<?php else:
							if ( ! penci_get_setting( 'penci_hide_single_social_share_top' ) ) {
								get_template_part( 'template-parts/social-share' );
							}
						endif;?>
						<div class="penci-entry-content entry-content">
							<?php
							the_content( sprintf(
								wp_kses( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'pennews' ), array( 'span' => array( 'class' => array() ) ) ),
								the_title( '<span class="screen-reader-text">"', '"</span>', false )
							) );

							wp_link_pages( array( 'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'pennews' ), 'after' => '</div>', ) );
							?>
						</div><!-- .entry-content -->

						<footer class="penci-entry-footer">
							<?php
							penci_entry_footer();
							if ( ! penci_get_setting( 'penci_hide_single_tag' ) ): penci_get_tags(); endif;

							if ( ! penci_get_setting( 'penci_hide_single_social_share_bottom' ) ) {
								get_template_part( 'template-parts/social-share' );
							}
							?>
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
			<?php get_template_part( 'template-parts/animation-loadpost' ); ?>

		</div>
		<?php get_sidebar( 'second' ); ?>
		<?php get_sidebar(); ?>
	</div>

</div>

