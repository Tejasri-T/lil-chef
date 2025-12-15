import lilChef from '../images/new.svg';

export default function Header({ diet, setDiet, servings, setServings, method, setMethod, cuisine, setCuisine }) {
  //console.log("Header component rendered")
  return (
    <header>
      <img src={lilChef} alt="Lil Chef Icon" />
      <div className="header-controls">
        {/* Dietary options */}
        <select value={diet} onChange={(e) => setDiet(e.target.value)}>
          <option value="" disabled>Dietary Preference</option>
          <option value="gluten-free">Gluten-Free</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>

        {/* Number of servings */}
        {/* <select value={servings} onChange={(e) => setServings(e.target.value)}>  
          <option value="" disabled>Number of servings </option>
          <option value="1">1 Serving</option>
          <option value="2">2 Servings</option>
          <option value="3">3 Servings</option>
          <option value="4">4 Servings</option>
          
        </select> */}
        <input
          type="number"
          placeholder="Number of servings"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
          min="1"
          max="10"
        />
        {/* Cooking method */}
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="" disabled>Cooking Method</option>
          <option value="cook">Cook</option>
          <option value="bake">Bake</option>
          <option value="fry">Fry</option>
          <option value="steam">Steam</option>
        </select>

        {/* Cuisine selection */}
        <select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
          <option value="" disabled>Cuisine</option>
          <option value="italian">Italian</option>
          <option value="indian">Indian</option>
          <option value="mexican">Mexican</option>
          <option value="chinese">Chinese</option>
          <option value="japanese">Japanese</option>
          <option value="french">French</option>
        </select>
      </div>
    </header>
  )
}