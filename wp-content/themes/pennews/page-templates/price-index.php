<?php
/**
 * Template Name: Price Index Template
 * Description: 
 *
 */

get_header();

?>
<script type="text/javascript">
	var currency = "USD";
	var crypto = "BTC";

	var url = "https://api.cointrend.club/data/pricemultifull?fsyms=" + crypto + "&tsyms=" + currency;
	var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

	$( document ).ready(function() {
		xhr.open('get', url, true);
		xhr.onreadystatechange = function() {
			var status;
			var data;

			if (xhr.readyState == 4) {
				status = xhr.status;

				if (status == 200) {
					data = JSON.parse(xhr.responseText);
					console.log(data);
					//
				} else {
					//
				}
			}
		};

		xhr.send();
	});
</script>

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
												<div class="field clearfix">
													<label class="pull-left">Open 24H</label>
													<span class="pull-right">$ 8 937.95</span>
												</div>
												<div class="field clearfix">
													<label class="pull-left">High 24H</label>
													<span class="pull-right">$ 9 137.69</span>
												</div>
												<div class="field clearfix">
													<label class="pull-left">Low 24H</label>
													<span class="pull-right">$ 8 773.66</span>
												</div>
												<div class="field clearfix">
													<label class="pull-left">Last Price</label>
													<span class="pull-right">$ 8 954.06</span>
												</div>
											</div>
											<div class="col-md-4">
												<div class="field clearfix">
													<label class="pull-left">Total</label>
													<span class="pull-right">Ƀ 16 945 912.00</span>
												</div>
												<div class="field clearfix">
													<label class="pull-left">Mkt. Cap</label>
													<span class="pull-right">$ 151B</span>
												</div>
												<div class="field clearfix">
													<label class="pull-left">Vol 24H</label>
													<span class="pull-right">Ƀ 61 919.49</span>
												</div>
												<div class="field clearfix">
													<label class="pull-left">Vol.24H</label>
													<span class="pull-right">$ 552 026 293.53</span>
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
