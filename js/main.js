


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    freeMode: true,
    slideShadows: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    autoplay:true,
    
  });


  AOS.init();

/*ANTIGUO SWIMPER*/
/*
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth:0,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },loop:true,
    autoplay:true,
})
*/

/*AOS INICIALIZACION*/

   /* AOS.init();*/

   



/** SOLICITUD DE UBICACION DE LA PAGINA - EMITIDA EN CONSOLE */
/*
window.addEventListener("scroll", function(){
        console.log(window.pageYOffset)

})
* */



// MENU 

/**APARECER Y DESAPARECER MENU GRADIENTE */
/** 
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburger ")[0].addEventListener("click", function(){
    enlacesHeader.classList.toggle("menudos")
})

*/



// JS SWIPER- GALERIA


