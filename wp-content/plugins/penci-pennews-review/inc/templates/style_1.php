<ul class="penci-review-number">
	<?php
	$arr_review_number = array( 'penci_review_1', 'penci_review_2', 'penci_review_3', 'penci_review_4', 'penci_review_5' );

	$review_id    = isset( $review_id ) ? $review_id : get_the_ID();
	$penci_review = $penci_review ? get_post_meta( $review_id, 'penci_review', true ) : '';

	foreach ( $arr_review_number as $review_number_item ) {
		$review_1    = isset( $penci_review[ $review_number_item ] ) ? $penci_review[ $review_number_item ] : '';
		$review_1num = isset( $penci_review[ $review_number_item . '_num' ] ) ? $penci_review[ $review_number_item . '_num' ] : '';

		if ( empty( $review_1 ) || empty( $review_1num ) ) {
			continue;
		}

		?>
		<li>
			<div class="penci-review-text">
				<div class="penci-review-point"><?php echo $review_1; ?></div>
				<div class="penci-review-score"><?php echo$review_1num; ?></div>
			</div>
			<div class="penci-review-process">
				<span class="penci-process-run" data-width="<?php echo number_format( $review_1num, 1, '.', '' ); ?>"></span>
			</div>
		</li>
		<?php
	}
	?>
</ul>