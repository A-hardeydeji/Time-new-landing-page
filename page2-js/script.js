"use strict";

const btnNav = document.querySelector(".btn-mobile-nav");
const pricingheaderEl = document.querySelector(".nav");
btnNav.addEventListener("click", function () {
	pricingheaderEl.classList.toggle("nav-open");
});
