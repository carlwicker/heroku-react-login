const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");

// Express Port
const port = process.env.PORT || 5000;

// !!! CONFIGURE .env FILE IN ROOT FOR ENVIRONMENTAL VARIABLES !!!
require("dotenv").config();

// Express Body Parser
app.use(express.json());

// Enable CORS
app.use(cors());

// !!! CONFIGURE MONGOOSE CONNECTION HERE !!!

// const db = process.env.MONGODB_URI;
// mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

// Static React Build Folder
app.use(express.static(path.join(__dirname, "client/build/")));

// Direct to Express API Endpoint
app.get("/api", (req, res) => res.json({ test: "success" }));

// Direct to React Build
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "client", "build", "index.html"));
});

app.listen(port, () => console.log("Listening on Port: " + port));
