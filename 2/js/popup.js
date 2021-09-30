var linkFeedback = document.querySelector(".contacts-button");
var popupFeedback = document.querySelector(".modal-feedback");
var feedbackLogin = popupFeedback.querySelector(".feedback-name-field");
var closeFeedback = document.querySelector(".modal-feedback .modal-close");
var linkMap = document.querySelector(".contacts-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".modal-map .modal-close");
var linkBuy = document.querySelectorAll(".buy");
var popupAddCart = document.querySelector(".modal-add-cart");
var closeAddCart = document.querySelector(".modal-add-cart .modal-close");

linkFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add("modal-show");
    feedbackLogin.focus();
});

closeFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.remove("modal-show");
});

linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
});

for (var i = 0; i < linkBuy.length; i++) {
    linkBuy[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        popupAddCart.classList.add("modal-show");
    });
}

closeAddCart.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupAddCart.classList.remove("modal-show");
});




