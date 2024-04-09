const API = `http://localhost:4322/api/v1`;
const form = document.querySelector("#auth-form");
const input = document.querySelector("#auth-input");

const serverCall = async (endpoint, method = "GET", headers = {}, body) => {
	try {
		const url = API + endpoint;
		const options = { method, headers, body };
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
	} catch (error) {
		console.error("Error:", error);
	}
};
const sendPassword = (e) => {
	e.preventDefault();
	const inputValue = JSON.stringify({ pwd: input.value });
	serverCall(
		"/logon",
		"POST",
		{ "Content-Type": "application/json" },
		inputValue
	);
};

form.addEventListener("submit", sendPassword);
