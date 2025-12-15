import Header from "./Header.jsx" 
import Main from "./Main.jsx"
import { useState } from "react";

export default function App() {
  //console.log("App component rendered")
  //Header functions
   const [diet, setDiet] = useState('');
  const [servings, setServings] = useState('');
  const [method, setMethod] = useState('');
   const [cuisine, setCuisine] = useState('');
  return (
  <>
     <Header diet={diet} setDiet={setDiet} servings={servings} setServings={setServings} method={method} setMethod={setMethod} cuisine={cuisine} setCuisine={setCuisine} />
      <Main diet={diet} servings={servings} method={method} cuisine={cuisine} />
  </>
     
  )
}
