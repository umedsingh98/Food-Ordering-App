import React from "react";
import "./index.css";
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/home/home";
function App() {
  
  return (

  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </Router>
 );
}

export default App