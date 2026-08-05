
/* =====================
   MOBILE MENU READY
===================== */


console.log("Sambal Petai Pak Teh Website Loaded");



/* =====================
   SCROLL EFFECT
===================== */


window.addEventListener("scroll", function(){

    const header = document.querySelector(".header");


    if(window.scrollY > 50){

        header.style.background = "#fffaf2";

    }else{

        header.style.background = "white";

    }


});





/* =====================
   IMAGE CHECK
===================== */


window.addEventListener("load", function(){


    console.log("Website siap dibuka");


});
