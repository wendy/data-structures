var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < this._limit; i++) {
    this._storage[i] = [];
  }
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // this._storage[i] =[];
  this._storage[i].push([k,v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i];
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      return bucket[j][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i];
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket.splice(j, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
