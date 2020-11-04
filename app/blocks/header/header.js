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