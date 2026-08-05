/* =========================
   SAMBAL PETAI PAK TEH
   PREMIUM SCRIPT
========================= */



// HEADER EFFECT

const header = document.querySelector(".header");


window.addEventListener("scroll", function(){


    if(window.scrollY > 40){

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.15)";

    }else{

        header.style.boxShadow =
        "none";

    }


});







// SCROLL ANIMATION


const animationItems = document.querySelectorAll(
".story-box, .product-card, .quality-card, .buy-grid div"
);



const observer = new IntersectionObserver(
(entries)=>{


entries.forEach(item=>{


if(item.isIntersecting){

item.target.style.opacity="1";

item.target.style.transform="translateY(0)";


}


});


},
{
threshold:0.15
}

);





animationItems.forEach(item=>{


item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition="all .8s ease";


observer.observe(item);


});








// FOOTER YEAR AUTO UPDATE


const year = new Date().getFullYear();


const footerText =
document.querySelector("footer p:last-child");



if(footerText){

footerText.innerHTML =
"© " + year + " Sambal Petai Pak Teh";

}







console.log(
"Sambal Petai Pak Teh Premium Website Ready"
);
