var dropdownMenu = document.getElementById('dropdown-menu');
    style = window.getComputedStyle(dropdownMenu);
    visibility = style.getPropertyValue('visibility');

 function showDropdownMenu() {
    if (visibility === 'hidden') {
        visibility = 'visible';
    } else if (visibility === 'visible') {
        visibility = 'hidden';
    }
    console.log(visibility);
    dropdownMenu.style.setProperty('visibility', visibility); 
}

/* window.addEventListener('resize', function() {
    if(window.innerWidth > 1024) {
        visibility = 'visible';
    }
    console.log(visibility);
    dropdownMenu.style.setProperty('visibility', visibility); 
}); */