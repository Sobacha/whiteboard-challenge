'use strict'

function returnIntersects(arr1, arr2){
	
	let names = {};
	let result = [];

	let short, long;

	// check if which array is shorter
	if(arr1.length <= arr2.length){
		short = arr1;
		long  = arr2;
	}else{
		short = arr2;
		long = arr1;
	}

	// add values in short into names
	for (let i = 0; i < short.length; i++){
		names[short[i]] = true;
	}

	// iterate over long
	for (let i = 0; i < long.length; i++){
		if(names[long[i]]){
			result.push(long[i]);
			names[long[i]] = false;
		}

		// check if result.length is same with short.length
		if(short.length === result.length){
			break;
		}
	}

	return result;
}

module.exports = returnIntersects;
