import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </div>
  );
}

export default App;
