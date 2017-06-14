var selectSearch = document.getElementsByClassName('dropdown__option-selected');


function open(){
	this.parentElement.classList.add('open');
	this.nextElementSibling.classList.add('open');
}

function close(){
	this.parentElement.classList.remove('open');
	this.nextElementSibling.classList.remove('open');	
} 

[].forEach.call(selectSearch, function(elem){
	elem.onfocus = open;
	elem.onblur = close;
});


var menu = document.getElementById('menu'),
	nav = document.getElementById('nav'),
	close = document.getElementById('close');

menu.onclick = function(e) {
	nav.classList.add('active-menu');
	e.target.classList.toggle('active');
	
	close.onclick = closeMenu;

}

function closeMenu(e) {
	nav.classList.remove('active-menu');
	menu.classList.toggle('active');
	
} 

var i = document.getElementById('slide'), polygon = document.getElementById('fill');
function slide(e){
    var pos = +i.value;
    polygon.setAttribute("points", "0,7  "+pos+","+(7+ (pos*7)/400)+" "+pos+","+(7-(pos*7)/400));
}

i.oninput = slide;