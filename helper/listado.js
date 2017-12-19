var ul = function (cont) {
  var _position = 0,
      _li = null;
  var getLi = function(position) {
    return cont.getElementsByTagName('LI')[position] || false;
  };
  return {
    redraw: function (value, data) {
      this.clear();
      var regex = new RegExp('^' + value);
      var _filtro = function(value) {
        return regex.test(value.name);
      }
      var _draw = data.filter(_filtro);
      for (var i=0; i<_draw.length; i++ ) {
        var LI = document.createElement('LI');
        LI.innerHTML = _draw[i].name;
        cont.appendChild(LI);
      }
    },
    
    clear: function () {
      while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
      }
    },
    position: function (position){
      _position = position || 0;
      return _position;
    },
    exists: function (position) {
      return getLi(position || _position);
    },
    child: function (position) {
      _li = getLi(this.position(position));
      return this;
    },
    li: function (position) {
      this.child(position);
      return _li;
    },
    height: function() {
      return _li.offsetHeight;
    },
    addClass: function (name){
      if(this.exists()) _li.classList.add(name);
      return this;
    },
    removeClass: function(name){
      if(this.exists()) _li.classList.remove(name);
      return this;
    },
    innerHtml: function(){
      return (cont[_position]) ? cont[_position].innerHTML : ''
    }
  }
}; 