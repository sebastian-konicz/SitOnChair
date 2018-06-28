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


    //CALCULATOR
    var arrowProduct = document.querySelector(".arrow-product");
    var arrowColor = document.querySelector(".arrow-color");
    var arrowPattern = document.querySelector(".arrow-pattern");

    var panelLeft = document.querySelector(".panel_left");
    var panelRight = document.querySelector(".panel_right");
    var productPrice = panelRight.querySelector(".product");
    var colorPrice = panelRight.querySelector(".color");
    var patternPrice = panelRight.querySelector(".pattern");
    var totalPrice = document.querySelector(".sum_total");


    var productPrice = 0;
    var colorPrice = 0;
    var patternPrice = 0;
    var transportPrice = 0;
    var summaryPrice = 0;

    function summary(){
        summaryPrice = productPrice + colorPrice + patternPrice + transportPrice ;
        totalPrice.innerText = summaryPrice;
    }

    arrowProduct.addEventListener("click", function (event) {
        //Rozwijanie listy
        var dropDown = this.parentElement;
        var list = dropDown.querySelector(".list_panel");
        list.classList.toggle("list_hide");

        var choice = dropDown.querySelectorAll("li");
        for (var i = 0; i < choice.length; i++) {

            choice[i].addEventListener("click", function select(event) {

                var dropDown = this.parentElement.parentElement;
                var listLabel = dropDown.querySelector(".list_label");
                listLabel.innerText = this.innerText;

                var description = panelLeft.querySelector("." + this.className);
                var value = panelRight.querySelector("." + this.className);

                description.innerText = this.innerText;
                value.innerText = this.dataset.price;

                productPrice = parseInt(this.dataset.price);

                summary();
                list.classList.add("list_hide");
            });
        }
    });

    arrowColor.addEventListener("click", function (event) {
        //Rozwijanie listy
        var dropDown = this.parentElement;
        var list = dropDown.querySelector(".list_panel");
        list.classList.toggle("list_hide");

        var choice = dropDown.querySelectorAll("li");
        for (var i = 0; i < choice.length; i++) {

            choice[i].addEventListener("click", function select(event) {

                var dropDown = this.parentElement.parentElement;
                var listLabel = dropDown.querySelector(".list_label");
                listLabel.innerText = this.innerText;

                var description = panelLeft.querySelector("." + this.className);
                var value = panelRight.querySelector("." + this.className);

                description.innerText = this.innerText;
                value.innerText = this.dataset.price;

                colorPrice = parseInt(this.dataset.price);

                summary();
                list.classList.add("list_hide");
            });
        }
    });


    arrowPattern.addEventListener("click", function (event) {
        //Rozwijanie listy
        var dropDown = this.parentElement;
        var list = dropDown.querySelector(".list_panel");
        list.classList.toggle("list_hide");

        var choice = dropDown.querySelectorAll("li");
        for (var i = 0; i < choice.length; i++) {

            choice[i].addEventListener("click", function select(event) {

                var dropDown = this.parentElement.parentElement;
                var listLabel = dropDown.querySelector(".list_label");
                listLabel.innerText = this.innerText;

                var description = panelLeft.querySelector("." + this.className);
                var value = panelRight.querySelector("." + this.className);

                description.innerText = this.innerText;
                value.innerText = this.dataset.price;

                patternPrice = parseInt(this.dataset.price);

                summary();
                list.classList.add("list_hide");
            });
        }
    });


    //TRANSPORT
    var transportBox = document.getElementById("transport");
    var transportTitle = panelLeft.querySelector(".transport");
    var transportValue = panelRight.querySelector(".transport");

    transportBox.addEventListener('click', function() {
        if (transportBox.checked) {
            transportTitle.innerHTML = "Transport";
            transportValue.innerHTML = transportBox.dataset.transportPrice;
            transportPrice = parseInt(transportBox.dataset.transportPrice);
            summary();
        } else {
            transport.innerHTML = "";
            transportValue.innerHTML = "0";
            transportPrice = 0;
            summary();
        }
    });

});

//
// //CALCULATOR
// var arrows = document.querySelectorAll(".list_arrow");
// var panelLeft = document.querySelector(".panel_left");
// var panelRight = document.querySelector(".panel_right");
// var productPrice = panelRight.querySelector(".product");
// var colorPrice = panelRight.querySelector(".color");
// var patternPrice = panelRight.querySelector(".pattern");
// var totalPrice = document.querySelector(".sum_total");
//
// // var productPrice = 0;
// // var colorPrice = 0;
// // var fabricPrice = 0;
// // var transportPrice = 0;
// // var summaryPrice = 0;
//
//
// for (var j = 0 ; j < arrows.length; j++){
//     arrows[j].addEventListener("click", show);
// }
//
// function show(event) {
//     //Rozwijanie listy
//     var dropDown = this.parentElement;
//     var list = dropDown.querySelector(".list_panel");
//     list.classList.toggle("list_hide");
//
//
//     //Wybieranie poszczególnych elementów
//     var choice = dropDown.querySelectorAll("li");
//     for (var i = 0 ; i < choice.length; i++){
//         choice[i].addEventListener("click", select)
//     }
//
//     function select(event){
//         var dropDown = this.parentElement.parentElement;
//         var listLabel =  dropDown.querySelector(".list_label");
//         listLabel.innerText = this.innerText;
//
//         var description = panelLeft.querySelector("."+this.className);
//         var value = panelRight.querySelector("."+this.className);
//
//         description.innerText = this.innerText;
//         value.innerText = this.dataset.price;
//
//         var price = parseInt(this.dataset.price);
//         summary();
//         list.classList.add("list_hide");
//     }
// }
//
// //TRANSPORT
// var transportBox = document.getElementById("transport");
// var transportTitle = panelLeft.querySelector(".transport");
// var transportPrice = panelRight.querySelector(".transport");
//
// transportBox.addEventListener('click', function() {
//     if (transportBox.checked) {
//         transportTitle.innerHTML = "Transport";
//         transportPrice.innerHTML = transportBox.dataset.transportPrice;
//         summary();
//     } else {
//         transport.innerHTML = "";
//         transportPrice.innerHTML = "0";
//     }
// });
//
// function summary(){
//     summaryPrice = parseInt(productPrice.innerText) + parseInt(colorPrice.innerText) + parseInt(patternPrice.innerText) +  parseInt(transportPrice.innerText);
//     totalPrice.innerText = summaryPrice;
// }



