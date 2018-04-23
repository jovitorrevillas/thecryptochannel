<?php
/**
 * Template Name: Price Index Template
 * Description: 
 *
 */

get_header();

?>

<div id="primary" class="content-area">
	<main id="main" class="site-main">
		<div class="penci-container">
			<div class="penci-container__content">
				<div class="penci-wide-content penci-sticky-content">
					<div class="penci-content-post">
						<article>
							<div class="wpb_text_column wpb_content_element ">
								<div class="wpb_wrapper">
									<h1><?php echo get_the_title(); ?></h1>
									<div class="price-index-summary-column col-md-9">
										<div class="row">
											<div class="col-md-4">
											</div>
											<div class="col-md-4">
												<div class="field">
													<label>Open 24H</label>
													<span>$ 8 937.95</span>
												</div>
												<div class="field">
													<label>High 24H</label>
													<span>$ 9 137.69</span>
												</div>
												<div class="field">
													<label>Low 24H</label>
													<span>$ 8 773.66</span>
												</div>
												<div class="field">
													<label>Last Price</label>
													<span>$ 8 954.06</span>
												</div>
											</div>
											<div class="col-md-4">
												<div class="field">
													<label>Total</label>
													<span>Ƀ 16 945 912.00</span>
												</div>
												<div class="field">
													<label>Mkt. Cap</label>
													<span>$ 151B</span>
												</div>
												<div class="field">
													<label>Vol 24H</label>
													<span>Ƀ 61 919.49</span>
												</div>
												<div class="field">
													<label>Vol.24H</label>
													<span>$ 552 026 293.53</span>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-3">
									</div>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>

<?php get_footer(); ?>
