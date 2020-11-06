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