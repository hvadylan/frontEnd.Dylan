// JavaScript Document

var hamburger = document.querySelector("header ul li:first-of-type div");
var menuham = document.querySelector("header div:nth-child(2)");
var submenu = document.querySelector("header div ul li:first-child");
var descriptionBtn = document.querySelector("#productmain section div:nth-of-type(2) section:nth-of-type(2) ul li:first-of-type");
var shippingBtn = document.querySelector("#productmain section div:nth-of-type(2) section:nth-of-type(2) ul li:nth-of-type(2)");
var paymentBtn = document.querySelector("#productmain section div:nth-of-type(2) section:nth-of-type(2) ul li:nth-of-type(3)");
var tekstvanDescription = document.querySelector("#productmain section div:nth-of-type(2) section:nth-of-type(3) article:first-of-type");
var tekstvanShipping = document.querySelector("#productmain section div:nth-of-type(2) section:nth-of-type(3) article:nth-of-type(2)");
var imgvanPayment = document.querySelector("#productmain section div:nth-of-type(2) section:nth-of-type(3) img");


function openMenu () {
    menuham.classList.toggle ("open");
}


hamburger.addEventListener("click", openMenu);

function kruisjeMenu () {
    hamburger.classList.toggle ("kruisje");
}

hamburger.addEventListener("click", kruisjeMenu);

function klapSub () {
    submenu.classList.toggle("klap");
}

submenu.addEventListener("click", klapSub);

function descriptionTab () {
    descriptionBtn.classList.add("description");
    descriptionBtn.classList.remove("description-white");
    shippingBtn.classList.add("shipping-white");
    shippingBtn.classList.remove("shipping");
    paymentBtn.classList.remove("payment");
    paymentBtn.classList.add("payment-white");
    tekstvanDescription.classList.add("elementShow");
    tekstvanShipping.classList.remove("elementShow");
    tekstvanShipping.classList.add("elementHidden");
    imgvanPayment.classList.remove("elementShow");
    imgvanPayment.classList.add("elementHidden");

}

function shippingTab () {
    descriptionBtn.classList.remove("description");
    descriptionBtn.classList.add("description-white");
    shippingBtn.classList.remove("shipping-white");
    shippingBtn.classList.add("shipping");
    paymentBtn.classList.remove("payment");
    paymentBtn.classList.add("payment-white");
    tekstvanDescription.classList.add("elementHidden");
    tekstvanDescription.classList.remove("elementShow")
    tekstvanShipping.classList.add("elementShow");
    imgvanPayment.classList.remove("elementShow");
    imgvanPayment.classList.add("elementHidden");
    
}

function paymentTab () {
    descriptionBtn.classList.remove("description");
    descriptionBtn.classList.add("description-white");
    shippingBtn.classList.add("shipping-white");
    shippingBtn.classList.remove("shipping");
    paymentBtn.classList.add("payment");
    paymentBtn.classList.remove("payment-white");
    imgvanPayment.classList.add("elementShow");
    imgvanPayment.classList.remove("elementHidden");
    tekstvanDescription.classList.add("elementHidden");
    tekstvanDescription.classList.remove("elementShow");
    tekstvanShipping.classList.remove("elementShow");
    tekstvanShipping.classList.add("elementHidden");
}

descriptionBtn.addEventListener("click", descriptionTab);
shippingBtn.addEventListener("click", shippingTab);
paymentBtn.addEventListener("click", paymentTab);




