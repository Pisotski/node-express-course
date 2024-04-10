const express = require("express");
const router = express.Router();
const { logon, hello } = require("../controllers/controllers");
const { authenticationMiddleware } = require("../middleware/auth");

router.get("/hello", authenticationMiddleware, hello);

router.post("/logon", logon);

module.exports = router;
