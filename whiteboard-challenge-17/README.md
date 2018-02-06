## Function Sum

It returns a sum of values of all nodes in a k-ary tree.

#### Parameters:

One instance of k-ary tree

#### Return value

Sum value of all leaves in k-ary tree


## Example

#### Parameters:
tree
{root: {value: 1, children: [{value: 2, children: []}, {value: 3, children:{value: 5, children: []}}, {value: 4, children: []}]}

sum(tree)


#### Return value

15

#### Error

If input is not k-ary tree instance, throws an error.
If root is null, returns null.
