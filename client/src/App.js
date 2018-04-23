import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MakingTheGame from "./pages/MakingTheGame";
import MediaGallery from "./pages/MediaGallery";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/MakingTheGame" component={MakingTheGame} />
        <Route exact path="/MediaGallery" component={MediaGallery} />
        <Route exact path="/Contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>

  </Router>
);

export default App;
