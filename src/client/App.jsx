import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Landing from "./components/Landing";
import Selector from "./components/Selector";
import Meals from "./components/Meals";

function App() {

  const [start, setStart] = useState(false);

  const [getmeals, setGetmeals] = useState([]);

  const [getrecipes, setGetrecipes] = useState([]);

  function getStarted() {
    setStart(true);
  }

  return (
    <div className="App">
      {!start && <Landing getStarted={getStarted} />}

      {start && <Selector />}
    </div>
  );
}

export default App;
