const express = require("express");
const router = express.Router();
const getHelloController = require("../controllers/controllers");
const { middleware } = require("../middleware/middleware");

router.get("/hello", middleware, getHelloController);

router.post("/logon", (req, res) => {
	console.log(req.body);
	res.status(200).json("user logged in");
});

module.exports = router;
