const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const button = document.querySelector("#button1");

navToggle.addEventListener("click", function () {
	links.classList.toggle("show-links");
});

button.addEventListener("click", function () {
	location.href = "/api/v1/query?search=al&limit=5";
});
