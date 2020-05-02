var recommendationButton = document.querySelector(".recommendation__button");
var modalCart = document.querySelector(".modal-cart");
var modalCartButton = document.querySelector(".modal-cart__button");
var modalOverlay = document.querySelector(".modal-overlay");

recommendationButton.addEventListener("click", function () {
	modalCart.classList.add("modal-cart--visible");
	modalOverlay.classList.add("modal-overlay--visible");
});

modalOverlay.addEventListener("click", function () {
	modalCart.classList.remove("modal-cart--visible");
	modalOverlay.classList.remove("modal-overlay--visible");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		modalCart.classList.remove("modal-cart--visible");
		modalOverlay.classList.remove("modal-overlay--visible");
	}
});

// Временно!!!!!!!
modalCartButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalCart.classList.remove("modal-cart--visible");
	modalOverlay.classList.remove("modal-overlay--visible");
});