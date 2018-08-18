var navbarMenu = document.getElementById('navbar-menu')
var dropdownMenu = document.getElementById('dropdown-div');
var sidebarMenu = document.getElementById('sidebar');   

/* Booleans on visible items, false = not visible */
var navbarMenuVisible = true;
var sidebarVisible = false;

var largeDevices = true;

/*  Onclick on dropdown-div toggles visible/hidden on sidebar-menu */
dropdownMenu.onclick = function() {
    sidebarMenu.classList.toggle('sidebar-visible');
    sidebarVisible = !sidebarVisible;
}

/* Animation in form of a "typer-machine"  */
function titleAnimation() {
    var homePageTitle = document.getElementById('title-animation');
    var titleCharArray = homePageTitle.innerHTML.split("");
    var titleTemp = "";
    homePageTitle.innerHTML = ""; //empty h1 title inside #home-page-title
    
    (function theLoop (i) {
        setTimeout(function () {
          if (i < titleCharArray.length) {  
            titleTemp += titleCharArray[i];
            homePageTitle.innerHTML = titleTemp;
            i++;    
            theLoop(i);       
          }
        }, Math.floor((Math.random() * 40) + 100));
      })(0);
}

function resize() {
    var innerWidth = window.innerWidth;
    if(innerWidth <= 1200) {
        largeDevices = false;
        if(navbarMenuVisible) {
            navbarMenuVisible = false;
            navbarMenu.classList.toggle('navbar-menu-hidden');
            dropdownMenu.classList.toggle('dropdown-div-visible');
        }
    } else {
        largeDevices = true;
        if(!navbarMenuVisible) {
            navbarMenuVisible = true;
            navbarMenu.classList.toggle('navbar-menu-hidden');
            dropdownMenu.classList.toggle('dropdown-div-visible');
        }
    }
}

function scrolled() {
    var scrollTop = window.pageYOffset;
    if(scrollTop < 100 && largeDevices) {

        if(!navbarMenuVisible) {
            navbarMenuVisible = !navbarMenuVisible;
            navbarMenu.classList.toggle('navbar-menu-hidden');
            dropdownMenu.classList.toggle('dropdown-div-visible');
        }

        if(sidebarVisible) {
            sidebarVisible = !sidebarVisible;
            sidebarMenu.classList.toggle('sidebar-visible');
        }

    } else if (scrollTop >= 100 && largeDevices) {

        if(navbarMenuVisible) {
            navbarMenuVisible = !navbarMenuVisible;
            navbarMenu.classList.toggle('navbar-menu-hidden');
            dropdownMenu.classList.toggle('dropdown-div-visible');
        }
    } 
}

/* Resizing funcntion */
window.addEventListener("resize", function()  {
    resize();
}, false)


/* Scrolling function */
window.addEventListener("scroll", function() {
    scrolled();
}, false)



/* window onLoad */
window.onload = function() {
    resize();
    scrolled();
    titleAnimation();
}

