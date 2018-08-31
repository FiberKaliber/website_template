/*========================== 
          Variables
==============================*/

var navbar = document.getElementById('navbar');
var dropdownMenu = document.getElementById('dropdown-div');
var navbarMenu = document.getElementById('navbar-menu');
var sidebarMenu = document.getElementById('sidebar');   
var roller = document.getElementById('roller');

/* Booleans on visible items, false = not visible */
var navbarMenuVisible = true;
var sidebarVisible = false;
var largeDevices = true;

/* Vars for height on page and scroll lenght */
var winHeight, docHeight, length, throttlescroll


/*========================== 
          onClicks
==============================*/

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


/*======================================================================= 
      Functions for scroll effect and determining devices width size
=========================================================================*/

/* functions that on start give varibles winHeight, docheight, length a value for functions below */
getNewMeasurements();
deviceSize();
scrolled();

/* James Padolsey's function */
function getDocHeight() {
    var doc = document;
    return Math.max(
        doc.body.scrollHeight, doc.documentElement.scrollHeight,
        doc.body.offsetHeight, doc.documentElement.offsetHeight,
        doc.body.clientHeight, doc.documentElement.clientHeight
    )
}

/* New measurements for window height/width */
function getNewMeasurements() {
    winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight
    docHeight = getDocHeight();
    lenght = docHeight - winHeight;
}

/* Detects if window is a large device or not */
function deviceSize() {
    var innerWidth = window.innerWidth;
    if(innerWidth <= 1200) {
        largeDevices = true;
    } else {
        largeDevices = false;
    }
}

/* Navbar will respond when scrolled on page || How much page have scrolled in % */
function scrolled() {

    /* Scroll effect which determining lenght on roller in %*/
    var heightOffset =  window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var amountScrolled = Math.floor((heightOffset/lenght) * 100);
    roller.style.width = amountScrolled + "%"; /**/

    /* Scrolling after 100px will toggle navbar and sidebar */
    if(heightOffset < 100 && !largeDevices) {
        if(!navbarMenuVisible) {
            navbar.classList.toggle('navbar-hidden');
            navbarMenuVisible = !navbarMenuVisible;
        }
        if(sidebarVisible) {
            sidebarVisible = !sidebarVisible;
            sidebarMenu.classList.toggle('sidebar-visible');
        }
    } else if (!largeDevices) {
        if(navbarMenuVisible) {
            navbar.classList.toggle('navbar-hidden');
            navbarMenuVisible = !navbarMenuVisible;
        }
    }
}

/*========================== 
        Event Listeners
==============================*/

/* Scrolling function */
window.addEventListener("scroll", function() {
    clearTimeout(throttlescroll)
        throttlescroll = setTimeout(function(){ 
        scrolled()
    }, 1)
}, false)


/* Resizing funcntion */
window.addEventListener("resize", function()  {
    getNewMeasurements();
    deviceSize();
}, false)


/* window onLoad */
window.onload = function() {
    titleAnimation();
}

