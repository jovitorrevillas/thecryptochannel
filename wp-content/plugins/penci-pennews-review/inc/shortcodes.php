<?php

if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Penci review Shortcode
 * Use penci_review to display the review on single a post
 */
if( ! function_exists( 'penci_review_shortcode_function' ) ) {
	function penci_review_shortcode_function( $atts, $content = null ) {
		extract( shortcode_atts( array(
			'id' => ''
		), $atts ) );

		$review_id = get_the_ID();
		if ( ! empty( $id ) && is_numeric( $id ) ) {
			$review_id = $id;
		}

		// Get review meta
		$penci_review = get_post_meta( $review_id, 'penci_review', true );

		if( empty( $penci_review ) ) {
			return;
		}

		$review_style = isset( $penci_review['penci_review_style'] ) ? $penci_review['penci_review_style'] : 'style_1';
		$review_title = isset( $penci_review['penci_review_title'] ) ? $penci_review['penci_review_title'] : '';
		$review_des   = isset( $penci_review['penci_review_des'] ) ? $penci_review['penci_review_des'] : '';
		$review_good  = isset( $penci_review['penci_review_good'] ) ? $penci_review['penci_review_good'] : '';
		$review_bad   = isset( $penci_review['penci_review_bad'] ) ? $penci_review['penci_review_bad'] : '';

		// Turn review good and bad into an array
		$review_good_array = '';
		$review_bad_array  = '';
		if ( $review_good ):
			$review_good_array = preg_split( '/\r\n|[\r\n]/', $review_good );
		endif;
		if ( $review_bad ):
			$review_bad_array = preg_split( '/\r\n|[\r\n]/', $review_bad );
		endif;

		// Global score and based number point
		$total_score = 0;
		$total_num   = 0;
		$post_author_id = get_post_field( 'post_author', $review_id );
		$author_name = get_the_author_meta( 'display_name', $post_author_id );
		ob_start(); ?>

		<aside class="wrapper-penci-review <?php echo( $review_style ? 'penci-review-' . $review_style : '' ); ?> <?php echo 'manh-' . $review_id; ?>">
			<div class="penci-review" itemscope="" itemtype="http://schema.org/Review">
				<div class="penci-review-container penci-review-count">
					<?php if ( $review_title ) : ?>
						<h4 class="penci-review-title" itemprop="itemReviewed" itemscope="" itemtype="http://schema.org/Thing"><?php echo $review_title; ?></h4>
					<?php endif; ?>
					<?php if ( $review_des ) : ?>
						<div class="penci-review-desc" itemprop="description"><p><?php echo $review_des; ?></p></div>
					<?php endif; ?>
					<span style="display: none !important;" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
					<span itemprop="name"><?php echo  ( $author_name ? $author_name : get_bloginfo( 'description', 'display' ) ); ?></span></span>
					<?php include dirname( __FILE__ ) . "/templates/{$review_style}.php"; ?>
				</div>
				<div class="penci-review-container penci-review-point">
					<div class="penci-review-row">
						<?php if ( $review_good_array || $review_bad_array ) : ?>
							<div class="penci-review-stuff">
								<div class="penci-review-row<?php if ( ! $review_good_array || ! $review_bad_array ) : echo ' full-w'; endif; ?>">
									<?php if ( $review_good_array ) : ?>
										<div class="penci-review-good">
											<h5 class="penci-review-title"><?php if ( get_theme_mod( 'penci_review_good_text' ) ) {
													echo get_theme_mod( 'penci_review_good_text' );
												} else {
													esc_html_e( 'The Goods', 'soledad' );
												} ?></h5>
											<ul>
												<?php foreach ( $review_good_array as $good ) : ?>
													<?php if ( $good ) : ?>
														<li><?php echo $good; ?></li>
													<?php endif; ?>
												<?php endforeach; ?>
											</ul>
										</div>
									<?php endif; ?>
									<?php if ( $review_bad_array ) : ?>
										<div class="penci-review-good penci-review-bad">
											<h5 class="penci-review-title"><?php if ( get_theme_mod( 'penci_review_bad_text' ) ) {
													echo get_theme_mod( 'penci_review_bad_text' );
												} else {
													esc_html_e( 'The Bads', 'soledad' );
												} ?></h5>
											<ul>
												<?php foreach ( $review_bad_array as $bad ) : ?>
													<?php if ( $bad ) : ?>
														<li><?php echo $bad; ?></li>
													<?php endif; ?>
												<?php endforeach; ?>
											</ul>
										</div>
									<?php endif; ?>
								</div>
							</div>
						<?php endif; ?>
						<div class="penci-review-average<?php if ( ! $review_good_array && ! $review_bad_array ) : echo ' full-w'; endif; ?>">
							<div class="penci-review-score-total<?php if ( get_theme_mod( 'penci_review_hide_average' ) ): echo ' only-score'; endif; ?>">
								<div class="penci-review-score-num" itemprop="reviewRating" itemscope="" itemtype="http://schema.org/Rating">
									<?php
									$total_average = penci_get_review_average_score( $review_id );
									echo penci_get_review_average_score_format( $review_id, $total_average );
									?>
									<span style="display: none !important;" itemprop="ratingValue"><?php echo number_format( $total_average / 2, 2, '.', '' ); ?></span>
									<span style="display: none !important;" itemprop="bestRating">5</span>
								</div>
								<?php if ( 'style_3' == $review_style ) : ?>
									<div class="penci-review-score-num-star">
										<?php

										$star = $total_average / 2;
										for ( $i = 1; $i <= 5; $i ++ ) {
											if ( $i <= $star ) {
												echo '<i class="fa fa-star"></i>';
											} else {
												echo '<i class="fa fa-star-o"></i>';
											}

										}
										?>
									</div>
								<?php else: ?>
									<div class="penci-review-process">
										<span class="penci-process-run" data-width="<?php echo number_format( $total_average, 1, '.', '' ); ?>"></span>
									</div>
								<?php endif; ?>
								<?php if ( ! get_theme_mod( 'penci_review_hide_average' ) ): ?>
									<span><?php if ( get_theme_mod( 'penci_review_average_text' ) ) {
											echo get_theme_mod( 'penci_review_average_text' );
										} else {
											esc_html_e( 'Average Score', 'soledad' );
										} ?></span>
								<?php endif; ?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</aside>
		<?php
		return ob_get_clean();
	}
}

add_shortcode( 'penci_review', 'penci_review_shortcode_function' );
