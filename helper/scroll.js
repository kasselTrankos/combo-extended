var scroll = function (elm) {
  this._height = 46;
  return {
    height: function (elm) {
      this._height = elm.offsetHeight 
    },
    scrollTo: function (position) {
      elm.scrollTop = this._height * position;
    }
}
};