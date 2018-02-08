## Function karyTreeToSll

It returns a sll that has all nodes value in a k-ary tree.

#### Parameters:

One instance of k-ary tree

#### Return value

A sll


## Example

#### Parameters:
tree
{root: {value: 1, children: [{value: 2, children: []}, {value: 3, children:{value: 5, children: []}}, {value: 4, children: []}]}

karyTreeToSll(tree)


#### Return value

SLL
{value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: {value: 5, next: null}}}}}

#### Error

If input is not k-ary tree instance, throws an error.
If root is null, returns null.
