## Function to find nth value in fibonacchi
* Iteration: iter(n)
* Recursion: recur(n)

#### Input
* Valid: number(not float) > 0

#### Output
* Valid input: correct nth value in fibonacchi
* Invalid input: throws an error

#### Example
* iter(1)/recur(1) returns 1
* iter(3)/recur(3) returns 2

* iter('')/recur(1.1) throws an error says 'Invalid input'

#### Why not recursion
In recursion, it calls itself multiple times with a exact same input.
For example, when you call recur(3), recur(1) is called twice.
* recur(3) = recur(2) + recur(1)
  * recur(2) = recur(1) + recur(0)

This means it uses more memory to find nth value in Fibonacchi.
This is why recursion is not ideal.

