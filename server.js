const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const path = require('path')

const routes = require("./routes/appRoutes");

const PORT = process.env.PORT || 4000;

app.use(express.static("static"));
app.use(express.json());

//to view ejs
// app.set("view engine", "html");
app.set("view engine", "ejs");

//middleware
//to use the routes
app.use(routes);
app.use(express.urlencoded({ extended: false }));

app.use("/public", express.static(__dirname + "/public"));

// app.get('/haha', function(req, res) {
//     res.sendFile(path.join(__dirname, './views/haha.html'));
//   });

//listen to this port
app.listen(process.env.PORT || PORT, () =>
	console.log(`listening on port ${PORT}`),
);
