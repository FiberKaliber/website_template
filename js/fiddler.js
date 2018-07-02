/*========================== 
        Dropdown menu
==============================*/

var dropdownMenuParent = document.getElementById('dropdown-div');
var dropdownMenu = document.getElementById('sidebar');    

// Onclick on .mobile-dropdown-link inside #dropdownMenuparent toggles visible/hidden on menu
dropdownMenuParent.onclick = function() {
    dropdownMenu.classList.toggle('sidebar-visible');
}

// Restores default settings on bigger screens/devices
window.addEventListener('resize', function() {
    if(window.innerWidth > 1024) {
        dropdownMenu.classList.add('dropdown-menu-hidden');
        dropdownMenu.classList.remove('dropdown-menu-visible');
    }
}); 