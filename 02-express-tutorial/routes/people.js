const express = require("express");
const {
	checkId_DB,
	isNameInBody_Client,
} = require("../middleware/entryChecker");
const router = express.Router();
const {
	getPeople,
	addPerson,
	getPerson,
	updatePerson,
	deletePerson,
} = require("../controllers/people");

router.use("/:id", checkId_DB);
router.route("/").get(getPeople).post(isNameInBody_Client, addPerson);
router.route("/:id").get(getPerson).put(updatePerson).delete(deletePerson);
module.exports = router;
