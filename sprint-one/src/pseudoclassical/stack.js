var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
};

Stack.prototype.push = function(val) {
  this.storage[this.length] = val;
  this.length++;
}

Stack.prototype.pop = function() {
  this.length && this.length--;
  var result = this.storage[this.length];
  delete result;
  return result;
}

Stack.prototype.size = function() {
  return this.length;
}


