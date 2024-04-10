const express = require("express");
const router = express.Router();
const { login, dashboard } = require("../controllers/controllers");
const { authenticationMiddleware } = require("../middleware/auth");

router.get("/hello", authenticationMiddleware, dashboard);

router.post("/logon", login);

module.exports = router;
