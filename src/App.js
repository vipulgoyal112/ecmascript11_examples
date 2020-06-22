import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/home/home';
import OptionalChaining from './components/optional-chaining/optional-chaining';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/optional-chaining">
              <OptionalChaining />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
