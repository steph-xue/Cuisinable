import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Landing from "./components/Landing";

function App() {

  const [start, setStart] = useState(false);

  const [getmeals, setGetmeals] = useState([]);

  const [getrecipes, setGetrecipes] = useState([]);

  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
