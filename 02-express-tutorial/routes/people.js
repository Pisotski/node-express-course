const express = require("express");
const { idChecker } = require("../middleware/entryChecker");
const router = express.Router();
const {
	getPeople,
	addPerson,
	getPerson,
	updatePerson,
	deletePerson,
} = require("../controllers/people");

router.use("/:id", idChecker);
router.route("/").get(getPeople).post(addPerson);
router.route("/:id").get(getPerson).put(updatePerson).delete(deletePerson);
module.exports = router;
