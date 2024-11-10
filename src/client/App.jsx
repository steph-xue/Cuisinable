import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import Landing from "./components/Landing";
import Selector from "./components/Selector";
import Meals from "./components/Meals";

function App() {

  const [start, setStart] = useState(false);

  const [getmeals, setGetmeals] = useState(false);

  const [getrecipes, setGetrecipes] = useState(false);

  const [intolerances, setIntolerances] = useState([]);

  const [cuisine, setCuisine] = useState("");

  const [recipes, setRecipes] = useState([]);

  function getStarted() {
    setStart(true);
    setGetmeals(false);
    setGetrecipes(false);
  }

  function getMeals() {
    setStart(false);
    setGetmeals(true);
    setGetrecipes(false);
  }

  function saveUserIntolerances(event) {
    console.log(intolerances);
    if (event.target.checked) {
      setIntolerances([...intolerances, event.target.value]);
    } else {
      setIntolerances(intolerances.filter(item => item !== event.target.value));
    }
  }
  
  function saveUserCuisine(event) {
    console.log(cuisine);
    if (event.target.checked) {
      setCuisine(event.target.value);
    }
    if (!event.target.checked) {
      setCuisine([]);
    }
  }

  function fetchMealSelections() {
    fetch(`http://localhost:8000/selections?cuisine=${cuisine}&intolerances=${intolerances}`)
    .then(response => response.json())
    .then(data => {
      setRecipes(data.results);
    })
  }

  return (
    <div className="App">
      {!start && !getmeals && <Landing getStarted={getStarted} />}

      {start && <Selector getMeals={getMeals} saveUserIntolerances={saveUserIntolerances} saveUserCuisine={saveUserCuisine} fetchMealSelections={fetchMealSelections}/>}

      {getmeals && <Meals recipes={recipes}/>}
    </div>
  );
}

export default App;
