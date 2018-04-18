<?php
// If comments are open or we have at least one comment, load up the comment template.
if ( ( comments_open() || get_comments_number() ) && ! penci_get_setting( 'penci_hide_single_comments' ) ) {
	$single_loadmore = penci_get_setting( 'penci_auto_load_prev_post' );
	if ( $single_loadmore ) {
		if ( get_comments_number() ) {
			printf( '<div id="penci-comments-button-%s" class="penci-comments-button">
						<a class="button comment-but-text" data-postid="%s" href="%s#comments-button">%s</a>
					</div>',
				get_the_ID(),
				get_the_ID(),
				get_the_permalink(),
				get_comments_number_text( esc_html__( 'Comment', 'pennews' ), esc_html__( '1 Comment', 'pennews' ), '% Comments' . esc_html__( '', 'pennews' ) )
			);

		} else {
			printf( '<div id="penci-comments-button-%s" class="penci-comments-button">
						<a href="#" class="button comment-but-text" data-postid="%s">%s</a>
					</div>',
				get_the_ID(),
				get_the_ID(),
				get_comments_number_text( esc_html__( 'Click to comment', 'pennews' ), esc_html__( '1 Comment', 'pennews' ), '% Comments' . esc_html__( '', 'pennews' ) )
			);
		}
	}
	comments_template();
}