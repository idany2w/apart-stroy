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