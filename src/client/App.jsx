import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

function App() {

  const [start, setStart] = useState(false);

  const [getmeals, setGetmeals] = useState([]);

  const [getrecipes, setGetrecipes] = useState([]);

  return (
    <div className="App">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
