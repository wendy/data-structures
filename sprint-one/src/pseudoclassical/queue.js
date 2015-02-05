var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.length] = val;
  this.length++;
};

Queue.prototype.dequeue = function() {
  this.length && this.length--;
  var result = this.storage[0];
  delete result;
  for(var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  return result;
}

Queue.prototype.size = function() {
  return this.length;
}


