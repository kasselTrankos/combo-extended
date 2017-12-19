var scroll = function (elm) {
  return {
    scrollTo: function (elm, position) {
      elm.scrollTop = position;
    }
}
};