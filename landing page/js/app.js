
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 *
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
sections = document.querySelectorAll('section');
docFragment = document.createDocumentFragment();


for (const sec of sections){
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerText = sec.getAttribute("data-nav");
    a.setAttribute('href', "#" +sec.id);
    a.addEventListener('click', function scrolling (event){
        event.preventDefault();
        sec.scrollIntoView({behavior:"smooth"});
    });
    sec.addEventListener('scroll', function(){
      domRect = sec.getBoundingClientRect();
      console.log(domRect);
    })
    li.appendChild(a);
    docFragment.appendChild(li);
}

nav_ul = document.getElementById("navbar__list");
nav_ul.appendChild(docFragment);

onscroll = function () {
  let currScroll = document.documentElement.getBoundingClientRect();
  for (const sec of sections){

  if (currScroll.y + sec.offsetTop >= 0 && currScroll.y + sec.offsetTop <=  0.4*(sec.offsetHeight)){
     for (const sc of sections){
       if (sc != sec)
        sc.classList.remove("active");
     }
     sec.classList.add("active");
  }
}
};
