import { useState } from "react";
import Ingredients from "./Ingredients";
import Recipe from "./Recipe";

export default function Main({ diet, servings, method, cuisine }) {
    //console.log("Main component rendered")
    const [ingredients, setIngredients] = useState([])
    //console.log(ingredients)
    const [recipe, setRecipe] = useState(null)

    function removeIngredients(e) {
        console.log("Removing ingredient")
        //const ingredientToRemove = e.target.parentElement.textContent.replace("Remove", "").trim()
        const ingredientToRemove = e.target.value   
        const updatedIngredients = ingredients.filter(ingredient => ingredient !== ingredientToRemove)
        setIngredients(updatedIngredients)
    }




    async function fetchRecipe() {
        console.log("Fetching recipe for ingredients:", ingredients);
        const response = await fetch("http://localhost:3000/recipe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ingredients,
                diet,
                servings,
                method,
                cuisine
            })
        });

        const data = await response.json();
        console.log(data.recipe);
        // Example: store the recipe in React state
        setRecipe(data.recipe);

        // Now toggle the recipe shown state
        // setRecipeShown(prev => !prev);
    }


    function addIngredient(formData) {
        const ingredient = formData.get("ingredient")
        setIngredients([...ingredients, ingredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    name="ingredient"
                    placeholder="e.g. Tomato"
                    aria-label="Add ingredient"
                />
                <button  >Add ingredient</button>
            </form>
            {ingredients.length ?
                <Ingredients ingredients={ingredients} fetchRecipe={fetchRecipe} removeIngredients={removeIngredients} />
                : null}


            {recipe && <Recipe recipe={recipe} />}
        </main>
    )
}