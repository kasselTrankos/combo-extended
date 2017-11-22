function comboExtended (elm) {
	var values = function () {
		return Array.prototype.slice.call(elm.getElementsByTagName('OPTION')).map(function(el){
			return {text: el.innerHTML, value: el.value} 
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
	var addEvents = function ({input, ul}) {
		input.addEventListener( 'focus', function(event){
			ul.className = ul.className + ' show';
		});
		input.addEventListener( 'blur', function(event){
			ul.className = ul.className.split(' ').filter(function(el){
				return el!=='show'
			}).join(' ')
		});
	};
	var create = function (parent, values, props) {
		var ul, li, a;
		var input = document.createElement('INPUT');
		input.className = props.className;
		
		var options = function () {
			
			ul = document.createElement('UL');
			ul.className = 'combo-extended-ul row'
			values.forEach( function(el){ 
				li = document.createElement('LI');
				a = document.createElement('A');
				a.innerHTML = el.text;
				li.className = 'col-md-12'
				li.appendChild(a); 
				ul.appendChild(li); 
			});
			parent.appendChild(ul);
			
		};
		var append = function(){

		};
		
		parent.appendChild(input);
		options();
		return {input, ul};
	};
	addEvents(create(replace(), values(), setProps()));
};
//IEF
(function(){
	Array.prototype.slice.call(document.getElementsByClassName('combo-extended')).forEach(function(el){
		var _combo = new comboExtended(el)
	});
	console.log('inito');
})()