var BinarySearchTree = function(value){
  var storage = newNode(value);

  storage.insert = function() {
    return storage.length;
  }

  storage.contains = function() {

  }

  storage.depthFirstLog = function() {

  }

  //worth hi-chews
  storage.breadthFirstLog = function(){

  }

  //worth lots of hi-chews
  storage.rebalanceTree = function(){

  }
  return storage;
};

var newNode = function(value) {
    var node = [];
    node.left = null;
    node.right = null;
    node.value = value;
    return node;
  }



/*
 * Complexity: What is the time complexity of the above functions?
 */
