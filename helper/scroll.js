var scroll = function (elm) {
  return {
    scrollTo: function (position) {
      elm.scrollTop = position;
    }
}
};