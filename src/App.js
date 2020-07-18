import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/home/home';
import OptionalChaining from './components/optional-chaining/optional-chaining';
import VarLetConst from './components/var-let-const/var-let-const';
import ArrowFunction from './components/arrow-functions/arrow-function.js';
import {ArrowFunctionsLexicalThis} from './components/arrow-functions/arrow-functions-lexical-this.js';
import ArrowFunctionsMapFilterReduce from './components/arrow-functions/arrow-functions-map-filter-reduce.js';

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
            <Route path="/arrow-function">
              <ArrowFunction />
            </Route>
            <Route path="/arrow-functions-lexical-this">
              <ArrowFunctionsLexicalThis />
            </Route>
            <Route path="/arrow-functions-map-filter-reduce">
              <ArrowFunctionsMapFilterReduce />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
