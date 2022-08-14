const express = require("express");
// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const workoutSchema = new Schema({
// 	exercise: { type: String, required: true },
// });

// module.exports = mongoose.model("Workout", workoutSchema);

const workouts = [
	{ title: "Bicep curls" },
	{ title: "Tricep curls" },
	{ title: "Push up" },
	{ title: "Squats" },
	{ title: "Sit up" },
];

module.exports = { workouts };
