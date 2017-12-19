var keyboard = function (data) {
  var hasNext = function (current, total){
    return current < (total || data.length);
  };
  var hasPrev = function(current, minium) {
    return current > minium;
  };
  return {
    iterate: function(from, callback) {
      from = from || 0;
      while (hasNext(from)) {
        callback.call(this, from);
        from ++;
      }
    },
    next: function(current) {
      if(hasNext(current, data.length - 1)) return ++current;
      return data.length -1;
    },
    prev: function(current){
      if(hasPrev(current, -1)) return --current;
      return -1;
    }
  };
};