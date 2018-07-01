/*========================== 
        Dropdown menu
==============================*/

var dropdownMenuParent = document.getElementById('dropdown-menu-parent');
var dropdownMenu = document.getElementById('dropdown-menu');    
var headerSize = document.getElementById('header')

// Onclick on .mobile-dropdown-link inside #dropdownMenuparent toggles visible/hidden on menu
dropdownMenuParent.onclick = function() {
        dropdownMenu.classList.toggle('dropdown-menu-visible');
        dropdownMenu.classList.toggle('dropdown-menu-hidden');
        headerSize.classList.toggle('header-height-toggle');
}

// Restores default settings on bigger screens/devices
window.addEventListener('resize', function() {
    if(window.innerWidth > 1024) {
        dropdownMenu.classList.add('dropdown-menu-hidden');
        dropdownMenu.classList.remove('dropdown-menu-visible');
        headerSize.classList.remove('header-height-toggle');
    }
}); 