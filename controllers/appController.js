const express = require("express");
const path = require("path");
const db = require("../model/workout");

const workoutView = (req, res) => {
	res.render("workout", {
		workouts: db.workouts,
	});
	// res.sendFile(path.join(__dirname, "../views/workout.html"));
};
const homeView = (req, res) => {
	res.sendFile(path.join(__dirname, "../views/home.html"));
};


const hahaView = (req, res) => {
	res.sendFile(path.join(__dirname, "../views/haha.html"));
};
// const aboutView = (req, res) => {
// 	res.render("about", {});
// };

const aboutView = (req, res) => {
	res.sendFile(path.join(__dirname, "../views/about.html"));
}

module.exports = {
	workoutView,
	aboutView,
	homeView,
	hahaView,
};
