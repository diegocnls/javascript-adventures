$('document').ready(function(){

	function multiply(number){
		return number * 2;
	}

	function add(number){
		return number +10;	
	}

	function divide(number){
		return number / 2;
	}

	function subtractTen(number){
		return number - 10;
	}

	var rainbow = subtractTen(100);

	console.log(rainbow);

}) 