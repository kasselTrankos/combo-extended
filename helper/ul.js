var ul = function (cont) {
  this._position = 0;
  return {
    items: function() {
      var _items = [];
      for(var i=0; i<cont.length; i++){
        _items.push(cont[i].innerHTML);
      }
      return _items;
    },
    
    position: function (position){
      this._position = position || 0;
    },
    exists: function (position) {
      position = position || this._position;
      return cont[position] || false;
    },
    li: function (position) {
      position = position || this._position;
      return cont[position] || false;
    },
    addClass: function (name){
      if(cont[this._position]) cont[this._position].classList.add(name);
    },
    removeClass: function(name){
      if(cont[this._position]) cont[this._position].classList.remove(name);
    },
    innerHtml: function(){
      return (cont[this._position]) ? cont[this._position].innerHTML : ''
    }
  }
}; 