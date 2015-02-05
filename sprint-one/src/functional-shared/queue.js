var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.length = 0;
  someInstance.storage = {};

  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {
  enqueue : function(value) {
    this.storage[this.length] = value;
    this.length++;
  },

  dequeue : function() {
    this.length && this.length--;
    var result = this.storage[0];
    delete result;
    for (var key in this.storage) {
      this.storage[key-1] = this.storage[key];
    }
    return result;
  },

  size : function() {
    return this.length;
  }


};



