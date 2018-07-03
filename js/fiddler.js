/*========================== 
        Dropdown menu
==============================*/

var dropdownMenuParent = document.getElementById('dropdown-div');
var dropdownMenu = document.getElementById('sidebar');    

// Onclick on .mobile-dropdown-link inside #dropdownMenuparent toggles visible/hidden on menu
dropdownMenuParent.onclick = function() {
    dropdownMenu.classList.toggle('sidebar-visible');
}
