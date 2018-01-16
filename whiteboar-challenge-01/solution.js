'use strict'

function maxMinAve(arr){
	// return max number in array
	const max = Math.max(...arr);

	// return min number in array
	const min = Math.min(...arr);

	// return average of all values in arr
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	const ave = arr.reduce(reducer)/arr.length;

	return ({max: max,
		min: min,
		vae: ave});
}

