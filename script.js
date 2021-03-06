/* script navbar flow */
navbar = document.getElementById('navbar');
navElements = document.getElementById('nav-elements')
navbarlinks = document.getElementById('navbarlinks')

window.addEventListener('scroll', function(){
    const scroll = this.document.documentElement.scrollTop;
    if (scroll > 200){
        navbar.style.height = "8vh";
        navElements.style.height = "8vh";
        navbar.style.background = "rgba(255, 255, 255, 0.589)"
        navbarlinks.style.top = "65px"
    } else {
        navbar.style.height = "11vh";
        navElements.style.height = "11vh";
        navbar.style.background = "rgb(255, 255, 255)"
        navbarlinks.style.top = "90px"
    }

})
/* END navbar flow */

/* BURGER */
function toggleMenu () {  
  const navbar = document.querySelector('.nav-elements');
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', (e) => {    
    navbar.classList.toggle('show-nav');
  });    
}
toggleMenu();

/* Parallax */
const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.8 + "px";
})
/* END Parallax */
