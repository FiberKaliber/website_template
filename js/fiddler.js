var dropdownMenuParent = document.getElementById('dropdown-div');
var dropdownMenu = document.getElementById('sidebar');   

var dropdownMenuVisible = false;

/*  Onclick on dropdown-div toggles visible/hidden on sidebar-menu */
dropdownMenuParent.onclick = function() {
    dropdownMenu.classList.toggle('sidebar-visible');
    dropdownMenuVisible = !dropdownMenuVisible;
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

/* window onLoad */
window.onload = function() {
    titleAnimation();
}





function scrolled() {
    var scrollTop = window.pageYOffset;
    if(scrollTop === 0) {
        dropdownMenuParent.style.visibility = "hidden"
        if(dropdownMenuVisible) {
            dropdownMenuVisible = !dropdownMenuVisible;
            dropdownMenu.classList.toggle('sidebar-visible');
        }
    } else {
        dropdownMenuParent.style.visibility = "visible"
    }
}

window.addEventListener("scroll", function() {
    scrolled();
}, false)