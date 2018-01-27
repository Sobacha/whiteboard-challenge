## Function checkBraces

#### Parameters:

* One string

#### Return value

* true if braces are ordered
* false otherwise


## Example

#### Parameters:

* checkBraces('{{}}');

#### Return value

* true

#### Parameters:

* checkBraces('{{}');

#### Return value

* false


## Error

* if no string is passed, throw an error
* if input is not type string, throw an error


## Function that returns {value: n, index: i} if n is in an sorted array

#### Parameters:

* One value to be looked for
* One sorted array to serch n

#### Return value

* {value: n, index: i} 
* null if n is not in sorted array


## Example

#### Parameters:

* function(1, [1,2,3,4]);

#### Return value

* {value: 1, index: 0}

## Error

* if both arguments are not passed, throw an error
* if second input is not instance of array, throw an error
* if second input is empty, throw an error
