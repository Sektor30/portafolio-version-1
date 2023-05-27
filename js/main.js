


var swiper = new Swiper(".mySwiper",{
    effect: "coverflow",
    grabCursor: true ,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect:{
        rotate:10,
        strech:0,
        depth:300,
        modifier:2,
        slideShadows: true,
    },
    loop:true,
    autoplay:true,

});



/*AOS INICIALIZACION*/

   /* AOS.init();*/




let ubicacionPrincipal = window.pageYOffset

/** SOLICITUD DE UBICACION DE LA PAGINA - EMITIDA EN CONSOLE */
/*
window.addEventListener("scroll", function(){
        console.log(window.pageYOffset)

})
* */





window.addEventListener("scroll", function(){
    let desplazamientoActual= window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        this.document.getElementsByTagName("header") [0].style.top = "0px"
        this.document.getElementsByTagName("header") [0].style.backgroundColor = "#303952"
    } else{
        document.getElementsByTagName("header")[0].style.top = "-100px"
        document.getElementsByTagName("header")[0].style.backgroundColor = "#000"
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

/*
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburger ")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburger")[0].style.color = "#c23c55";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburger")[0].style.color = "#000";
        semaforo= true;
    }
    
    enlacesHeader.classList.toggle("menudos")
})
*/



// JS SWIPER- GALERIA


