import React from "react";
import "./App.css";
import Appbar from "./components/Appbar";
import Estudiante from "./components/Estudiante";


function App() {
  return (
    <div className="App">
      <Appbar />
      <Estudiante />
    </div>
  );

}

export default App;
