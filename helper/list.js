var list = function (elm) {
  return {
    addClass: function(name) {
      elm.classList.add(name);
    },
    removeClass: function(name) {
      elm.classList.remove(name);
    },
    exists: function (elm) {
      return elm || false;
    },
    hasClass: function(name){
      return Array.prototype.slice.call(elm.classList).indexOf(name) >= 0
    }
  }
};