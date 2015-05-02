$('document').ready(function(){


// cart is a function, and it's fuction is to:
// hold items,
// move

// cart is a callback


	function HEB (shoppingList, cart) {
		var stock = ['steve', 'pixie dust', 'UNICORNS'];
		var stuff = [];
		//if item in shopping list is in stock, put into cart
		function isItemInStock(item) {
			if(stock.indexOf(item) !== -1) return true;
			return false;
		}

		for(i = 0; i <= DiegosShoppingList.length; i++) {
			var result = isItemInStock(DiegosShoppingList[i]);
			if (result === true) stuff = stuff.concat(DiegosShoppingList[i]);
		}
		return cart(stuff);
	}

	var DiegosShoppingList = ['steve', 'pixie dust', 'UNICORNS', 'chocolate'];
	// DiegosShoppingList[0] = steve
	// DiegosShoppingList[1] = pixie dust 
	HEB(DiegosShoppingList, function(stuff) {
		console.log(stuff);
	});


	

});


// Abstraction

// Input --> [] --> output


// In a "mathematical" function, providing some input will
// ALLWAYS give the same output;

//  7,9 -->  [add] --> 16

// In computer functions, sometimes you get different 
// outputs from same inputs to same functoin;

// 'Diego'	--> [getBankAccountBalance] --> bank account getBankAccountBalance

// Types of numbers: integers, float 

// Checking Account Balance: $948.79

// New Deposit: $150.23

// NEW_BALANCE = 94879 + 15023;

