var cakeIngredients = ['flour', 'chocolate', 'sugar', 'vanilla', 'eggs', 'milk', 'baking powder'];

// get the ingredients
// mix them in bowl into batter
// put in cake pan
// put in oven
// wait until done
// take out of oven
// cool down
// eat

function getIngredients (ingredientsList, callback) {
		// go to the store
		// get the incredinets
		var ingredients = ingredientsList;
		return callback(null, ingredients);
}

function mix(ingredients){
	return mixedIngredients;
}

function pan(batter){
	return panWithBatter;
}

function bake(panWithBatter,callback){
	// bake the cake
	return callback(null, cake);
}

function cut(cake) {
	return slice;
}
{
getIngredients(cakeIngredients, function(err, ingredients){
	if (err) return;
	var batter = mix(ingredients);
	var pan = pan(batter);

	bake(pan, function(err,cake){
		if (err) return;
		// wait 30 mins;
		var slice = cut(cake);
		eat(slice);
	});
});
