/* =====================================
   SAMBAL PETAI PAK TEH
   WEBSITE SCRIPT
===================================== */



// ===============================
// MOBILE MENU
// ===============================


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");



menuBtn.addEventListener("click", () => {


    if(navLinks.style.display === "flex"){

        navLinks.style.display = "none";

    }

    else{

        navLinks.style.display = "flex";

        navLinks.style.flexDirection = "column";

        navLinks.style.position = "absolute";

        navLinks.style.top = "80px";

        navLinks.style.right = "20px";

        navLinks.style.background = "white";

        navLinks.style.padding = "20px";

        navLinks.style.borderRadius = "15px";

    }


});







// ===============================
// AUTO YEAR FOOTER
// ===============================


const footerYear = document.querySelector("footer p");


const currentYear = new Date().getFullYear();


footerYear.innerHTML =

`© ${currentYear} Sambal Petai Pak Teh.
Semua Hak Terpelihara.`;








// ===============================
// SMOOTH SCROLL
// ===============================


document.querySelectorAll('a[href^="#"]').forEach(anchor => {


    anchor.addEventListener("click", function(e){


        e.preventDefault();


        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });


    });


});








// ===============================
// SIMPLE FADE ANIMATION
// ===============================


const sections = document.querySelectorAll("section");



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.style.opacity = "1";

        entry.target.style.transform = "translateY(0)";


    }


});


},{

threshold:0.15

});





sections.forEach(section=>{


    section.style.opacity="0";

    section.style.transform="translateY(30px)";

    section.style.transition="0.8s";


    observer.observe(section);


});








// ===============================
// BUTTON WHATSAPP
// ===============================


// Tukar nombor WhatsApp bila dah ada


const whatsappNumber = "601XXXXXXXXX";


const whatsappMessage = 
"Saya berminat dengan Sambal Petai Pak Teh 200ml";



document.querySelectorAll(".btn").forEach(button=>{


if(button.innerText.includes("WhatsApp")){


button.href =

`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


button.target="_blank";


}



});
