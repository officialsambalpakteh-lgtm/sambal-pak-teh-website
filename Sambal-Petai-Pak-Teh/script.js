 
/* ==========================
   WEBSITE LOADING
========================== */


window.addEventListener("load", function(){

const loader = document.querySelector(".loader");


if(loader){

setTimeout(()=>{

loader.style.opacity="0";


setTimeout(()=>{

loader.style.display="none";

},500);


},800);


}

});







/* ==========================
   MOBILE MENU
========================== */


const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");



if(menuToggle){


menuToggle.addEventListener("click",()=>{


navMenu.classList.toggle("active");


menuToggle.classList.toggle("open");


});


}








/* ==========================
   CLOSE MENU AFTER CLICK
========================== */


const navLinks = document.querySelectorAll(".nav-menu a");



navLinks.forEach(link=>{


link.addEventListener("click",()=>{


navMenu.classList.remove("active");


});


});








/* ==========================
   SCROLL ANIMATION
========================== */


const fadeElements = document.querySelectorAll(
".product-card, .adv-card, .order-box, .gallery-item, .contact-box"
);



function reveal(){


fadeElements.forEach(element=>{


const position =
element.getBoundingClientRect().top;



const screenHeight =
window.innerHeight;



if(position < screenHeight - 100){


element.classList.add("fade");


setTimeout(()=>{

element.classList.add("show");

},100);


}


});


}



window.addEventListener(
"scroll",
reveal
);



reveal();








/* ==========================
   HEADER SHADOW EFFECT
========================== */


const header =
document.querySelector(".header");



window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 50){


header.style.boxShadow =
"0 5px 20px rgba(0,0,0,0.15)";


}else{


header.style.boxShadow =
"0 3px 15px rgba(0,0,0,0.08)";


}


});








/* ==========================
   AUTO YEAR FOOTER
========================== */


const year =
new Date().getFullYear();



const footerText =
document.querySelector(".footer p");



if(footerText){


footerText.innerHTML =
`© ${year} Sambal Petai Pak Teh.
All Rights Reserved.`;

}

