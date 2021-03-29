import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/search"]}>
           <Search />
          </Route>
          <Route exact path="/books/:id">
           <Books />
          </Route>
          <Route exact path="/saved">
           <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
