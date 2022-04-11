import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";
import DocumentsPage from "./pages/documents/DocumentsPage";
import ManageDocumentsPage from "./pages/documents/ManageDocumentsPage";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/documents" component={DocumentsPage} />
        <Route path="/document/:slug" component={ManageDocumentsPage} />
        <Route path="/document" component={ManageDocumentsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
