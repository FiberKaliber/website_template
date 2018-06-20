/*========================== 
        Dropdown menu
==============================*/

var dropdownMenuParent = document.getElementById('dropdown-menu-parent');
var dropdownMenu = document.getElementById('dropdown-menu');    

// Onclick on .mobile-dropdown-link inside #dropdownMenuparent toggles visible/hidden on menu
dropdownMenuParent.onclick = function() {
        dropdownMenu.classList.toggle('dropdown-menu-visible');
        dropdownMenu.classList.toggle('dropdown-menu-hidden');
}

// Restores default settings on bigger screens/devices
window.addEventListener('resize', function() {
    if(window.innerWidth > 1024) {
        dropdownMenu.classList.remove('dropdown-menu-visible');
        dropdownMenu.classList.add('dropdown-menu-hidden');
    }
}); 