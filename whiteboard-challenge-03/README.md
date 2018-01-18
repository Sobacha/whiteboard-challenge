## function traverse
* Takes a object engine
* Prints the total passenger
#### Example
* Here is the object of each car in train
const caboose = {name: 'caboose', value: 40, next: null};
const car4 = {name: 'car4', value: 10, next: caboose};
const car3 = {name: 'car3', value: 1, next: car4};
const car2 = {name: 'car2', value: 5, next: car3};
const car1 = {name: 'car1', value: 15, next: car2};
const engine = {name: 'engine', value: 2, next: car1};

traverse(engine) prints 73 
