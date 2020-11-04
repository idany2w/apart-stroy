!function(e){var t=e.Element.prototype;"function"!=typeof t.matches&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),o=0;t[o]&&t[o]!==this;)++o;return Boolean(t[o])}),"function"!=typeof t.closest&&(t.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window);

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

window.addEventListener('scroll', function(){
	if (window.pageYOffset !== 0){
		document.querySelector('.header').classList.add('header--sticky');
		document.querySelector('.header__burger').classList.add('header__burger--sticky');
	} else {
		document.querySelector('.header').classList.remove('header--sticky');
        document.querySelector('.header__burger').classList.remove('header__burger--sticky');
	};
});

function header__burgerClick(e){
	if(!e.target.classList.contains('header__burger')) return false
	
	e.preventDefault();

	e.target.classList.toggle('header__burger--close');
	e.target.closest('.header').querySelector('.header__nav').classList.toggle('header__nav--show')

}

document.addEventListener('click', header__burgerClick);
document.addEventListener('load', function(){
    console.log('document loaded')
})