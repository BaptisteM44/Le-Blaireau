/* script navbar flow */
navbar = document.getElementById('navbar');
navElements = document.getElementById('nav-elements')

window.addEventListener('scroll', function(){
    const scroll = this.document.documentElement.scrollTop;

    console.log(scroll);
    if (scroll > 200){
        navbar.style.height = "8vh";
        navElements.style.height = "8vh";
        navbar.style.background = "rgba(255, 255, 255, 0.589)"
        menu.style.background = "rgba(255, 255, 255, 0.589)"
        logo.style.height = "70px"
        logo.style.width = "70px"
    } else {
        navbar.style.height = "11vh";
        navElements.style.height = "11vh";
        navbar.style.background = "rgb(255, 255, 255)"
        menu.style.background = "rgb(255, 255, 255)"
        logo.style.height = "110px"
        logo.style.width = "110px"
    }

})
/* END navbar flow */
$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#menu").slideToggle();
});


/* Parallax */
const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.8 + "px";
})
/* END Parallax */
