document.addEventListener("DOMContentLoaded",function(){

    var dropMenu = document.querySelector(".menu_list .menu_item");
    var chairs = document.querySelectorAll(".chair");
    var image = document.querySelector(".galery_img");
    var prev = document.querySelector(".lt");
    var next = document.querySelector(".gt");
    var imagesArr = ["url('images/black_chair.png')", "url('images/orange_chair.png')", "url('images/red_chair.png')"];
    var index = 0;

    var listLabel = document.querySelectorAll(".list_label");
    var listArrow = document.querySelectorAll(".list_arrow");
    var listPanel = document.querySelectorAll(".list_panel");
    var transportCheck = document.getElementById("transport");
    var sumDiv = document.querySelector(".sum");
    var sum = 0;
    var title = document.querySelector(".title");
    var titleValue = document.querySelector(".panel_right > h4");
    var color = document.querySelector(".color");
    var colorValue = document.querySelector(".panel_right > .color");
    var pattern = document.querySelector(".pattern");
    var patternValue = document.querySelector(".panel_right > .pattern");
    var transport = document.querySelector(".transport");
    var transportValue = document.querySelector(".panel_right > .transport");


    dropMenu.addEventListener("mouseover",function(){
        this.querySelector(".dropdown_menu").style.display = "block";
    })
    dropMenu.addEventListener("mouseout",function(){
        this.querySelector(".dropdown_menu").style.display = "none";
    })

    chairs.forEach(function(a) {
        return a.addEventListener("mouseover", function () {
            this.querySelector(".transparent").style.display = "none";
        })
    })

    chairs.forEach(function(a) {
        return a.addEventListener("mouseout", function () {
            this.querySelector(".transparent").style.display = "block";
        })
    })

    next.addEventListener("click",function(){
        index++;
        if(index == 3){
            index = 0;
        }
        image.style.backgroundImage =  imagesArr[index];
    })

    prev.addEventListener("click",function(){
        index--;
        if(index == -1){
            index = 2;
        }
        image.style.backgroundImage =  imagesArr[index];
    })

    listArrow.forEach(function(a){
        return a.addEventListener("click",function(){
            if(this.nextElementSibling.style.display == "block"){
                this.nextElementSibling.style.display = "none";
            } else {
                this.nextElementSibling.style.display = "block";
                this.nextElementSibling.querySelectorAll("li").forEach(function (b) {
                    return b.addEventListener("click",function(){
                        this.parentElement.previousElementSibling.previousElementSibling.innerText = this.innerText;
                        this.parentElement.previousElementSibling.previousElementSibling.dataset.price = this.dataset.price;
                        this.parentElement.previousElementSibling.previousElementSibling.style.color = "black";
                        this.parentElement.style.display = "none";
                        updatePrice();
                        updeteSummary();
                    })
                })
            }
        })
    })

    transportCheck.addEventListener("change",function(){
        updatePrice();
        updeteSummary();
    })

    function updatePrice() {
        sum = 0;
        listLabel.forEach(function(a){
            return sum+= parseInt(a.dataset.price);
        });
        if(transportCheck.checked){
            sum+= parseInt(transportCheck.dataset.price);
        }
        sumDiv.innerText = sum;
    }

    function updeteSummary(){
        title.innerText = listLabel[0].innerText;
        titleValue.innerText = listLabel[0].dataset.price;
        color.innerText = listLabel[1].innerText;
        colorValue.innerText = listLabel[1].dataset.price;
        pattern.innerText = listLabel[2].innerText;
        patternValue.innerText = listLabel[2].dataset.price;
        if(transportCheck.checked){
            transport.innerText = "Transport";
            transportValue.innerText = transportCheck.dataset.price;
        } else {
            transport.innerText = "";
            transportValue.innerText = "";
        }
    }


})