var ul = function (cont) {
  this._position = 0;
  return {
    position: function (position){
      this._position = position || 0;
    },
    exists: function (position) {
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