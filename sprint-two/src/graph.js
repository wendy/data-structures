

var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(node){
  this.storage[node] = [];
};

Graph.prototype.contains = function(node){
  if (this.storage[node] !== undefined) {
    return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  if (this.storage[node] !== undefined) {
    delete this.storage[node];
  }
  return node;
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var result = false;
  for (var i = 0; i < this.storage[fromNode].length; i++) {
    if (this.storage[fromNode][i] === toNode) {
      result = true;
    }
  }
  return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){

  var remove = function(node1, node2) {
    for (var i = 0; i < this.storage[node1].length; i++) {
      if (this.storage[node1][i] === node2) {
        this.storage[node1].splice(i, 1);
      }
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode: O(n)
 contains: O(1)
 remove: O(1)
 hasEdge: O(n)
 addEdge: O(1)
 removeEdge: O(n)
 forEachNode: O(n)
 */



