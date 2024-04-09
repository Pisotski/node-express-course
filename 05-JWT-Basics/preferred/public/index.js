const API = `http://localhost:4322/api/v1`;
const form = document.querySelector("#auth-form");
const user = document.querySelector("#auth-username");
const pwd = document.querySelector("#auth-password");
const secret = document.querySelector("#locked");
const revealSecretButton = document.querySelector("#unlock");
secret.hidden = true;
let isLoggedIn = false;

const serverCall = async (endpoint, method = "GET", headers = {}, body) => {
	try {
		const url = API + endpoint;
		const options = { method, headers, body };
		const response = await fetch(url, options);
		const result = await response.json();
		const div = document.createElement("div");
		div.innerHTML = result;
		form.append(div);
		isLoggedIn = true;
	} catch (error) {
		console.error("Error:", error);
	}
};
const sendPassword = (e) => {
	e.preventDefault();
	const inputValue = JSON.stringify({
		user: user.value,
		pwd: pwd.value,
	});
	serverCall(
		"/logon",
		"POST",
		{ "Content-Type": "application/json" },
		inputValue
	);
};

form.addEventListener("submit", sendPassword);

const revealSecret = () => {
	if (isLoggedIn) secret.hidden = false;
};

revealSecretButton.addEventListener("click", revealSecret);
