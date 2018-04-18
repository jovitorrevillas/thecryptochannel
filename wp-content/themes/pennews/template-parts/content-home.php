<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package PenNews
 */

$option_layout_id = 'penci_home_layout_style';

$archive_layout = penci_get_setting( $option_layout_id );
$img_size       = 'penci-thumb-480-320';

$img_size   = penci_get_archive_image_type( $img_size );
$post_class = 'penci-imgtype-' . penci_get_setting( 'penci_archive_image_type' );

$class_article_content = $entry_text = $show_cat = '';
if ( 'blog-default' == $archive_layout || 'blog-boxed' == $archive_layout ) {
	$class_article_content = 'penci_media_object';
	$entry_text            = 'penci_mobj__body';
	$show_cat              = true;
}
?>
<article <?php post_class( $post_class ); ?>>

	<div class="article_content <?php echo esc_attr( $class_article_content ); ?>">
		<?php if ( has_post_thumbnail() && get_the_post_thumbnail() ): ?>
			<div class="entry-media penci_mobj__img">
				<a class="penci-link-post penci-image-holder penci-lazy" href="<?php the_permalink(); ?>" data-src="<?php the_post_thumbnail_url( $img_size ); ?>"></a>
				<?php penci_icon_post_format( true, 'medium-size-icon' ); ?>
				<?php
				if ( ! penci_get_setting( 'archive_hide_post_cat' ) && 'blog-grid' == $archive_layout ) {
					penci_get_categories();
				}

				if ( ! penci_get_setting( 'archive_hide_post_review' ) && function_exists( 'penci_display_piechart_review_html' ) ) {
					penci_display_piechart_review_html( get_the_ID(), 'normal' );
				}
				?>
			</div>
		<?php endif; ?>
		<div class="entry-text <?php echo esc_attr( $entry_text ); ?>">
			<header class="entry-header">
				<?php
				if ( ! penci_get_setting( 'archive_hide_post_cat' ) && in_array( $archive_layout, array( 'blog-default', 'blog-boxed' ) ) ) {
					penci_get_categories();
				}
				$sticky = is_sticky() ? '<span class="sticky-label"><i class="fa fa-thumb-tack"></i><span class="screen-reader-text">' . esc_html__( 'Featured', 'pennews' ) . '</span></span>  ' : '';
				the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $sticky, '</a></h2>' );

				if ( 'post' === get_post_type() ) : ?>
					<div class="entry-meta">
						<?php penci_posted_on_archive(); ?>
					</div><!-- .entry-meta -->
					<?php
				endif; ?>
			</header><!-- .entry-header -->

			<div class="entry-content">
				<?php
				if ( ! penci_get_setting( 'archive_hide_post_description' ) ) {
					penci_entry_content();
				}

				wp_link_pages( array(
					'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'pennews' ),
					'after'  => '</div>',
				) );
				?>
			</div><!-- .entry-content -->
			<?php
			if ( get_theme_mod( 'penci_show_read_more_post' ) ) {
				echo penci_more_link();
			}
			?>
			<footer class="entry-footer">
				<?php penci_get_tags(); ?>
			</footer><!-- .entry-footer -->
		</div>
	</div>
</article><!-- #post-## -->
