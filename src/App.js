import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/home/home';
import OptionalChaining from './components/optional-chaining/optional-chaining';
import VarLetConst from './components/var-let-const/var-let-const';

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
            <Route path="/var-let-const">
              <VarLetConst />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
