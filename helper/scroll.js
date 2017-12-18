var scroll = function (elm) {
  this._height = 46;
  return {
    height: function (elm) {
      var bt = parseInt(getComputedStyle(elm,null).getPropertyValue('border-top-width'), 10);
      var bb = parseInt(getComputedStyle(elm,null).getPropertyValue('border-bottom-width'), 10)
      this._height = elm.offsetHeight 
    },
    scrollTo: function (position) {
      
      elm.scrollTop = this._height * position;
      
    }
}
};