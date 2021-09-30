var buttonDelivery = document.querySelector(".service-button-delivery");
var buttonGuarantee = document.querySelector(".service-button-guarantee");
var buttonCredit = document.querySelector(".service-button-credit");
var serviceDelivery = document.querySelector(".service-delivery");
var serviceGuarantee = document.querySelector(".service-guarantee");
var serviceCredit = document.querySelector(".service-credit");

buttonDelivery.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!buttonDelivery.classList.contains("service-button-current")) {
        buttonDelivery.classList.add("service-button-current");
        serviceDelivery.classList.add("service-show");

        buttonGuarantee.classList.remove("service-button-current");
        serviceGuarantee.classList.remove("service-show");

        buttonCredit.classList.remove("service-button-current");
        serviceCredit.classList.remove("service-show");
    }
});

buttonGuarantee.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!buttonGuarantee.classList.contains("service-button-current")) {
        buttonGuarantee.classList.add("service-button-current");
        serviceGuarantee.classList.add("service-show");

        buttonDelivery.classList.remove("service-button-current");
        serviceDelivery.classList.remove("service-show");

        buttonCredit.classList.remove("service-button-current");
        serviceCredit.classList.remove("service-show");
    }
});

buttonCredit.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!buttonCredit.classList.contains("service-button-current")) {
        buttonCredit.classList.add("service-button-current");
        serviceCredit.classList.add("service-show");

        buttonDelivery.classList.remove("service-button-current");
        serviceDelivery.classList.remove("service-show");

        buttonGuarantee.classList.remove("service-button-current");
        serviceGuarantee.classList.remove("service-show");
    }
});


