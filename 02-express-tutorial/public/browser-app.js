const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const button = document.querySelector("#button-1");
const productsDiv = document.querySelector("#products");

// When you click the button, your JavaScript would issue a fetch
// call for /api/v1/products.
// Then you’d add the data you get back to a div in your HTML.

navToggle.addEventListener("click", function () {
	links.classList.toggle("show-links");
});

button.addEventListener("click", async function () {
	const response = await fetch("http://localhost:3000/api/v1/products");
	const products = await response.json();

	await products.forEach((product) => {
		const productWrapper = document.createElement("h2");
		const productPrice = document.createElement("span");
		const productImage = document.createElement("img");
		productWrapper.innerHTML = product.name;
		productPrice.innerHTML = product.price;
		productImage.src = product.image;
		productWrapper.append(productPrice, productImage);
		productsDiv.append(productWrapper);
	});
});
