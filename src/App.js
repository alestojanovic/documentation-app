import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
