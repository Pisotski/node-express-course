const express = require("express");
const router = express.Router();
const {
	getPeople,
	createPersonPostman,
	createPerson,
	updatePeople,
	deletePeople,
} = require("../controllers/people");

router.get("/", getPeople);
router.post("/postman", createPersonPostman);
router.post("/", createPerson);
router.put("/:id", updatePeople);
router.delete("/:id", deletePeople);

module.exports = router;
