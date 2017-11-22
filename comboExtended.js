function comboExtended (elm) {
	var values = [];
	var setValues = function () {
		values = Array.prototype.slice.call(elm.getElementsByTagName('OPTION')).map(function(el){
			return {name: el.innerHTML, value: el.value} 
		});
	};
	var setProps = function () {
		return {
			className: elm.className
		};
	};
	var replace = function () {
		var parent = elm.parentNode;
		parent.removeChild(elm);
		return parent;
	};
	var create = function (props) {
		var parent = replace();
		var input = document.createElement('INPUT');
		input.className = props.className;
		parent.appendChild(input);
	};
	setValues();
	create(setProps());
};