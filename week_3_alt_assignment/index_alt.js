// Promises are so confusing

const app = require("./stuffThatYouCanIgnore"); // take my word for it :)

app.get("/", (_, res) =>
	res.send(`
  <h1>Hi!</h1><a href="/whatiscallback">Visit /whatiscallback to get started!</a>
`)
);

app.get("/whatiscallback", (_, response) => {
	response.send(
		`	<body>
		<div>
			Once upon a time people did not know how to describe a deed and ensure the
			<br />
			receiver to trust the We now want not to remember what it was, yet
			<br />those who lived long ago still remember those times the time of
			callback
			<span style="color: red" id="hell"
				>hell
				<br />
				<img
					id="hell-img"
					src="./static/hell.jpg"
					style="width: 40%; height: 40%; object-fit: contain; display: none"
				/>
			</span>
			<div style="display: flex">
				<div id="callback-part2" style="display: none">
					In the ancient time people used to send a request
					<span class="wait" style="color: navy">and wait</span>

					<span id="wait1" style="display: none"
						>and then send another one and wait</span
					><span id="wait2" style="display: none">
						and another one and wait
					</span>
					<span id="wait3" style="display: none"
						>... and then could wait for a very long time
					</span>
					<h3 id="wait-last" style="display: none">
						until the chosen one has arrived:
					</h3>
				</div>
				<div id="callback-hell-code"></div>
			</div>
		</div>
		<script>
			let spaces = "";
			let waitStart;
			let nextChild = document.querySelector("#callback-hell-code");
			const displayElement = (selector) => {
				document.querySelector(selector).style.display = "block";
			};
			document.querySelector("#hell").onclick = () => {
				displayElement("#hell-img");
				setTimeout(() => {
					document.querySelector("#callback-part2").style.display = "block";
				}, 1);
			};
			document.querySelector(".wait").onclick = () => {
				function displayCallback() {
					const el1 = document.createElement("pre");
					const el2 = document.createElement("pre");
					const br = document.createElement("br");
					el1.innerHTML = spaces + callback((doSomething)) {';
					el2.innerHTML = spaces + }';
					nextChild.append(el1, el2);
					nextChild = nextChild.children[0];
					spaces += "  ";
				}
				displayCallback();
				function morpheus() {
					const relocate = () => {
						location.href = "./whatisasyncawait";
					};
					const el0 = document.createElement("div");
					const el1 = document.createElement("div");
					const el2 = document.createElement("button");
					const el3 = document.createElement("button");
					const img = document.createElement("img");
					el0.setAttribute(
						"style",
						"display: flex; flex-flow:column; align-items: center;"
					);
					el1.setAttribute(
						"style",
						"display: flex;  width: 100%; justify-content: space-around"
					);
					el2.setAttribute(
						"style",
						"background-color: red; border: none; padding: 10px 20px; border-radius: 40%;"
					);
					el2.onclick = relocate;
					el3.setAttribute(
						"style",
						"background-color: blue; border: none; padding: 10px 20px; border-radius: 40%;"
					);
					el3.onclick = relocate;
					img.src = "./static/morpheus.jpg";
					img.setAttribute("style", "margin: 0 auto;");
					el1.append(el2, el3);
					el0.append(img, el1);
					nextChild.append(el0);
					setTimeout(() => {
						document
							.querySelector("body")
							.setAttribute(
								"style",
								'background: url("./static/matrix_rain.jpg")'
							);
						document.querySelector("#hell-img").style.visibility = "hidden";
					}, 2000);
				}
				if (!waitStart) {
					setTimeout(() => {
						displayCallback();
						displayElement("#wait1");
						setTimeout(() => {
							displayCallback();
							displayElement("#wait2");
							setTimeout(() => {
								displayCallback();
								displayElement("#wait3");
								setTimeout(() => {
									displayCallback();
									setTimeout(() => {
										displayCallback();
										setTimeout(() => {
											displayCallback();
											setTimeout(() => {
												displayCallback();
												setTimeout(() => {
													displayCallback();
													setTimeout(() => {
														displayCallback();
														setTimeout(() => {
															displayCallback();
															setTimeout(() => {
																displayCallback();
																displayElement("#wait-last");
																setTimeout(() => {
																	displayCallback();
																	morpheus();
																}, 15);
															}, 8);
														}, 2);
													}, 2);
												}, 2);
											}, 2);
										}, 2);
									}, 2);
								}, 15);
							}, 15);
						}, 15);
					}, 15);
				}
				waitStart = true;
			};
		</script>
	</body>
`
	);
});

app.get("/whatisapromise", (_, response) => {
	response.send(`No matter what you choose. This is a different story, young padawan, i promise

        promises is a class, it is not just a function anymore, and now, like every other class, promise can have methods
        they TODO: clickable are
        Resolve and Reject
        TODO: clickable but
        promises want to do something else with TODO: clickable Resolve and Reject
        so you must send TODO: clickable Resolve and Reject 
        as a parameters of a anonymous aka callback (whispering: don't say that word TODO: Harry Potter) TODO: smiley shh.. function

        // design a way to bait user for click
        in that anonymous TODO: smiley shh.. function you now have access to holy data or evil error.
        Remember, young padawan, that not only light side exists in this world, don't miss out your error handing
        after all the hard work you then() can do something with holy data or catch() the evil error

        // design a way to bait user for click
        But nothing is perfect in this world, people soon realized that it was not perfect
        manuscripts show that then().then().then() started to look like ancient evil
        so they created
        TODO: dropdown, smiley face glasses
        The async and await keywords
        were introduced in JavaScript in 2017 as part of the ECMAScript 2017 specification. This was a significant improvement in JavaScript's
        asynchronous
        programming capabilities and was welcomed by developers everywhere.

        // design a way to bait user for click
        // the further you go the deeper the rabbit hole is
        TODO: rabbit svg clickable
    `);
});

app.get("/whatisasyncawait", (_, response) => {
	response.send(`The human kind achieved long awaited enlightenment butterflies were flying are roses bloomed everywhere
    Yet don't let it trick you
    async await is a syntactic sugar for the promise, meaning that in it's core they are the same and the seed of evil lives within
    you now must, young padawan, to declare a function with async
    TODO: example
    and you must await for you result
    TODO: example
    guess what is now type of const response
    a promise
    there is no data yet, we only expect it
    so we must transform it to in most cases from .json()
    and now we can return it or do something with it
    yet don't forget, response is not yet ready in a scope or a function so you mush await for it

    // design a way to bait user for click
    the story continues, because multiple awaits are awaiting for each other to resolve
    they are much like .then()
    luckily the humankind designed an ultimate power and the name is
    TODO: superman
    promise.all()
    remember, young padawan, when you promise.all() you no longer need to wait TODO:[same picture as callback wait]
    your promises are now resolving simultaneously, but promise.all() is expecting and an array as an argument, don't forget
    promise.all([promise1, promise2])
    Remember, young padawan, that not only light side exist in this world, don't miss out your error handing TODO:
    I encourage you to read a sacred manuscrpit to learn more. There are a lot more to explore
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    now, with all the sacred knowledge are you ready for a riddle?
    TODO: riddler logo
    `);
});

app.get("/whysoserious", (request, response) => {
	response.send(`TODO: riddler header what will be executed first?
    what will be executed first?
    TODO: code sample
    you right! nice try!
    `);
});

app.listen(3000);
