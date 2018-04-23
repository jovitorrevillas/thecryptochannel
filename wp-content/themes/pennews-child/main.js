(function($){
	// Get data from cryptowidget and
	//remove the table.
	//BITCOIN
	(function(){
	let bit_symbol = $('div#ccpw-list-widget500 table.ccpw_table tr#bitcoin .coin_symbol');
	let bit_value = $('div#ccpw-list-widget500 table.ccpw_table tr#bitcoin .price-value');
	let bit_changes = $('div#ccpw-list-widget500 table.ccpw_table tr#bitcoin .changes');
	let div1 = $('<div></div>');
	div1.addClass("bitcoin-symbol");
	div1.append("BTC");
	
	let div2 = $('<div></div>');
	div2.addClass("bitcoin-value");
	div2.append(bit_value);
	
	let div3 = $('<div></div>');
	div3.addClass("bitcoin-changes");
	div3.append(bit_changes);
	
	let holdMe = $('<div></div>');
	holdMe.addClass("crypto_main");
	holdMe.append(div1);
	holdMe.append(div2);
	holdMe.append(div3);
	
	$('div#ccpw-list-widget500').append(holdMe);
	})();
	
	
	//ETHEREUM
	(function(){
	let bit_symbol = $('div#ccpw-list-widget500 table.ccpw_table tr#ethereum .coin_symbol');
	let bit_value = $('div#ccpw-list-widget500 table.ccpw_table tr#ethereum .price-value');
	let bit_changes = $('div#ccpw-list-widget500 table.ccpw_table tr#ethereum .changes');
	let div1 = $('<div></div>');
	div1.addClass("ethereum-symbol");
	div1.append("ETH");
	
	let div2 = $('<div></div>');
	div2.addClass("ethereum-value");
	div2.append(bit_value);
	
	let div3 = $('<div></div>');
	div3.addClass("ethereum-changes");
	div3.append(bit_changes);
	
	let holdMe = $('<div></div>');
	holdMe.addClass("crypto_main");
	holdMe.append(div1);
	holdMe.append(div2);
	holdMe.append(div3);
	
	$('div#ccpw-list-widget500').append(holdMe);
	})();
	
	(function (){
		let crypto_main = $('<div></div>');
		crypto_main.addClass("crypto_main");
		$('div#ccpw-list-widget698').append(crypto_main);
	})();

	(function(){
		//first
		let bit_value = $('div#ccpw-list-widget698 table.ccpw_table tr:nth-child(2) .price-value');
		let bit_changes = $('div#ccpw-list-widget698 table.ccpw_table tr:nth-child(2) .changes').html($('div#ccpw-list-widget698 table.ccpw_table tr:nth-child(2) .changes').children());;
		let div1 = $('<div></div>');
		div1.addClass("f-symbol");
		div1.append("LTC");
		
		let div2 = $('<div></div>');
		div2.addClass("f-value");
		div2.append(bit_value);
		
		let div3 = $('<div></div>');
		div3.addClass("f-changes");
		div3.append(bit_changes);
		
		let holdMe = $('<div></div>');
		holdMe.addClass("third-option");
		holdMe.append(div1);
		holdMe.append(div2);
		holdMe.append(div3);

		
		$('div#ccpw-list-widget698 .crypto_main').append(holdMe);
	})();
	
	(function(){
		//first
		let bit_value = $('div#ccpw-list-widget698 table.ccpw_table tr:nth-child(1) .price-value');
		let bit_changes = $('div#ccpw-list-widget698 table.ccpw_table tr:nth-child(1) .changes').html($('div#ccpw-list-widget698 table.ccpw_table tr:nth-child(1) .changes').children());
		let div1 = $('<div></div>');
		div1.addClass("f-symbol");
		div1.append("XRP");
		
		let div2 = $('<div></div>');
		div2.addClass("f-value");
		div2.append(bit_value);
		
		let div3 = $('<div></div>');
		div3.addClass("f-changes");
		div3.append(bit_changes);
		
		let holdMe = $('<div></div>');
		holdMe.addClass("third-option");
		holdMe.append(div1);
		holdMe.append(div2);
		holdMe.append(div3);

		
		$('div#ccpw-list-widget698 .crypto_main').append(holdMe);
	})();
	
	(function(){
		//first
		let bit_value = $('div#ccpw-list-widget698 table.ccpw_table tr:nth-child(3) .price-value');
		let bit_changes = $('div#ccpw-list-widget698 table.ccpw_table tr:nth-child(3) .changes').html($('div#ccpw-list-widget698 table.ccpw_table tr:nth-child(3) .changes').children());
		let div1 = $('<div></div>');
		div1.addClass("f-symbol");
		div1.append("XMR");
		
		let div2 = $('<div></div>');
		div2.addClass("f-value");
		div2.append(bit_value);
		
		let div3 = $('<div></div>');
		div3.addClass("f-changes");
		div3.append(bit_changes);
		
		let holdMe = $('<div></div>');
		holdMe.addClass("third-option");
		holdMe.append(div1);
		holdMe.append(div2);
		holdMe.append(div3);

		
		$('div#ccpw-list-widget698 .crypto_main').append(holdMe);
	})();
	
	$('div#ccpw-list-widget500 table.ccpw_table').remove();
	$('div#ccpw-list-widget698 table.ccpw_table').remove();
})(jQuery);