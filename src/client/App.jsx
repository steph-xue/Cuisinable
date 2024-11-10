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

  const [recipes, setRecipes] = useState([]);

  function getStarted() {
    setStart(true);
    setGetmeals(false);
  }

  function getMeals() {
    setStart(false);
    setGetmeals(true);
  }

  return (
    <div className="App">
      {!start && !getmeals && <Landing getStarted={getStarted} />}

      {start && <Selector getMeals={getMeals} />}

      {getmeals && <Meals />}
    </div>
  );
}

export default App;
