const express = require("express");
const { test } = require("../controllers/taskControllers");

const router = express.Router();

router.route("/").get(test).post();
router.route("/:id").get(test).post().patch().delete();

module.exports = router;
