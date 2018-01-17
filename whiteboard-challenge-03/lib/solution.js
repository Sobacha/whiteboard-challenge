'use strict'

function printPassengers(engine){
	if(!engine.hasOwnProperty('name') || !engine.hasOwnProperty('value') || !engine.hasOwnProperty('next')){
		return null;
	}
	if(typeof engine !== 'object'){
		return false;
	}

	let currentCar = engine;

	while(currentCar){
		console.log('Passenger in ' + currentCar.name + ': ' + currentCar.value);
		currentCar = currentCar.next;
	}
}

module.exports = printPassengers;
