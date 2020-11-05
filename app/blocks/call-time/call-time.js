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