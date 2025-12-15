export default function Ingredients(props) {

    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>
            <span>{ingredient}</span>
            <button 
                onClick={props.removeIngredients}
                value={ingredient}
            >
                Remove
            </button>
        </li>
    ));



    return (<section id="ingredients-section">
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
        <div className="get-recipe-container">
            <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.fetchRecipe}>Get a recipe</button>
        </div>
    </section>)
}