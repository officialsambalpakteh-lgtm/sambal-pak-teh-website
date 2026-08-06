/* =========================================================
   SAMBAL PETAI PAK TEH
   ADVANCED ANIMATION JAVASCRIPT
========================================================= */



document.addEventListener(
"DOMContentLoaded",
function(){



    /* =========================
       INTERSECTION OBSERVER
       SCROLL REVEAL
    ========================= */


    const animatedElements =
    document.querySelectorAll(
        ".reveal, .fade-up, .fade-left, .fade-right"
    );



    const observer =
    new IntersectionObserver(
        function(entries){



            entries.forEach(function(entry){



                if(entry.isIntersecting){



                    entry.target.classList.add(
                        "active"
                    );



                    entry.target.classList.add(
                        "show"
                    );



                    observer.unobserve(
                        entry.target
                    );



                }



            });



        },

        {

            threshold:0.15

        }

    );





    animatedElements.forEach(
        function(element){


            observer.observe(element);


        }
    );









    /* =========================
       COUNTER ANIMATION
       (Future use)
    ========================= */


    const counters =
    document.querySelectorAll(
        ".counter"
    );



    counters.forEach(
    function(counter){



        let target =
        Number(
            counter.getAttribute(
                "data-target"
            )
        );



        let count = 0;



        let speed = target / 100;



        function updateCounter(){



            if(count < target){



                count += speed;


                counter.textContent =
                Math.ceil(count);



                setTimeout(
                    updateCounter,
                    20
                );



            }

            else {


                counter.textContent =
                target;


            }



        }



        updateCounter();



    });









    /* =========================
       IMAGE LAZY EFFECT
    ========================= */



    const images =
    document.querySelectorAll(
        "img"
    );



    images.forEach(function(image){



        image.addEventListener(
            "load",
            function(){


                image.classList.add(
                    "loaded"
                );


            }
        );



    });









    /* =========================
       BACK TO TOP
       SUPPORT
    ========================= */


    const backTop =
    document.querySelector(
        ".back-to-top"
    );



    if(backTop){



        window.addEventListener(
            "scroll",
            function(){



                if(window.scrollY > 500){



                    backTop.classList.add(
                        "show"
                    );



                }

                else {


                    backTop.classList.remove(
                        "show"
                    );


                }



            }
        );





        backTop.addEventListener(
            "click",
            function(){



                window.scrollTo({

                    top:0,

                    behavior:"smooth"

                });



            }
        );



    }





});
