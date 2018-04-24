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

		function fillSummaryDetails(data, originPrices) {
			// PERCENTAGES
			// -- DAILY
			var Change1D = data.RAW[symbol][currency].PRICE - data.RAW[symbol][currency].OPEN24HOUR;
			var ChangePct1D = Change1D / data.RAW[symbol][currency].OPEN24HOUR * 100;
			ChangePct1D = (Math.floor(ChangePct1D * 100) / 100).toFixed(2);

			// -- WEEKLY
			var Change1W = data.RAW[symbol][currency].PRICE - originPrices[currency].WeekOpen;
			var ChangePct1W = Change1W / originPrices[currency].WeekOpen * 100;
			ChangePct1W = (Math.floor(ChangePct1W * 100) / 100).toFixed(2);
			ChangePct1W = isFinite(ChangePct1W) ? ChangePct1W : 0;

			// -- MONTHLY
			var Change1M = data.RAW[symbol][currency].PRICE - originPrices[currency].MonthOpen;
			var ChangePct1M = Change1M / originPrices[currency].MonthOpen * 100;
			ChangePct1M = (Math.floor(ChangePct1M * 100) / 100).toFixed(2);
			ChangePct1M = isFinite(ChangePct1M) ? ChangePct1M : 0;

			var data = {
				'crypto_open24h'	: data.DISPLAY[symbol][currency].OPEN24HOUR,
				'crypto_high24h'	: data.DISPLAY[symbol][currency].HIGH24HOUR,
				'crypto_low24h'		: data.DISPLAY[symbol][currency].LOW24HOUR,
				'crypto_lastprice'	: data.DISPLAY[symbol][currency].PRICE,
				'crypto_lastpriceH'	: data.DISPLAY[symbol][currency].PRICE,
				'crypto_total'		: data.DISPLAY[symbol][currency].SUPPLY,
				'crypto_mktcap'		: data.DISPLAY[symbol][currency].MKTCAP,
				'crypto_vol24h'		: data.DISPLAY[symbol][currency].VOLUME24HOUR,
				'crypto_voldot24h'	: data.DISPLAY[symbol][currency].VOLUME24HOURTO,
			}

			for (var property in data) {
				var elem = document.getElementById(property);
				elem.innerHTML = data[property];
			}

			document.getElementById('crypto_daily').innerHTML = Math.abs(ChangePct1D) + '%';
			document.getElementById('crypto_weekly').innerHTML = Math.abs(ChangePct1W) + '%';
			document.getElementById('crypto_monthly').innerHTML = Math.abs(ChangePct1M) + '%';

			document.getElementById('crypto_daily').className += (ChangePct1D > 0) ? ' positive' : ' negative';
			document.getElementById('crypto_weekly').className += (ChangePct1W > 0) ? ' positive' : ' negative';
			document.getElementById('crypto_monthly').className += (ChangePct1M > 0) ? ' positive' : ' negative';
		}

		function updateOriginPrices() {
			var url = 'https://api.cointrend.club/data/priceHistory?fsym=' + symbol + '&tsyms=' + currency;
			var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

			xhr.open('get', url, true);
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					var status = xhr.status;

					if (status == 200) {
						var data = JSON.parse(xhr.responseText);
						updateSummary(data);
					}
				}
			};
			xhr.send();
		}

		function updateSummary(originPrices) {
			var url = "https://api.cointrend.club/data/pricemultifull?fsyms=" + symbol + "&tsyms=" + currency;
			var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

			xhr.open('get', url, true);
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					var status = xhr.status;

					if (status == 200) {
						var data = JSON.parse(xhr.responseText);
						fillSummaryDetails(data, originPrices);
					}
				}
			};
			xhr.send();
		}

		// 
		updateOriginPrices();
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
										<div class="row currency-selection">
											<ul class="nav nav-pills">
												<li class="active"><a href="#">USD</a></li>
												<li><a href="#">EUR</a></li>
												<li><a href="#">GBP</a></li>
												<li><a href="#">JPY</a></li>
												<li><a href="#">RUR</a></li>
											</ul>
										</div>
										<div class="row">
											<div class="col-md-4">
												<h2 id="crypto_lastpriceH">-</h2>
												<div class="main-summary">
													<div class="highlight clearfix">
														<label class="pull-left">DAY</label>
														<span id="crypto_daily" class="pull-right">-</span>
													</div>
													<div class="highlight clearfix">
														<label class="pull-left">WEEK</label>
														<span id="crypto_weekly" class="pull-right">-</span>
													</div>
													<div class="highlight clearfix">
														<label class="pull-left">MONTH</label>
														<span id="crypto_monthly" class="pull-right">-</span>
													</div>
												</div>
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
