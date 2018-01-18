## function printPassenger
* Takes a object engine
* Prints the numeber of passengers in each car everytime you enter new car one by one (traverse)
#### Example
* Here is the object of each car in train
const caboose = {name: 'caboose', value: 40, next: null};
const car4 = {name: 'car4', value: 10, next: caboose};
const car3 = {name: 'car3', value: 1, next: car4};
const car2 = {name: 'car2', value: 5, next: car3};
const car1 = {name: 'car1', value: 15, next: car2};
const engine = {name: 'engine', value: 2, next: car1};

printPassengers(engine) prints out like this:
Passenger in engine: 2
Passenger in car1: 15
Passenger in car2: 5
Passenger in car3: 1
Passenger in car4: 10
Passenger in caboose: 40
