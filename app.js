/**
 * Define Global Variables
 * 
*/
let sections = document.querySelectorAll('section');
let docFragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function deActivateAndLowlight(sec){
  sec.classList.remove("active");
  document.getElementById('nav_sec'+sec.id[7]).style.backgroundColor = "silver";  
}

function activateAndHighlight(sec){
  
  sec.classList.add("active");        //Set sections as active
  document.getElementById('nav_sec'+sec.id[7]).style.backgroundColor = "white";   //Highlight the selected section
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


function build_navBar(){
  const bar = document.getElementById('navbar__list');
  for (const child of bar.childNodes){
    child.style.cssText = "padding: 15px";
    child.childNodes[0].style.color = "midnightblue";
  }
}


// Build  menu 
function build_menu(){
  for (const sec of sections){
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.innerText = sec.getAttribute("data-nav");
      a.setAttribute('href', "#" +sec.id);
      li.setAttribute('id', "nav_sec"+sec.id[7]);
      li.appendChild(a);
      docFragment.appendChild(li);


      a.addEventListener('click', function (event){
          event.preventDefault();
          sec.scrollIntoView({behavior:"smooth"});
          
      });
  }

  const nav_ul = document.getElementById("navbar__list");
  nav_ul.appendChild(docFragment);
  nav_ul.style.backgroundColor = 'silver';

}


//main 
build_menu();
build_navBar();

//onscroll to acheive the scrolling feature when a section is selected.
onscroll = function () {
  let currScroll = document.documentElement.getBoundingClientRect();
  for (const sec of sections){

  if (currScroll.y + sec.offsetTop >= 0 && currScroll.y + sec.offsetTop <=  0.2*(sec.offsetHeight)){
     for (const sc of sections){        //iterate over the sections to deactivate the unselected ones.
       if (sc != sec)               
        deActivateAndLowlight(sc);
     }
     activateAndHighlight(sec);         // activate the selected one
  }
}
};
