<?php
$single_style    = penci_get_setting( 'penci_single_template' );
$single_hide_img = penci_get_setting( 'penci_hide_single_featured_img' );
$align_title     = 'penci-title-' . penci_get_setting( 'penci_single_align_post_title' );
global $post;

$post_id = isset( $post->ID ) ? $post->ID : 0;
?>
<?php
if( 'style-6' == $single_style || 'style-7' == $single_style ) {
if ( ! $single_hide_img && penci_post_formats() ){ ?>
	<div class="entry-media penci-entry-media penci-entry-media-top penci-entry-media-loaded">
		<?php
		$thumbnail_id   = get_post_thumbnail_id( $post_id );
		$get_image_info = wp_get_attachment_image_src( $thumbnail_id, 'penci-thumb-960-auto' );
		if( isset( $get_image_info[0] ) ) {
			echo '<div class="penci-post-bg-image penci-image-holder" style="background-image: url( ' . esc_url( $get_image_info[0] ) . ' );"></div>';
		}
		?>
		<div class="entry-media__content ">
			<div class="entry-header penci-entry-header <?php echo esc_attr( $align_title ); ?>">
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
	</div>
<?php }} ?>
<div class="penci-content-post penci-content-post-loaded <?php echo esc_attr( ! $single_hide_img && penci_post_formats() ? '' : 'hide_featured_image' ); ?>">
	<article <?php post_class(); ?>>
		<?php if( 'style-6' != $single_style & 'style-7' != $single_style ): ?>
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
		<?php
		if ( ! $single_hide_img && has_post_thumbnail() ) {
			echo '<div class="entry-media penci-entry-media">';
			the_post_thumbnail( 'penci-thumb-960-auto', true );
			echo '</div>';
		}
		?>
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
			if ( ! penci_get_setting( 'penci_hide_single_tag' ) ): penci_get_tags( $post_id ); endif;

			if ( ! penci_get_setting( 'penci_hide_single_social_share_bottom' ) ) {
				get_template_part( 'template-parts/social-share' );
			}
			?>
		</footer><!-- .entry-footer -->
	</article>
	<?php
	get_template_part( 'template-parts/author-box' );
	get_template_part( 'template-parts/related_posts' );

	// If comments are open or we have at least one comment, load up the comment template.
	if ( comments_open() && ! penci_get_setting( 'penci_hide_single_comments' ) ) {

		if ( get_comments_number() ) {
			printf( '<div id="penci-comments-button-%s" class="penci-comments-button">
						<a class="button comment-but-text" data-postid="%s" href="%s#comments-button">%s</a>
					</div>',
				$post_id,
				$post_id,
				get_the_permalink(),
				get_comments_number_text( esc_html__( 'Comment', 'pennews' ), esc_html__( '1 Comment', 'pennews' ), '% Comments' . esc_html__( '', 'pennews' ) )
			);

		} else {
			printf( '<div id="penci-comments-button-%s" class="penci-comments-button">
						<a href="#" class="button comment-but-text" data-postid="%s">%s</a>
					</div>',
				$post_id,
				$post_id,
				get_comments_number_text( esc_html__( 'Click to comment', 'pennews' ), esc_html__( '1 Comment', 'pennews' ), '% Comments' . esc_html__( '', 'pennews' ) )
			);
		}

		$qry_current_posts = new WP_Query( array( 'p' => $post_id ) );
		while ( $qry_current_posts->have_posts() ) {
			$qry_current_posts->the_post();
		}
		wp_reset_postdata();

		Penci_Auto_Load_Previous_Post::comments_template( );
	}
	?>
</div>


