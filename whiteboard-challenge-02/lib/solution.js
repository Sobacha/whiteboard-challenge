'use strict'

// checks if passing value is a number type
function isNum(val){
	if(typeof val !== 'number'){
		return false;
	}
	return true;
}

// returns highest and next highest value in a passing array
function highests(arr){
	let length = arr.length;

	// check if any values not number
	if (!arr.every(isNum)){
		return false;
	}

	// validation for array legnth
	if(length === 1){
		return ({firstHigh: arr[0],
			 secondHigh: null});
	} else if(length === 0){
		return null;
	}

	let sortedArr = arr.sort();
	let firstHigh = sortedArr[sortedArr.length-1];

	// check if array has all same values
	if((sortedArr.filter(val => val !== firstHigh)).length === 0){
		return ({firstHigh: firstHigh,
			 secondHigh: null});
	}

	var noFirstHigh = sortedArr.filter(val => val !== firstHigh);
	return ({firstHigh: firstHigh,
		 secondHigh: (sortedArr.filter(val => val !== firstHigh))[noFirstHigh.length-1]}); 
}

module.exports = highests;
