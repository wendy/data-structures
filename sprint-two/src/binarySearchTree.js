var BinarySearchTree = function(value){
  var storage = newNode(value);
  var size = 1;

  storage.insert = function(val) {
    var search = function(val, location){
      if (val < location.value) {
        if (location.left ===  null) {
          location.left = newNode(val);
         } else {
          search(val, location.left);
        }
      } else {
        if (location.right ===  null) {
          location.right = newNode(val);
        } else {
          search(val, location.right);
        }
      }
    };
    search(val, storage);
    size++;
  }

  storage.contains = function(target) {
    var isFound = false;
    var search = function(val, location){
      if (val === location.value) {
        isFound = true;
      } else if (val < location.value) {
        if (location.left !==  null) {
          search(val, location.left);
        }
      } else {
        if (location.right !==  null) {
          search(val, location.right);
        }
      }
      return isFound;
    };
    return search(target, storage);

  }

  storage.depthFirstLog = function(fn) {
    var search = function(fn, location){
      fn(location.value);
      if (location.left !==  null) {
        search(fn, location.left);
      }
      if (location.right !==  null) {
        search(fn, location.right);
      }
    };
    return search(fn, storage);
  }

  //worth hi-chews
  storage.breadthFirstLog = function(){
   var arr = [storage.value];
   var current = storage;
   var currentLeft = null;
   var completed = 1;

    var search = function(location){
      if (completed === size) {
        return;
      }
      if (location.left !==  null) {
        arr.push(location.left.value)
        completed++;
      }
      if (location.right !==  null) {
        arr.push(location.right.value)
        completed++;
      }
      // if (currentLeft === false) {

      // }
      if (currentLeft === true) {
        currentLeft = false;
        search(current.right);
      } else {
        currentLeft = true;
        search(current.left);
      }
    };
    search(current);
    return arr;
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
};



/*
 * Complexity: What is the time complexity of the above functions?
  insert = O(log n)
  contain = O(log n)
  depth = O(n)
 */
