var navbar = document.getElementById('navbar');
    style = window.getComputedStyle(navbar);
    display = style.getPropertyValue('display');

var dropDownButton = document.getElementById('mobile-dropdown-link');
    styleMobile = window.getComputedStyle(dropDownButton);
    visibility = styleMobile.getPropertyValue('visibility');

function showDropdownMenu() {
    
    if (display === 'none') {
        display = 'block';
    } else if (display === 'block') {
        display = 'none';
    }
    console.log(display);
    navbar.style.setProperty('display', display);
}
