## Function findBottomNodes

It finds all leaves in a k-ary tree.

#### Parameters:

One instance of k-ary tree

#### Return value

Array consists of tree nodes that are leaves in k-ary tree


## Example

#### Parameters:

   1
  /|\
 2 3 4
   |
   5

findBottomNodes(tree)


#### Return value

[treenode{value: 2, children: []},
treenode{value: 4, children: []},
treenode{value: 5, children: []}]

#### Error

If input is not k-ary tree instance, throw an error.
If root is null, return null.
