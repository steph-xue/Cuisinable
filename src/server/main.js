import express from "express";
import ViteExpress from "vite-express";
import cors from "cors";

const apiKey = "a5c060719a9a49be913fd9bb1bc6ae17"

const port = 8000;
const app = express();

app.use(cors());

app.use(express.json());

// GET route to send the curated meals and meal recipes to the frontend
app.get("/selections", (req, res) => {
    const cuisine = req.query.cuisine
    const intolerances = req.query.intolerances

    let intolerancesList = '';
    if (Array.isArray(intolerances)) {
        intolerancesList = intolerances.join(',');
    } else {
        intolerancesList = intolerances;
    }

    const endpoint = `cuisine=${cuisine}&intolerances=${intolerancesList}&number=12&addRecipeInformation=true&addRecipeInstructions=true&instructionsRequired=true`
    const apiUrl = "https://api.spoonacular.com/recipes/complexSearch?" + endpoint + "&apiKey=" + apiKey

    fetch(apiUrl)
    .then(response => response.json())
    .then(jsonData => { console.log(jsonData); return res.json(jsonData) })
});

// Start the server and listen for requests on port 8000
ViteExpress.listen( app, port, () => {
    console.log(`Server running on http://localhost:${port}
`);
});