var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.length = 0;
  someInstance.storage = {};
  extend(someInstance, stackMethods);

  return someInstance;

};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {
  push : function (val) {
    this.storage[this.length] = val;
    this.length++;
  },

  pop : function() {
    if (this.length > 0) {
      var result = this.storage[this.length -1];
      delete this.storage[this.length - 1];
      this.length--;
    }
      return result;
  },

  size : function() {
    return this.length;
  }
};

