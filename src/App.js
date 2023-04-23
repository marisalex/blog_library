import React from "react"
import './App.css';
import Routers from "./components/Routers/Routers";


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


