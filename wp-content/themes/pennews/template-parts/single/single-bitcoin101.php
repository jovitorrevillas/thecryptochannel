<?php

$single_style    = penci_get_setting( 'penci_single_template' );
$single_hide_img = penci_get_setting( 'penci_hide_single_featured_img' );
$align_title     = 'penci-title-' . penci_get_setting( 'penci_single_align_post_title' );
$single_loadmore = penci_get_setting( 'penci_auto_load_prev_post' );
?>

<style>
	h4.penci-block__title{
		cursor: pointer;
		color: #fff!important;
		font-size: 25px;
		line-height: 34px;
		display: block;
		height: 56px;
		background-color: #253137;
		padding: 11px 18px;
	}
	h4.penci-block__title_section{
		cursor: pointer;
		color: #fff!important;
		font-size: 25px;
		line-height: 34px;
		display: block;
		height: 56px;
		background-color: #253137;
		padding: 11px 18px;
	}
	.widget-area li{
		list-style-type: none;
	}
	.post-title-sidebar-not{
		color: black;
		padding: 15px 18px 15px 20px;
		font-weight: 700;
		font-size: 16px;
		margin-top: -10px;
	}
	.post-title-sidebar-not:hover{
		color: black;
		padding: 15px 18px;
		border-left: 2px solid #ffcd09;
		font-weight: 700;
		font-size: 16px;
		background-color: #eceff1;
		margin-top: -10px;
	}
	aside a:hover{
		text-decoration: none;
	}
	@media all and (max-width: 960px){
		.widget-area{
			display: none;
		}
	}
</style>

<?php while ( have_posts() ) : the_post(); ?>
	<div class="entry-media penci-entry-media">
		<?php if ( penci_post_formats() && ! $single_hide_img ): ?>
			<?php penci_post_formats( 'penci-thumb-1920-auto', true, true ); ?>
		<?php endif; ?>
	</div>
<?php endwhile;  ?>

	<div class="penci-container<?php echo ( 'style-5' == $single_style && ( $single_hide_img || ! has_post_thumbnail()  ) ? ' penci-single-s5-nofimg' : '' ) ?>">
		<div class="penci-container__content">
			<div class="penci-wide-content penci-sticky-content penci-content-single-inner">
				<div class="penci-content-post <?php echo esc_attr( ! $single_hide_img && penci_post_formats() ? '' : 'hide_featured_image' ); ?>">
					<?php
					while ( have_posts() ) : the_post();

						if ( ! penci_get_setting( 'penci_hide_single_breadcrumb' ) && 'style-5' != $single_style ) : penci_breadcrumbs( ); endif;
						?>
						<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
							<?php if ( 'style-5' != $single_style || ( 'style-5' == $single_style && ( $single_hide_img || ! has_post_thumbnail()  ) ) ): ?>
								<header class="entry-header penci-entry-header <?php echo esc_attr( $align_title ); ?>">
									<?php
									if ( ! penci_get_setting( 'penci_hide_single_category' ) ) {
										echo '<div class="penci-entry-categories">';
										penci_get_categories();
										echo '</div>';
									}
									the_title( '<h1 class="entry-title penci-entry-title ' . $align_title . '">', '</h1>' );
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
							endif;
							?>
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

				<?php //get_template_part( 'template-parts/animation-loadpost' ); ?>
			</div>
			<aside class="widget-area widget-area-2 penci-sticky-sidebar penci-sidebar-widgets">
				<h4 class="penci-block__title_section" style="cursor: pointer;">Section Contents</h4>
				<div class="custom-html-widget">
					<?php
					$current_id = $post->ID;
					$terms = get_the_terms( $post->ID, 'cryptopedia_tax' );
					$term = array_shift( $terms );
					$paramet = array(
					'post_type'   => 'cryptopedia',
					'tax_query'   => array(
						array(
							'taxonomy' => 'cryptopedia_tax',
							'field'    => 'slug',
							'terms'    => $term->slug
						)
					),
					'orderby' => 'date',
					'order' => 'ASC',
					'posts_per_page' => -1
						
				);
				$custom_titles = new WP_Query($paramet);
				if( $custom_titles->have_posts() ) :

				while( $custom_titles->have_posts() ) :
					$custom_titles->the_post();
				?>
					<?php if($current_id == $post->ID):?>
					<a href="<?php echo get_permalink(); ?>"><div class="post-title-sidebar"><?php echo get_the_title(); ?></div></a>
					<?php else: ?>
					<a href="<?php echo get_permalink(); ?>"><div class="post-title-sidebar-not"><?php echo get_the_title(); ?></div></a>
					<?php endif;?>
				<?php 
				endwhile;
				endif;
				
				?>
				</div>
				<?php dynamic_sidebar( 'crypto_widget' ); ?>
			</aside>
		</div>

	</div>
<?php
