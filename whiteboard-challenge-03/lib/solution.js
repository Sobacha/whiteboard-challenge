'use strict'

const traverse = (engine) => {
	if(!engine.hasOwnProperty('value') || !engine.hasOwnProperty('next')){
		return null;
	}

	if(typeof engine !== 'object'){
		return false;
	}

	let currentCar = engine;
	let total = 0;

	while(currentCar){
		total += currentCar.value;
		currentCar = currentCar.next;
	}
	return  total;
}

module.exports = traverse;
