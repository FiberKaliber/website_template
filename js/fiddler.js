var navbar = document.getElementById('navbar');
var dropdownMenu = document.getElementById('dropdown-div');
var navbarMenu = document.getElementById('navbar-menu');
var sidebarMenu = document.getElementById('sidebar');   
var roller = document.getElementById('roller');

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
        largeDevices = true;
    } else {
        largeDevices = false;
    }
}


/* Resizing funcntion */
window.addEventListener("resize", function()  {
    resize();
}, false)


function scrolled() {
    var scrollTop = window.pageYOffset;
    var page1 = window.innerHeight;
    var lenght = document.body.scrollHeight - page1;
    var pct = Math.floor((scrollTop/lenght) * 100);
    console.log(pct);

    roller.style.width = pct + "%";
    if(scrollTop < 100 && !largeDevices) {
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

