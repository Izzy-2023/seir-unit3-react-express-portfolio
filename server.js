// Import Dependencies
const express = require("express");
const cors = require("cors");

// Import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

// Create our app object
const app = express();



app.use((req, res, next) => {
  // Allow all origins for demonstration purposes. In production, specify only trusted origins.
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  // Continue to the next middleware
  next();
});

//home route for testing our app
app.get("/", (req, res) => {
  res.send("Hello World");
});

// route for retrieving projects
app.get("/projects", (req, res) => {
  // send projects via JSON
  res.json(projects);
});

// route for retrieving about info
app.get("/about", (req, res) => {
  // send projects via JSON
  res.json(about);
});

//declare a variable for our port number
const PORT = process.env.PORT || 3013;

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
