var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var someInstance = Object.create(queueMethods);
someInstance.length = 0;
someInstance.storage = {};
return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
}

queueMethods.dequeue = function() {
  this.length && this.length--;
  var result = this.storage[0];
  delete result;
  for (var key in this.storage) {
    this.storage[this.length-1] = this.storage[this.length];
  }
  return result;
}

queueMethods.size = function() {
  return this.length;
}
