/* First defining global variables */

/* sections variable will be having the available sections */
const sections = Array.from(document.querySelectorAll('section'));
/* navlist variable will be storing the navigation bar elements */
const navList = document.getElementById('navbar__list');


/* Now the helping functions will be declared */

/* First function is for the creation of the list items in the navigation bar */

const navBuild = () => {
  /* looping over the current sections , taking their names and ID in order to show them on the navbar and also navigate to them using the ID */
  for (section of sections){
    /* Get section name and id */
    sectionId = section.getAttribute('id');
    sectionName = section.getAttribute('data-nav');
    /* Create a list element for the current section */
    newListItem = document.createElement('li');
    newListItem.innerHTML = `<a class='menu__link' href='#${sectionId}'> ${sectionName} </a>`;
    /* Use appendChild to add the item to the navbar */
    navList.appendChild(newListItem);
  }
}

/* Now we need a function to determine the element being viewed */

const  viewedSection = (element) => {
  let sectionPosition = element.getBoundingClientRect().top;
  return (sectionPosition > -125 && sectionPosition < 95);
}

/* Giving the viewed section its own styling by passing active class and removing it from the not viewed class */
const addActive = (section) => {
  section.classList.add('your-active-class');
}

const removeActive = (section) => {
  section.classList.remove('your-active-class');
}

const toggleActiveClass = () => {
  for(section of sections) {
    if (viewedSection(section)){
      /* We will check first whether the section is already having the active class */
      if (!section.classList.contains('your-active-class')) {
        /* If it isn't then add the active class */
        addActive(section);
      }
    } /* if the section isn't viewed then remove the active class */
    else {
      removeActive(section);
    }
  }
}

/* starting the navgiation bar */
navBuild() ; 

/* Adding scroll event listener to activate the toggle function when a section is viewed */
document.addEventListener('scroll' , toggleActiveClass);

/* To scroll smoothly to the clicked section */
let links = document.querySelectorAll('.menu__link');
for(let link of links) {
link.addEventListener('click', (sec) => {
    sec.preventDefault();                                              // prevent jumping right to the section
    let clickedLink = link.getAttribute('href');                      // getting the id of the clicked link
    let targetSection = document.querySelector(clickedLink);         // storing the targeted section to be able to scroll to it
    targetSection.scrollIntoView({behavior : 'smooth' , block : 'center' })      // using scroll into view with smooth behavior 
        })
    }

