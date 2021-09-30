var sliderNext = document.querySelector(".slider-next");
var sliderBack = document.querySelector(".slider-back");
var sliderItem = document.querySelectorAll(".slider-item");
var sliderItemLast = sliderItem.length - 1;
var sl = 0;

sliderNext.addEventListener("click", function (evt) {
    evt.preventDefault();
    for (var i = 0; i < sliderItem.length; i++) {
        if (sliderItem[i].classList.contains("slider-show")) {
            if (i === sliderItemLast) {
                sliderItem[i].classList.remove("slider-show");
                sliderItem[0].classList.add("slider-show");
            } else {
                sliderItem[i].classList.remove("slider-show");
                i++;
                sliderItem[i].classList.add("slider-show");
            }
        }
    }
});

sliderBack.addEventListener("click", function (evt) {
    evt.preventDefault();
    for (var i = sliderItemLast; i >= 0; i--) {
        if (sliderItem[i].classList.contains("slider-show")) {
            if (i === 0) {
                sliderItem[i].classList.remove("slider-show");
                sliderItem[sliderItemLast].classList.add("slider-show");
            } else {
                sliderItem[i].classList.remove("slider-show");
                i--;
                sliderItem[i].classList.add("slider-show");
            }
        }
    }
});


