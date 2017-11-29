function comboExtended (elm) {
	var values = function () {
		return Array.prototype.slice.call(elm.getElementsByTagName('OPTION')).map(function(el, i){
			return {text: el.innerHTML, value: i} 
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
	var addEvents = function ({input, ul, parent}) {
		input.addEventListener( 'focus', function(event){
			ul.className = ul.className + ' show';
		});
		parent.addEventListener( 'mouseleave', function(event){
			ul.className = ul.className.split(' ').filter(function(el){
				return el!=='show'
			}).join(' ');
			input.blur();
		});
		ul.addEventListener('click', function(event){
			input.value = event.target.innerHTML;
			ul.className = ul.className.split(' ').filter(function(el){
				return el!=='show'
			}).join(' ');
			input.blur();
			redraw(parent, ul, input);
		});
	};
	var input = function(parent, props) {
		var input = document.createElement('INPUT');
		input.className = props.className;
		parent.appendChild(input);
		return {parent, input, props};
	};
	var redraw = function(parent, ul, input){
		parent.removeChild(ul);
		var value = values(); var props = setProps();
		console.log(value);
		create({parent, input, props})
	};
	var create = function ({parent, input, props}) {
		var ul, li, a;
		console.log(values, parent, input, props);
		var options = function () {
			ul = document.createElement('UL');
			ul.className = 'combo-extended-ul row'
			values().forEach( function(el){ 
				li = document.createElement('LI');
				li.value = el.value;
				a = document.createElement('A');
				a.innerHTML = el.text;
				li.className = 'col-md-12'
				li.appendChild(a); 
				ul.appendChild(li); 
			});
			parent.appendChild(ul);
		};
		
		options();
		return {input, ul, parent};
	};
	addEvents(create(input(replace(), setProps())));
};
//IEF
(function(){
	Array.prototype.slice.call(document.getElementsByClassName('combo-extended')).forEach(function(el){
		var _combo = new comboExtended(el)
	});
	console.log('inito');
})()