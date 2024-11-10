import express from "express";
import cors from "cors";

const apiKey = "cbdcac716ecf4c738d0bf2f708d80e0c"

// const express = require("express");
// const cors = require("cors");
const port = 8000;
const app = express();

// Use CORS to allow requests from the frontend
app.use(cors());

// Use express.json() to parse incoming JSON requests
app.use(express.json());

// GET route to send the list of tasks to the frontend
app.get("/selections", (req, res) => {
    const cuisine = req.query.cuisine
    const intolerances = req.query.intolerances

    const endpoint = `cuisine=${cuisine}&intolerances=${intolerances}&number=10&addRecipeInformation=true&addRecipeInstructions=true&instructionsRequired=true`

    const apiUrl = "https://api.spoonacular.com/recipes/complexSearch?" + endpoint + "&apiKey=" + apiKey

    fetch(apiUrl)
    .then(response => response.json())
    .then(jsonData => { console.log(jsonData); return res.json(jsonData) })
});

// Start the server and listen for requests on port 3000
app.listen( port, () => {
    console.log(`Server running on http://localhost:${port}
`);
});