import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello</header>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/discover"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Discover Movies
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
