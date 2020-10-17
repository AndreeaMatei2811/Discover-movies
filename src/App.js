import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import MoviePage from "../src/components/MoviePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "#701223",
              }}
              exact
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/discover"
              activeStyle={{
                fontWeight: "bold",
                color: "#701223",
              }}
            >
              Discover Movies
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/movie/:imdbID" component={MoviePage} />
        <Route path="/discover/:query?" component={DiscoverMoviesPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
