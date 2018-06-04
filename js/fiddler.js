var navbar = document.getElementById('navbar');
    style = window.getComputedStyle(navbar);
    display = style.getPropertyValue('display');

function showDropdownMenu() {
    if (display === 'none') {
        display = 'block';
    } else if (display === 'block') {
        display = 'none';
    }
    console.log(display);
    navbar.style.setProperty('display', display);
}

window.addEventListener('resize', function() {
    if(window.innerWidth <= 1024) {
        display = 'none';
    } else if (window.innerWidth > 1024) {
        display = 'block';
    }
    console.log(display);
    navbar.style.setProperty('display', display);
});