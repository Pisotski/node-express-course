const express = require("express");
const router = express.Router();
const getHelloController = require("../controllers/controllers");
const { middleware } = require("../middleware/middleware");

router.get("/hello", middleware, getHelloController);

router.post("/logon", (req, res) => {
	console.log(`post request`);
	res.send("posted");
});

module.exports = router;
