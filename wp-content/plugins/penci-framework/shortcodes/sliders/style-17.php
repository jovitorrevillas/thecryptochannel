<?php
$slider_i = 0;
while ( $query_slider->have_posts() ) :
	$query_slider->the_post();
	?>
	<div class="penci-item-mag penci-item-<?php echo $slider_i; ?>">
		<a class="penci-image-holder owl-lazy" data-src="<?php echo Penci_Framework_Helper::get_featured_image_size( get_the_ID(), 'penci-thumb-1920-auto' ); ?>" href="<?php the_permalink(); ?>" title="<?php echo esc_attr( wp_strip_all_tags( get_the_title() ) ); ?>"></a>
		<div class="penci-featured-content">
			<div class="penci-slider__text">
				<?php if ( ! $atts['hide_cat'] ): ?>
					<div class="cat penci-slider__cat"><?php Penci_Framework_Helper::show_category( '' ); ?></div>
				<?php endif; ?>
				<h3 class="entry-title">
					<a title="<?php echo wp_strip_all_tags( get_the_title() ); ?>" href="<?php the_permalink() ?>"><?php echo penci_trim_post_title( get_the_ID(), $atts['post_standard_title_length'] ); ?></a>
				</h3>
				<?php if (  ! $atts['hide_count_view'] || ! $atts['hide_comment'] ): ?>
					<div class="penci-slider__meta">
						<?php if ( ! $atts['hide_post_date'] && function_exists( 'penci_get_post_date' ) ): ?>
							<span class="penci-slider__meta-item penci-slider_post-date"><?php penci_get_post_date( get_the_ID(), true ); ?></span>
						<?php endif; ?>
						<?php if ( ! $atts['hide_count_view'] && function_exists( 'penci_get_post_countview' ) ): ?>
							<span class="penci-slider__meta-item penci-slider__post-countview"><?php penci_get_post_countview( get_the_ID(), true ); ?></span>
						<?php endif; ?>
						<?php if ( ! $atts['hide_comment'] ): ?>
							<span class="penci-slider__meta-item penci-slider__comments"><a href="<?php comments_link(); ?> "><i class="la la-comments"></i><?php comments_number( esc_html__( '0', 'snorlax' ), esc_html__( '1', 'snorlax' ), '% ' . esc_html__( '', 'snorlax' ) ); ?></a></span>
						<?php endif; ?>

					</div>
				<?php endif; ?>
			</div>
		</div>
	</div>
	<?php
	$slider_i ++;
endwhile;
wp_reset_postdata();