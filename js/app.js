console.log("------------Sterowanie Buttonami---------");
document.addEventListener("DOMContentLoaded", function (){
    /**
     * Created by Jacek on 2016-01-12.
     */
    //SLIDER
    var prev = document.querySelector(".banner-prev");
    var next = document.querySelector(".banner-next");
    var pics = document.querySelectorAll(".banner-slide-photo li");
    var index = 0;

    //Automatyczny slider
    setInterval(nextSlide, 3000);

    //Listenery
    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);

    //Pierwsze zdjęcoe
    pics[index].classList.add("visible");

    function nextSlide(event) {
        pics[index].classList.remove("visible");
        pics[index].classList.remove("w3-animate-right");
        index++;
        if (index >= pics.length) {
            index = 0;
        }
        pics[index].classList.add("visible");
        pics[index].classList.add("w3-animate-right");
    }

    function prevSlide(event){
        pics[index].classList.remove("visible");
        pics[index].classList.remove("w3-animate-right");
        index--;
        if(index < 0) {
            index = pics.length - 1;
        }
        pics[index].classList.add("visible");
        pics[index].classList.add("w3-animate-right");
    }

    //GALLERY HOVER
    var pictureOne = document.querySelector(".gallery-picture-one");
    var pictureTwo = document.querySelector(".gallery-picture-two");

    pictureOne.addEventListener("mouseover", hideBackground);
    pictureOne.addEventListener("mouseout", displayBackground);

    pictureTwo.addEventListener("mouseover", hideBackground);
    pictureTwo.addEventListener("mouseout", displayBackground);

    function hideBackground(event){
        this.querySelector(".gallery-picture-background").style.display = "none"
    }

    function displayBackground(event){
        this.querySelector(".gallery-picture-background").style.display = "block";
    }

    //PRICING HOVER

    var price = document.querySelectorAll(".pricing-banners-el");

    for (var i = 0; i < price.length; i++) {
        price[i].addEventListener("mouseover", highlightIn);
        price[i].addEventListener("mouseout", highlightOut);
    }


    function highlightIn(event){
        this.style.background = "var(--color)";
        this.style.border = "2px solid var(--color)";
        this.querySelector(".pricing-banner-outer-circle").style.background = "var(--color)";
        this.querySelector(".pricing-banner-outer-circle").style.border = "2px solid var(--color)";
        this.querySelector(".pricing-banner-inner-circle").style.background = "#f1f1f1";
        this.querySelector(".pricing-banner-header").style.color = "#ffffff";
        this.querySelector(".pricing-banner-prices span:first-child").style.color = "var(--color)";
        this.querySelector(".pricing-banner-prices span:nth-child(2)").style.color = "var(--color)";
        this.querySelector(".pricing-banner-prices span:last-child").style.color = "var(--color)";
        this.querySelector(".pricing-banner-btn").style.background = "#ffffff";
        this.querySelector(".pricing-banner-btn").style.color = "var(--color)";
    }

    function highlightOut(event){
        this.style.background = "#F9F9F9";
        this.style.border = "2px solid #d8d8d8"
        this.querySelector(".pricing-banner-outer-circle").style.background = "#F9F9F9";
        this.querySelector(".pricing-banner-outer-circle").style.border = "2px solid #d8d8d8";
        this.querySelector(".pricing-banner-inner-circle").style.background = "#c0c0c0";
        this.querySelector(".pricing-banner-header").style.color = "var(--color)";
        this.querySelector(".pricing-banner-prices span:first-child").style.color = "#c2c2c2";
        this.querySelector(".pricing-banner-prices span:nth-child(2)").style.color = "#c2c2c2";
        this.querySelector(".pricing-banner-prices span:last-child").style.color = "#c2c2c2";
        this.querySelector(".pricing-banner-btn").style.background = "var(--color)";
        this.querySelector(".pricing-banner-btn").style.color = "#ffffff";
    }

});

