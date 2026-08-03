/* =====================================
   SAMBAL PAK TEH WEBSITE
   CUSTOM JAVASCRIPT
===================================== */



// =====================================
// NAVBAR EFFECT ON SCROLL
// =====================================


window.addEventListener("scroll", function () {


    const navbar = document.querySelector(".custom-navbar");


    if (window.scrollY > 50) {


        navbar.style.background = "rgba(0,0,0,0.95)";


    } else {


        navbar.style.background = "rgba(0,0,0,0.85)";


    }


});






// =====================================
// BACK TO TOP BUTTON
// =====================================


const backToTop = document.getElementById("backToTop");



window.addEventListener("scroll", function(){


    if(window.scrollY > 400){


        backToTop.style.display = "flex";


    }

    else{


        backToTop.style.display = "none";


    }


});





backToTop.addEventListener("click", function(){


    window.scrollTo({


        top:0,

        behavior:"smooth"


    });


});








// =====================================
// SMOOTH SCROLL NAVIGATION
// =====================================


document.querySelectorAll('a[href^="#"]').forEach(anchor => {


    anchor.addEventListener("click", function(e){


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({


                behavior:"smooth"


            });


        }


    });


});







// =====================================
// MOBILE NAVBAR AUTO CLOSE
// =====================================


const navLinks = document.querySelectorAll(".nav-link");


const menuToggle = document.getElementById("navbarMenu");



navLinks.forEach(function(link){


    link.addEventListener("click", function(){


        if(menuToggle.classList.contains("show")){


            const bsCollapse = new bootstrap.Collapse(
                menuToggle
            );


            bsCollapse.hide();


        }


    });


});







// =====================================
// PRODUCT WHATSAPP MESSAGE
// =====================================



function orderSambal(){


    const phone = "60132981929";


    const message =
    "Assalamualaikum, saya berminat untuk membeli Sambal Petai Pak Teh 200ml RM16.90.";


    const url =
    "https://wa.me/" + phone +
    "?text=" +
    encodeURIComponent(message);



    window.open(url,"_blank");


}







// =====================================
// SCROLL REVEAL ANIMATION
// =====================================



const revealElements = document.querySelectorAll(
    ".feature-box, .step-box, .testimonial-card, .product-card"
);



function revealOnScroll(){


    revealElements.forEach(function(element){


        const position =
        element.getBoundingClientRect().top;


        const screenHeight =
        window.innerHeight;



        if(position < screenHeight - 100){


            element.style.opacity="1";

            element.style.transform="translateY(0)";


        }


    });


}



revealElements.forEach(function(element){


    element.style.opacity="0";


    element.style.transform="translateY(50px)";


    element.style.transition=
    "all .8s ease";


});



window.addEventListener(
    "scroll",
    revealOnScroll
);



revealOnScroll();







// =====================================
// CURRENT YEAR FOOTER
// =====================================


const year = new Date().getFullYear();



const footerText =
document.querySelector(".footer-section p");



if(footerText){


    footerText.innerHTML =
    "© " + year +
    " Sambal Pak Teh. All Rights Reserved.";


}








// =====================================
// PAGE LOADING EFFECT
// =====================================


window.addEventListener(
"load",
function(){


    document.body.classList.add("loaded");


});
