const express = require("express");
const {
	workoutView,
	aboutView,
	hahaView,
	homeView,
} = require("../controllers/appController");

const router = express.Router();

router.get("/", homeView);

router.get("/about", aboutView);
router.get("/haha", hahaView);

router.get("/workout", workoutView);

module.exports = router;
