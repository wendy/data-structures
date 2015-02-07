var Tree = function(value){
  var newTree = {};
  newTree.value = value;


  newTree.children = [];

  return _.extend(newTree, treeMethods);
};



var treeMethods = {};

treeMethods.addChild = function(value){
   this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var result = false;
  var test = function(node) {
    for (var i = 0; i<node.length; i++) {
      if (node[i].value === target) {
        result = true;
      }
    test(node[i].children);
    }
  }
  test(this.children);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
