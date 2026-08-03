// Sambal Pak Teh Website

console.log("Website Sambal Pak Teh berjaya dimuatkan");


// Smooth scroll untuk menu

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});
