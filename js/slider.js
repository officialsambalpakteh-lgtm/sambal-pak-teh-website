/* =========================================================
   SAMBAL PETAI PAK TEH
   SLIDER JAVASCRIPT
========================================================= */



document.addEventListener(
"DOMContentLoaded",
function(){



    /* =========================
       BASIC IMAGE SLIDER
       (Gallery / Product)
    ========================= */


    const sliders =
    document.querySelectorAll(
        ".image-slider"
    );



    sliders.forEach(function(slider){



        const images =
        slider.querySelectorAll("img");



        let current = 0;



        if(images.length > 1){



            images.forEach(function(img,index){


                if(index !== 0){

                    img.style.display="none";

                }


            });




            setInterval(function(){



                images[current].style.display="none";



                current++;



                if(current >= images.length){


                    current = 0;


                }



                images[current].style.display="block";



            },4000);



        }



    });








    /* =========================
       PRODUCT IMAGE PREVIEW
    ========================= */


    const productImages =
    document.querySelectorAll(
        ".product-gallery img"
    );



    productImages.forEach(function(image){



        image.addEventListener(
            "click",
            function(){



                const mainImage =
                document.querySelector(
                    ".main-product-image"
                );



                if(mainImage){



                    mainImage.src =
                    this.src;



                }



            }
        );



    });








    /* =========================
       AUTO HERO EFFECT
    ========================= */



    const heroImage =
    document.querySelector(
        ".hero-image img"
    );



    if(heroImage){



        heroImage.classList.add(
            "float"
        );



    }






});
