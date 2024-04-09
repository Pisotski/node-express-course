const express = require("express");
const router = express.Router();
const { login, dashboard } = require("../controllers/controllers");

router.get("/hello", dashboard);

router.post("/logon", login);

module.exports = router;
