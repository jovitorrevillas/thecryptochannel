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
	// CONFIG
	var GLOBAL_SYMBOL = <?php echo "\"$symbol\""; ?>;
	var GLOBAL_CURRENCY_SYMBOLS = {"USD":"$","EUR":"€","GBP":"£","JPY":"¥","RUR":"₽"};
	var GLOBAL_CURRENCY_EXCHANGES = {
		'BTC': {"USD":["Index","Bitfinex","GDAX","Bitstamp","Gemini","BitTrex","Kraken","HitBTC"],"EUR":["Index","Kraken","Bitstamp","GDAX","Gatecoin","Exmo","Quoine"],"GBP":["Index","Coinfloor","LakeBTC","GDAX","Localbitcoins","Kraken"],"CNY":["Index","OKCoin CNY","Huobi","Localbitcoins"],"JPY":["Index","Coincheck","Zaif","Quoine","LakeBTC"],"RUR":["Index","Livecoin","Exmo"]},
		'BCH': {"USD":["Index","Bitfinex","BitTrex","HitBTC","Kraken","Poloniex"],"EUR":["Index","Kraken"],"GBP":["Index","Coinfloor"],"CNY":["Index","OKCoin CNY","Bter"],"JPY":["Index","Zaif","Quoine"],"RUR":["Index","Livecoin"]},
		'ETH': {"USD":["Index","Bitfinex","HitBTC","GDAX","Kraken","Gemini","Poloniex"],"EUR":["Index","GDAX","Bitstamp","Kraken","Gatecoin","Exmo","HitBTC"],"GBP":["Index","Kraken"],"CNY":["Index","OKCoin CNY"],"JPY":["Index","Quoine","Kraken"],"RUR":["Index","YoBit","Exmo","Livecoin"]}
	};

	document.addEventListener("DOMContentLoaded", function(event) { 
		var currency = "USD";
		var symbol = GLOBAL_SYMBOL;

		function resetSummaryDetails() {
			var data = {
				'crypto_open24h'	: '-',
				'crypto_high24h'	: '-',
				'crypto_low24h'		: '-',
				'crypto_lastprice'	: '-',
				'crypto_lastpriceH'	: '-',
				'crypto_total'		: '-',
				'crypto_mktcap'		: '-',
				'crypto_vol24h'		: '-',
				'crypto_voldot24h'	: '-',
				'crypto_daily'		: '-',
				'crypto_weekly'		: '-',
				'crypto_monthly'	: '-',
			}

			for (var property in data) {
				var elem = document.getElementById(property);
				elem.innerHTML = data[property];
			}
		}

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

			document.getElementById('crypto_daily').className = (ChangePct1D >= 0) ? 'pull-right positive' : 'pull-right negative';
			document.getElementById('crypto_weekly').className = (ChangePct1W >= 0) ? 'pull-right positive' : 'pull-right negative';
			document.getElementById('crypto_monthly').className = (ChangePct1M >= 0) ? 'pull-right positive' : 'pull-right negative';
		}

		function updateOriginPrices() {
			var url = 'https://api.cointrend.club/data/priceHistory?fsym=' + symbol + '&tsyms=USD,EUR,GBP,JPY,RUR';
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
			var url = "https://api.cointrend.club/data/pricemultifull?fsyms=" + symbol + "&tsyms=USD,EUR,GBP,JPY,RUR";
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

		function toggleCurrency(c) {
			currency = c;
			updateOriginPrices();
		}
 
	    var buttons = document.querySelectorAll('li.currency-item');
		[].forEach.call(buttons, function(el) {
			el.addEventListener('click', function(e) {
				// remove active class
				var elems = document.querySelectorAll(".currency-item.active");
				[].forEach.call(elems, function(el) {
				    el.classList.remove("active");
				});

				e.target.parentElement.className += ' active';
				toggleCurrency(e.target.innerHTML);
			});
		});
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
									<div class="col-md-8 no-padding">
										<div class="price-index-summary-column col-md-12">
											<div class="row currency-selection">
												<ul class="nav nav-pills">
													<li class="currency-item active"><a>USD</a></li>
													<li class="currency-item"><a>EUR</a></li>
													<li class="currency-item"><a>GBP</a></li>
													<li class="currency-item"><a>JPY</a></li>
													<li class="currency-item"><a>RUR</a></li>
												</ul>
											</div>
											<div class="row other-summary">
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
										<div class="col-md-12 no-padding" id="coinchart">
											<script type="text/javascript" src="/wp-content/themes/pennews/js/price-index-charts.js"></script>
										</div>
										<div class="col-md-12 no-padding" id="histoweek">
											<script type="text/javascript" src="/wp-content/themes/pennews/js/price-index-history.js"></script>
										</div>
									</div>
									<div class="col-md-4 no-padding">

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
