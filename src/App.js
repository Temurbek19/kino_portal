import { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PopularsPage from "./pages/PopularsPage";
import SingleMovie from "./pages/SingleMovie";
import TopFilmsPage from "./pages/TopFilmsPage";
import TrillerPage from "./pages/TrillerPaga";

import Header from "./containers/Header";
import Footer from "./containers/Footer";

import "./assets/styles/main.scss";

function App() {
  const [sidebarState, setSidebarState] = useState("home");

  return (
    <div>
      <Router>
        <Header sidebarState={sidebarState} setSidebarState={setSidebarState} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/populars" component={PopularsPage} />
          <Route exact path="/movie/:id" component={SingleMovie} />
          <Route exact path="/topFilms" component={TopFilmsPage} />
          <Route exact path="/trillerPage" component={TrillerPage} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
