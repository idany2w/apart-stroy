!function(e){var t=e.Element.prototype;"function"!=typeof t.matches&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),o=0;t[o]&&t[o]!==this;)++o;return Boolean(t[o])}),"function"!=typeof t.closest&&(t.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window);

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

function callTime__elClick(e){
    let callTime__el = e.target.closest('.call-time__el');

    if(!callTime__el) return false

    let callTime = callTime__el.closest('.call-time');
    let callTime__el_active= callTime.querySelector('.call-time__el--active');

    callTime__el_active.classList.remove('call-time__el--active')
    callTime__el.classList.add('call-time__el--active')
}

function callTime__inputClick(e){
    if(!e.target.classList.contains('call-time__input')) return false

    let callTime__el_manual = e.target.closest('.call-time__el');

    let callTime = e.target.closest('.call-time');
    let callTime__el_default = callTime.querySelector('.call-time__el:not(.call-time__el--active)');
    let callTime__input = callTime__el_manual.querySelector('.call-time__input')

    callTime__input.addEventListener('blur', function(){
        if(!this.value){
            callTime__el_manual.classList.remove('call-time__el--active')
            callTime__el_default .classList.add('call-time__el--active')
        }
    }, {once: true})
}

document.addEventListener('click', callTime__elClick);
document.addEventListener('click', callTime__inputClick);
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
const form_submit = async (formData) => {
    const fetchResp = await fetch('mail.php', {
        method: 'POST',
        body: formData
    });
};

const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(this);

        form_submit(formData)
            .then((response) => {
                console.log(response);
                form.reset();
                popup_hide({target: e.target.closest('.popup--show')})
            })
    });
});


const popup = document.querySelector('.popup')

function popup_show(contentId) {
    let popup__content = popup.querySelector('.popup__content[data-content-id='+contentId+']')

    let popup__contnent_show = popup.querySelector('.popup__content--show');

    if(popup__contnent_show && popup__contnent_show !== popup__content){
        popup__contnent_show.classList.remove('popup__content--show')
    }

    popup.classList.add('popup--show')
    popup__content.classList.add('popup__content--show')
    document.body.style.overflow = 'hidden';
}

function popup_hide(e){
    if(e.target == popup) {
        popup.classList.remove('popup--show');
        document.body.style.overflow = '';
    }
}

popup.addEventListener('click', popup_hide, false)
function tabs__click(e){

    if(!e.target.classList.contains('tabs__control')) return false

    var currTabControl = e.target;
    var currTabId = currTabControl.getAttribute('data-tab-id');
    var tabs = currTabControl.closest('.tabs');
    var activeTabControl = tabs.querySelector('.tabs__control.tabs__control--active');
    var activeTabId = activeTabControl.getAttribute('data-tab-id');

    var currTab = tabs.querySelector('.tabs__tab[data-tab-id='+currTabId+']');
    var activeTab = tabs.querySelector('.tabs__tab.tabs__tab--active[data-tab-id='+activeTabId+']');

    if(activeTabControl){
        activeTabControl.classList.remove('tabs__control--active');
        activeTab.classList.remove('tabs__tab--active')
    }

    currTabControl.classList.add('tabs__control--active');
    currTab.classList.add('tabs__tab--active');
} 

document.addEventListener('click', tabs__click)
