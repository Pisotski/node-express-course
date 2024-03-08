// Promises are so confusing

const app = require("./stuffThatYouCanIgnore"); // take my word for it :)

app.get("/", (_, res) =>
	res.send(`
  <h1>Hi!</h1><a href="/whatiscallback">Visit /whatiscallback to get started!</a>
`)
);
const STYLE = `
<style>
a:link, a:visited {
    color: red;
    padding: 15px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }
  .hell-img {
    style="width: 40%; 
    height: 40%; 
    object-fit: contain;
  }
</style>
`;
app.get("/whatiscallback", (request, response) => {
	const { showHellImage, startHell } = request.query;
	console.log(showHellImage);
	response.send(`
    ${STYLE}
    <body>
        <div>
    		<p>
                Once upon a time people did not know how to describe a deed and ensure the
                <br />
                receiver to trust the We now want not to remember what it was, yet
                <br />those who lived long ago still remember those times the time of
                callback
                <a color: red href="/whatiscallback?showHellImage=true">
                HELL                                                       
                </a>
            </p>                                                                     
        ${
					showHellImage
						? `<img id="hell-img" src="./static/hell.jpg"/>
            <div id="part-2-wrapper">
            In the ancient time people used to send a request
                <div id="callback-part2">
                <a href="http://localhost:3001/whatiscallback?showHellImage=true&startHell=true" class="wait" style="color: navy">and wait</a>

                ${startHell ? `<p>callback Started</p>` : ""}
                </div>
        </div>`
						: ""
				}
        </div>
	</body>`);
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

app.listen(3001);
