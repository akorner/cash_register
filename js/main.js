var total = 0;

$(document).ready(function(){
	$('#entry').submit(function(e){
		event.preventDefault();

		//get input value
		var newPrice = $('#newEntry').val();
		console.log(newPrice);

		//convert input value (string) to float
		var newPriceFloat = parseFloat(newPrice);
		
		//add number to total
		total = total + newPriceFloat;
		console.log(total);

		//format input to currency text
		var priceText = convertNum(newPrice);
		console.log(priceText);

		//append new line item to entries
		$('#entries').append('<p>' + priceText + '</p>');

		//convert total number into currency text
		var totalText = convertNum(total);

		//render new total value
		$('#total').html(totalText);

		//clear entry input
		$('#newEntry').val('');
	});

	function convertNum(numInput){
		var currencyString = "$ " + numInput + ".00";
		//console.log(currencyString);
		return currencyString;

	}
});


