import { useState } from "react";
import "./App.scss";
import Landing from "./components/Landing";
import Selector from "./components/Selector";
import Meals from "./components/Meals";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [start, setStart] = useState(false);

  const [getmeals, setGetmeals] = useState(false);

  const [getRecipes, setGetRecipes] = useState(false);

  const [intolerances, setIntolerances] = useState([]);

  const [cuisine, setCuisine] = useState("");

  const [recipes, setRecipes] = useState([]);

  const [imageURL, setImageURL] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [imageRecipe, setImageRecipe] = useState("");

  function getStarted() {
    setStart(true);
    setGetmeals(false);
    setGetRecipes(false);
  }

  function getMeals() {
    setStart(false);
    setGetmeals(true);
    setGetRecipes(false);
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

  function toggleImage(imageSource, imageTitle, imageDescription, imageRecipe) {
    if (getRecipes) {
        setGetRecipes(false);
        setImageURL("");
        setImageTitle("");
        setImageDescription("");
        setImageRecipe(""); 
    } else {
        setGetRecipes(true);
        setImageURL(imageSource);
        setImageTitle(imageTitle);
        setImageDescription(imageDescription);
        setImageRecipe(imageRecipe);
    }
}

  return (
    <div className="App">
      {!start && !getmeals && <Landing getStarted={getStarted} />}

      {start && <Selector getMeals={getMeals} saveUserIntolerances={saveUserIntolerances} saveUserCuisine={saveUserCuisine} fetchMealSelections={fetchMealSelections}/>}

      {getmeals && <Meals recipes={recipes} getStarted={getStarted} />}

      {
          getRecipes &&
          <div className="full-recipe-container">
              <FontAwesomeIcon className="close-icon" icon={faCircleXmark} onClick={toggleImage} />
              <p className="full-image-title">{imageTitle}</p>
              <img src={imageURL} alt="full-image" className="full-image" />
              <p className="full-image-description">{imageDescription}</p>
              <p className="full-image-recipe">{imageRecipe}</p>
          </div>
      }
    </div>
  );
}

export default App;
