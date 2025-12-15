import { HfInference } from '@huggingface/inference'
import dotenv from "dotenv"

dotenv.config()

const accessToken = process.env.HF_API_KEY
console.log("Raw token value:", accessToken, typeof accessToken);

const client = new HfInference(accessToken)
console.log("Token:", process.env.HF_API_KEY)

const SYSTEM_PROMPT = `
You are a cooking assistant.

Given a list of ingredients from the user, suggest a recipe that can be made using some or all of those ingredients.

CRITICAL RULES:
- Ingredient quantities MUST be logically consistent with the number of servings.
- Scale ingredients using common cooking standards (e.g., ~2 eggs per serving for egg-based dishes).
- Do NOT suggest unrealistic serving sizes.
- If the provided ingredients are insufficient for a large number of servings, reduce the servings accordingly.
- You do not need to use every ingredient.

RESPONSE FORMAT (Markdown only):
- Recipe title
- Servings
- Short description
- Ingredients (with realistic quantities)
- Simple cooking steps
`;



export async function getRecipeFromMistral(ingredientsArr,  diet, servings, method, cuisine) {
    const ingredientsString = ingredientsArr.join(", ")
    const prompt = `I have ${ingredientsString}. 
                    Please give me a ${diet || "regular"} recipe 
                    for ${servings} serving(s), 
                    using the ${method || "any"} method, 
                    preferably ${cuisine || "any cuisine"}.`;

    console.log("Generating recipe with ingredients:", ingredientsString)

    try {
        const response = await client.chatCompletion({
            model: "meta-llama/Llama-3.2-3B-Instruct",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: prompt }
            ],
            max_tokens: 1024
        })

        return response.choices[0].message.content
    } catch (err) {
        console.log(err)
        return "Error occurred generating recipe"
    }
}
