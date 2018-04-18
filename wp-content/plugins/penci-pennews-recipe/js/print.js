jQuery( function ( $ ) {
	'use strict';
	jQuery( 'body' ).on( 'click', '.penci-recipe-print', function () {
		var printWindow = window.open( '', '', 'height=800,width=800' );
		var printCSS = jQuery( this ).data( 'print' );
		var divContents = jQuery( this ).parent().parent().parent().html() +
		                  "<script>" +
		                  "window.onload = function() {" +
		                  "     window.print();" +
		                  "};" +
		                  "<" + "/script>";
		var srcCSS = '<link href=\"' + printCSS + '\" rel=\"stylesheet\" type=\"text/css\" media=\"print\">';
		 srcCSS += '<link href=\"http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel=\"stylesheet\" type=\"text/css\" media=\"print\">';

		printWindow.document.write( srcCSS + divContents );
		printWindow.document.close();
		return false;
	} );
} );