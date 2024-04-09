const express = require("express");
const router = express.Router();
const { login, dashboard } = require("../controllers/controllers");
const { middleware } = require("../middleware/middleware");

router.get("/hello", dashboard);

router.post("/logon", login);

module.exports = router;
