console.log("------------Sterowanie Buttonami---------");
document.addEventListener("DOMContentLoaded", function (){
    /**
     * Created by Jacek on 2016-01-12.
     */

    var prev = document.querySelector(".banner-prev");
    var next = document.querySelector(".banner-next");
    var pics = document.querySelectorAll(".banner-slide-photo li");
    var index = 0;

    //Listenery
    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);

    //Automatyczny slider
    setInterval(nextSlide, 3000);

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

});

