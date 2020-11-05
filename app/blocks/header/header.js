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
	
	if(document.body.style.overflow){
		document.body.style.overflow = '';
	} else{
		document.body.style.overflow = 'hidden';
		document.querySelector('.header__nav').scrollTop = 0
	}
	
	e.target.classList.toggle('header__burger--close');
	e.target.closest('.header').querySelector('.header__nav').classList.toggle('header__nav--show')

}

function header__navClick(e){
	if(e.target.closest('.header__menu') || e.target.closest('.header__btn')){
		header__burgerClick({target: document.querySelector('.header__burger')})
	}
}


window.addEventListener('load', function(){
    header__stickyFunc();
    window.addEventListener('scroll', header__stickyFunc);
	document.addEventListener('click', header__burgerClick);
	document.addEventListener('click', header__navClick)
})