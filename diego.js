$('document').ready(function() {
	var score = 0; //score is an integer
	var floatVar = 103.5; //float 	
	var sentence = 'Diego is cool.'; //string
		// array
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	function Cat(){
		this.legsCount = 4;
		this.furColor = 'orange';
		this.eyeColor = 'green';
		this.earsCount = 2;
		this.earType = 'pointy';
		this.alive = true;
	};

	Cat.prototype.kill = function(){
		return this.alive = false;	
	}

	var fluffy = new Cat();
	var whiskers = new Cat();
	var garfield = new Cat();

	fluffy.furColor = 'white';

	console.log('fluffy is alive');
	console.log(fluffy);
	
	fluffy.kill();
	
	console.log('fluffy is dead');
	console.log(fluffy);	

});

