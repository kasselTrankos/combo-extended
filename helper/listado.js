var ul = function (cont) {
  var _position = 0, _li = null;
  var getLi = function(position) {
    return cont.getElementsByTagName('LI')[position] || false;
  }
  return {
    // items: function() {
    //   var _items = [];
    //   for(var i=0; i<cont.length; i++){
    //     _items.push(cont[i].innerHTML);
    //   }
    //   return _items;
    // },
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
    // parent: function () {

    // },
    position: function (position){
      _position = position || 0;
      return _position;
    },
    exists: function (position) {
      return getLi(position || _position);
    },
    li: function (position) {
      this._li = getLi(this.position(position));
      return this;
    },
    addClass: function (name){
      if(this.exists()) this._li.classList.add(name);
    },
    removeClass: function(name){
      if(this.exists()) this._li.classList.remove(name);
    },
    innerHtml: function(){
      return (cont[_position]) ? cont[_position].innerHTML : ''
    }
  }
}; 