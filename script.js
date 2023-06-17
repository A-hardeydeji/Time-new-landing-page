"use strict";
const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header-primary");
const pricingheaderEl = document.querySelector(".nav");
btnNav.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");
});
