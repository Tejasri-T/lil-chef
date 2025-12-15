import express from "express"
import cors from "cors"

import { getRecipeFromMistral } from "./recipeService.js"

const app = express()

app.use(cors({
    origin: "http://localhost:5500",   // allow your React app
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}))

app.use(express.json())

app.post("/recipe", async (req, res) => {
    console.log("Received ingredients:", req.body.ingredients);
    const recipe = await getRecipeFromMistral(req.body.ingredients,req.body.diet, req.body.servings, req.body.method, req.body.cuisine)
    res.json({ recipe })
})

app.listen(3000, () => console.log("Server running"))
