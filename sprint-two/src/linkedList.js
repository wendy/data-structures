var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
    }

    if (list.tail !== null) {
      list.tail.next = node;
    }

    list.tail = node;
  };

  list.removeHead = function(){
    var head = list.head.value
    console.log(list.head, list.head.next);
    if (list.head.next === null) {
      list.head = null;
    } else {
      list.head = list.head.next;
    }
    return head;
  };

  list.contains = function(target){
    var result = false;
    var currentNode = list.head;
    while (currentNode.next !== null) {
      if (currentNode.value === target) {
        result = true;
        break;
      }
      currentNode = currentNode.next;
    }
    if (currentNode === list.tail) {
      if (currentNode.value === target) {
        result = true;
      }
    }
    return result;
    // for(var key in list) {
    //   if (key.value === target) {
    //     return true;
    //   }
    // }
    // return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
