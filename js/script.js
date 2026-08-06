/* =========================================================
   SAMBAL PETAI PAK TEH
   MAIN JAVASCRIPT
========================================================= */



document.addEventListener("DOMContentLoaded", function(){



    /* =========================
       MOBILE MENU
    ========================= */


    const menuToggle = document.querySelector(".menu-toggle");

    const navbar = document.querySelector(".navbar");



    if(menuToggle && navbar){



        menuToggle.addEventListener("click", function(){


            navbar.classList.toggle("active");


            menuToggle.classList.toggle("active");



        });




        const navLinks = document.querySelectorAll(".navbar a");



        navLinks.forEach(function(link){


            link.addEventListener("click", function(){


                navbar.classList.remove("active");


                menuToggle.classList.remove("active");



            });



        });



    }








    /* =========================
       STICKY HEADER EFFECT
    ========================= */



    const header = document.querySelector(".header");



    window.addEventListener("scroll", function(){



        if(header){



            if(window.scrollY > 50){


                header.classList.add("scrolled");


            }

            else {


                header.classList.remove("scrolled");


            }



        }



    });








    /* =========================
       SCROLL REVEAL
    ========================= */


    const revealElements =
    document.querySelectorAll(
        ".reveal, .fade-up"
    );



    function revealOnScroll(){



        revealElements.forEach(function(element){



            const elementTop =
            element.getBoundingClientRect().top;



            const windowHeight =
            window.innerHeight;



            if(elementTop < windowHeight - 100){



                element.classList.add("active");


                element.classList.add("show");



            }



        });



    }




    window.addEventListener(
        "scroll",
        revealOnScroll
    );



    revealOnScroll();








    /* =========================
       SMOOTH SCROLL
    ========================= */


    const anchors =
    document.querySelectorAll(
        'a[href^="#"]'
    );



    anchors.forEach(function(anchor){



        anchor.addEventListener(
            "click",
            function(e){



                const target =
                document.querySelector(
                    this.getAttribute("href")
                );



                if(target){



                    e.preventDefault();



                    target.scrollIntoView({

                        behavior:"smooth"

                    });



                }



            }
        );



    });








    /* =========================
       AUTO YEAR FOOTER
    ========================= */


    const year =
    document.querySelector(".current-year");



    if(year){


        year.textContent =
        new Date().getFullYear();



    }




});
