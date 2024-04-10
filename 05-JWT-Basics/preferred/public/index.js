const API = `http://localhost:4322/api/v1`;
const form = document.querySelector("#auth-form");
const user = document.querySelector("#auth-username");
const pwd = document.querySelector("#auth-password");
const secret = document.querySelector("#locked");
const revealSecretButton = document.querySelector("#unlock");
secret.hidden = true;
let isLoggedIn = false;
const div = document.createElement("div");
form.append(div);

const serverCall = async (endpoint, method = "GET", headers = {}, body) => {
	try {
		const url = API + endpoint;
		const options = { method, headers, body };
		const response = await fetch(url, options);
		return await response.json();
	} catch (error) {
		console.error("Error:", error);
	}
};

const sendPassword = async (e) => {
	e.preventDefault();
	const inputValue = JSON.stringify({
		username: user.value,
		password: pwd.value,
	});
	try {
		const result = await serverCall(
			"/logon",
			"POST",
			{ "Content-Type": "application/json" },
			inputValue
		);
		const { msg, token, ERROR } = result;
		div.innerHTML = msg || ERROR;
		localStorage.setItem("token", token);
	} catch (error) {
		console.error("Error:", error.message);
	}
};

form.addEventListener("submit", sendPassword);

const revealSecret = async () => {
	try {
		const headers = {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		};
		const result = await serverCall("/hello", "GET", headers);
		if (result.ERROR) {
			div.innerHTML = result.ERROR;
			return;
		}
		if (localStorage.getItem("token")) {
			secret.innerHTML = `<h2>${result.msg}</h2> <br></br> ${result.secret}`;
		}
		secret.hidden = false;
	} catch (error) {
		console.error("Error:", error);
	}
};

revealSecretButton.addEventListener("click", revealSecret);
