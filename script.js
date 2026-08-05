/* =========================
   SAMBAL PETAI PAK TEH
   PREMIUM SCRIPT
========================= */



// HEADER SCROLL EFFECT

const header = document.querySelector(".header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.12)";

    }else{

        header.style.boxShadow =
        "none";

    }


});







// SCROLL ANIMATION


const sections =
document.querySelectorAll(
".story-box, .product-card, .quality-card, .limited-box, .review-card, .step"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},
{
threshold:0.15
}
);



sections.forEach(section=>{


section.classList.add("hidden");


observer.observe(section);


});








// FOOTER YEAR AUTOMATIC


const year =
new Date().getFullYear();


const footer =
document.querySelector("footer p:last-child");


if(footer){

footer.innerHTML =
"© " + year + " All Rights Reserved";

}








// MOBILE MENU PREPARATION


console.log(
"Sambal Petai Pak Teh Premium Website Loaded"
);

