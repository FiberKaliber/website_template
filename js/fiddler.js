var dropdownMenuParent = document.getElementById('dropdown-div');
var dropdownMenu = document.getElementById('sidebar');   

/*  Onclick on dropdown-div 
    toggles visible/hidden on sidebar-menu */
dropdownMenuParent.onclick = function() {
    dropdownMenu.classList.toggle('sidebar-visible');
}

/*   */
function titleAnimation() {
    var homePageTitle = document.getElementById('home-page-title');
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
        }, Math.floor((Math.random() * 400) + 100));
      })(0);
}

window.onload = function() {
    titleAnimation();

    
}

