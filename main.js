const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let currentIndex = 1;

slider.style.width = `${slides.length * 100}%`;

function moveSlider() {
  if (currentIndex < slides.length) {
    slider.style.transform = `translateX(-${
      currentIndex * (100 / slides.length)
    }%)`;
    currentIndex++;
  } else {
    currentIndex = 0;
  }
}

setInterval(() => {
  moveSlider();
}, 3000);

function show(){
  var elem = document.getElementById("demo");
    
    elem.style.maxHeight = "100%";
}
function hide(){
   var elem = document.getElementById("demo");

    elem.style.maxHeight = "0";
}

/*scroll indicator*/

const scrollIndicator = document.getElementById('scrollIndicator');

window.addEventListener("scroll",()=>{

/* document.documentElement.scrollHeight - document.documentElement corresponds to the <html> tag, scrollHeight property returns the entire height (content + padding) of an element in px. */

// window.innerHeight - returns the viewport height

 const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

/* window.scrollY - scrollY property of the Window returns the number of pixels that the document is currently scrolled vertically. */
  
 const currentScrolled = window.scrollY;

 const scrollIndicatorWidth = Math.ceil( currentScrolled / scrollableHeight * 100 );

 scrollIndicator.style.width = `${scrollIndicatorWidth}%`;

})
