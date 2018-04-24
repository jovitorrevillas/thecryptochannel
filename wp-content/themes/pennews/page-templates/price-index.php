<?php
/**
 * Template Name: Price Index Template
 * Description: 
 *
 */

get_header();
$symbols = array(
	811 => 'BTC',
	817 => 'BCH',
	821 => 'ETH',
);

$symbol = $symbols[get_the_ID()];

?>
<script type="text/javascript">
	document.addEventListener("DOMContentLoaded", function(event) { 
		var currency = "USD";
		var symbol = <?php echo "\"$symbol\""; ?>;

		var url = "https://api.cointrend.club/data/pricemultifull?fsyms=" + symbol + "&tsyms=" + currency;
		var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

		function fillSummary(data) {
			var data = {
				'crypto_open24h'	: data.DISPLAY[symbol][currency].OPEN24HOUR,
				'crypto_high24h'	: data.DISPLAY[symbol][currency].HIGH24HOUR,
				'crypto_low24h'		: data.DISPLAY[symbol][currency].LOW24HOUR,
				'crypto_lastprice'	: data.DISPLAY[symbol][currency].PRICE,
				'crypto_total'		: data.DISPLAY[symbol][currency].SUPPLY,
				'crypto_mktcap'		: data.DISPLAY[symbol][currency].MKTCAP,
				'crypto_vol24h'		: data.DISPLAY[symbol][currency].VOLUME24HOUR,
				'crypto_voldot24h'	: data.DISPLAY[symbol][currency].VOLUME24HOURTO,
			}

			for (var property in data) {
				console.log(document.getElementById(property));
				var elem = document.getElementById(property);
				elem.innerHTML = data[property];
			}
		}

		xhr.open('get', url, true);
		xhr.onreadystatechange = function() {
			var status;
			var data;

			if (xhr.readyState == 4) {
				status = xhr.status;

				if (status == 200) {
					data = JSON.parse(xhr.responseText);
					fillSummary(data);
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
									<div class="price-index-summary-column col-md-9 col-sm-12">
										<div class="row">
											<div class="col-md-4">
											</div>
											<div class="col-md-4">
												<div class="field clearfix">
													<label class="pull-left">Open 24H</label>
													<span id="crypto_open24h" class="pull-right">-</span>
												</div>
												<div class="field clearfix">
													<label class="pull-left">High 24H</label>
													<span id="crypto_high24h" class="pull-right">-</span>
												</div>
												<div class="field clearfix">
													<label class="pull-left">Low 24H</label>
													<span id="crypto_low24h" class="pull-right">-</span>
												</div>
												<div class="field clearfix">
													<label class="pull-left">Last Price</label>
													<span id="crypto_lastprice" class="pull-right">-</span>
												</div>
											</div>
											<div class="col-md-4">
												<div class="field clearfix">
													<label class="pull-left">Total</label>
													<span id="crypto_total" class="pull-right">-</span>
												</div>
												<div class="field clearfix">
													<label class="pull-left">Mkt. Cap</label>
													<span id="crypto_mktcap" class="pull-right">-</span>
												</div>
												<div class="field clearfix">
													<label class="pull-left">Vol 24H</label>
													<span id="crypto_vol24h" class="pull-right">-</span>
												</div>
												<div class="field clearfix">
													<label class="pull-left">Vol.24H</label>
													<span id="crypto_voldot24h" class="pull-right">-</span>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-3 col-sm-12">
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
