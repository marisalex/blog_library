import React from "react"
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'
import Routers from "./components/Routers/Routers";
import Story from './components/Story/Story';
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  function toggleDarkMode(){
    setDarkMode(prev => !prev)
  }
  return (
    <div className="App">
    <Routers />
 
    </div>
  );
}

export default App;


