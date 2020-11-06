function header__stickyFunc(){
	if (window.pageYOffset !== 0){
		document.querySelector('.header').classList.add('header--sticky');
		document.querySelector('.header__burger').classList.add('header__burger--sticky');
	} else {
		document.querySelector('.header').classList.remove('header--sticky');
        document.querySelector('.header__burger').classList.remove('header__burger--sticky');
	};
}

function header__burgerClick(e){
	if(!e.target.classList.contains('header__burger')) return false
	
	if(e.target.classList.contains('header__burger--close')){
		document.body.style.overflow = '';
	} else{
		document.body.style.overflow = 'hidden';
		document.querySelector('.header__nav').scrollTop = 0
	}
	
	e.target.classList.toggle('header__burger--close');
	e.target.closest('.header').querySelector('.header__nav').classList.toggle('header__nav--show')

}

function header__navClick(e){
	const isHeader__nav_show = e.target.closest('.header__nav--show');
	const isHeader__menu= e.target.closest('.header__menu');
	const isHeader__burger = e.target.closest('.header__btn');

	if(isHeader__nav_show && (isHeader__menu || isHeader__burger)){
		document.querySelector('.header__burger').classList.remove('header__burger--close');
		document.querySelector('.header__nav').classList.remove('header__nav--show')
		document.querySelector('.header__nav').scrollTop = 0;

		if(!isHeader__burger){
			document.body.style.overflow = ''
		}
	}
}


window.addEventListener('load', function(){
    header__stickyFunc();
    window.addEventListener('scroll', header__stickyFunc);
	document.addEventListener('click', header__burgerClick);
	document.addEventListener('click', header__navClick)
})