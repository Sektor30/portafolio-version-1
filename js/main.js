

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    freeMode: true,
    slideShadows: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    autoplay:true,
    
  });







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

   AOS.init();



/** SOLICITUD DE UBICACION DE LA PAGINA - EMITIDA EN CONSOLE */
/*
window.addEventListener("scroll", function(){
        console.log(window.pageYOffset)

})
* */

let ubicacionPrincipal = window.pageYOffset


window.addEventListener("scroll", function(){
    let desplazamientoActual= window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        this.document.getElementsByTagName("nav") [0].style.top = "0px"
    } else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal= desplazamientoActual;

})



// MENU 

/**APARECER Y DESAPARECER MENU GRADIENTE */
/** 
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburger ")[0].addEventListener("click", function(){
    enlacesHeader.classList.toggle("menudos")
})

*/




let enlacesHeader = document.querySelectorAll("enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburger ")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburger")[0].style.color = "#c23c55";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburger")[0].style.color = "#000";
        semaforo= true;
    }
    
    enlacesHeader.classList.toggle(".menudos")
})



// JS SWIPER- GALERIA


