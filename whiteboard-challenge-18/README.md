## Function maxChild

It returns a node that has a max num of children in a k-ary tree.

#### Parameters:

One instance of k-ary tree

#### Return value

A node in k-ary tree


## Example

#### Parameters:
tree
{root: {value: 1, children: [{value: 2, children: []}, {value: 3, children:{value: 5, children: []}}, {value: 4, children: []}]}

maxChild(tree)


#### Return value

TreeNode
{value: 1, children: [TreeNode, TreeNode, TreeNode]}

#### Error

If input is not k-ary tree instance, throws an error.
If root is null, returns null.
