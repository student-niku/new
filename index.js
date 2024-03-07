const mobile_nav  =   document.querySelector(".mobail-nav-btn");
const nav_header   =   document.querySelector(".header")

const togglenavbar  =  () =>{
// nav_header.classlist.toggle("active")
nav_header.classList.toggle("active")

};

mobile_nav.addEventListener("click",   ()=>togglenavbar())


// ============================course====================================================
var container = document.getElementById('container')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');


var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = - currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};





function expandCollapse() {
    var theHeaders = document.querySelectorAll('.expandCollapse h2'), i;
  
    for (i = 0; i < theHeaders.length; i++) {
  
      var thisEl = theHeaders[i],
        theId = 'panel-' + i;
  
      var thisTarget = thisEl.parentNode.querySelector('.panel');
      
      if (!thisTarget) {
        continue;
      }
  
      // Create the button
      thisEl.innerHTML = '<button aria-expanded="false" aria-controls="' + theId + '">' + thisEl.textContent + '</button>';
  
      // Create the expandable and collapsible list and make it focusable
      thisTarget.setAttribute('id', theId);
      thisTarget.setAttribute('hidden', 'true');
    }
  
    // Make it click
    var theButtons = document.querySelectorAll('.expandCollapse button[aria-expanded][aria-controls]');
  
    for (i = 0; i < theButtons.length; i++) {
  
      theButtons[i].addEventListener('click', function(e) {
        var thisButton = e.target;
        var state = thisButton.getAttribute('aria-expanded') === 'false' ? true : false;
  
        thisButton.setAttribute('aria-expanded', state);
  
        document.getElementById(thisButton.getAttribute('aria-controls')).toggleAttribute('hidden', !state);
        
      });
    }
  }
  
  expandCollapse();