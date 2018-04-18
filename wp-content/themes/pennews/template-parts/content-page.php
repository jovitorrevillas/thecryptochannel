<?php

$page_hide_title         = penci_get_setting( 'penci_hide_page_title' );
$page_align_title        = penci_get_setting( 'penci_page_align_post_title' );
$page_style              = penci_get_setting( 'penci_page_template' );
$page_show_img           = penci_get_setting( 'penci_show_page_featured_img' );
$page_hide_breadcrumb    = penci_get_setting( 'penci_hide_page_breadcrumb' );
$page_hide_social_top    = penci_get_setting( 'penci_hide_page_socail_share_top' );
$page_hide_social_bottom = penci_get_setting( 'penci_hide_page_socail_share_bottom' );
$page_caption_above_img  = penci_get_setting( 'penci_page_caption_above_img' );
$page_show_comments      = penci_get_setting( 'penci_show_page_comments' );


$page_id                       = get_the_ID();
$page_use_option_current       = get_post_meta( $page_id, 'penci_use_option_current_page', true );
$page_hide_title_pre           = get_post_meta( $page_id, 'penci_hide_page_title', true );
$page_align_title_pre          = get_post_meta( $page_id, 'penci_page_align_post_title', true );
$page_style_pre                = get_post_meta( $page_id, 'page_template_layout', true );
$page_hide_page_breadcrumb_pre = get_post_meta( $page_id, 'penci_hide_page_breadcrumb', true );
$page_hide_social_top_pre      = get_post_meta( $page_id, 'penci_hide_page_socail_share_top', true );
$page_hide_social_bottom_pre   = get_post_meta( $page_id, 'penci_hide_page_socail_share_bottom', true );
$page_show_page_featured_pre   = get_post_meta( $page_id, 'penci_show_page_featured_img', true );
$page_caption_above_img_pre    = get_post_meta( $page_id, 'penci_page_caption_above_img', true );
$page_show_page_comments_pre   = get_post_meta( $page_id, 'penci_show_page_comments', true );


if ( ! empty( $page_use_option_current ) ) {

	$page_hide_title         = $page_hide_title_pre;
	$page_hide_social_top    = $page_hide_social_top_pre;
	$page_style              = $page_style_pre;
	$page_hide_social_top    = $page_hide_social_top_pre;
	$page_hide_social_bottom = $page_hide_social_bottom_pre;
	$page_caption_above_img  = $page_caption_above_img_pre;
	$page_show_comments      = $page_show_page_comments_pre;
	$page_hide_breadcrumb    = $page_hide_page_breadcrumb_pre;
	$page_align_title        = $page_align_title_pre;
	$page_show_img           = $page_show_page_featured_pre;
}

while ( have_posts() ) : the_post();

	$pre_page_style = get_post_meta( get_the_ID(), 'page_template_layout', true );
	if ( ! empty( $page_use_option_current ) && $pre_page_style ) {
		$page_style = $pre_page_style;
	}
endwhile;
?>

<?php if ( 'style-3' == $page_style ): ?>
	<?php while ( have_posts() ) : the_post(); ?>
		<?php if ( has_post_thumbnail() && $page_show_img ): ?>
			<div class="penci-container">
				<div class="entry-media penci-entry-media">
					<?php the_post_thumbnail( 'penci-thumb-960-auto' ); ?>
				</div>
			</div>
		<?php endif; ?>
	<?php endwhile; endif; ?>

<?php if ( 'style-4' == $page_style ): ?>
	<?php while ( have_posts() ) : the_post(); ?>
		<div class="entry-media penci-entry-media">
			<?php if ( has_post_thumbnail() && $page_show_img ): ?>
				<?php the_post_thumbnail( 'penci-thumb-960-auto' ); ?>
			<?php endif; ?>
		</div>
	<?php endwhile; endif; ?>

<div class="penci-container">
	<div class="penci-container__content">
		<div class="penci-wide-content penci-sticky-content">
			<?php
			while ( have_posts() ) : the_post();
				if ( 'style-2' == $page_style && has_post_thumbnail( get_the_ID() ) && $page_show_img ) {
					echo '<div class="entry-media penci-entry-media">';
					the_post_thumbnail( 'penci-thumb-960-auto' );
					echo '</div>';
				}
			endwhile;
			?>
			<div class="penci-content-post <?php echo esc_attr( $page_show_img && has_post_thumbnail() ? '' : 'hide_featured_image' ); ?>">
				<?php
				while ( have_posts() ) : the_post();

					if ( ! $page_hide_breadcrumb ) :
						penci_breadcrumbs( $args = '' );
					endif;
					?>
					<article id="post-<?php the_ID(); ?>" <?php post_class( 'penci-content-current-page' ); ?>>
						<?php if ( ! $page_hide_title || ! $page_hide_social_top ): ?>
							<header class="entry-header penci-entry-header">
								<?php
								if ( ! $page_hide_title ) {
									the_title( '<h1 class="entry-title penci-entry-title penci-title-' . $page_align_title . '">', '</h1>' );
								}
								?>
								<?php
								if ( ! $page_hide_social_top ) {
									get_template_part( 'template-parts/social-share' );
								}
								?>
							</header>
							<?php
						endif;

						if ( 'style-1' == $page_style && has_post_thumbnail() && $page_show_img ) {
							echo '<div class="entry-media penci-entry-media">';
							the_post_thumbnail( 'penci-thumb-960-auto' );
							echo '</div>';
						}
						?>
						<div class="penci-entry-content entry-content<?php echo esc_attr( $page_hide_breadcrumb && $page_hide_title && $page_hide_social_top ? ' penci-entry-content-no-ptop' : '' ); ?>">
							<?php
							the_content( sprintf(
								wp_kses( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'pennews' ), array( 'span' => array( 'class' => array() ) ) ),
								the_title( '<span class="screen-reader-text">"', '"</span>', false )
							) );

							wp_link_pages( array( 'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'pennews' ), 'after' => '</div>', ) );
							?>
						</div>
						<?php
						if ( ! $page_hide_social_bottom ) {
							echo '<footer class="penci-entry-footer">';
							get_template_part( 'template-parts/social-share' );
							echo '</footer>';
						}
						penci_entry_footer();
						?>
					</article>
					<?php
					if ( ( comments_open() || get_comments_number() ) && $page_show_comments ) {
						comments_template();
					}

				endwhile; // End of the loop.
				?>
			</div>
		</div>
		<?php get_sidebar( 'second' ); ?>
		<?php get_sidebar(); ?>
	</div>
</div>

