import React from 'react';
import {
    Link
} from "react-router-dom";
import './home.css';

function Home() {
  return (
    <div>
        <h1>Ecmascript 2020 or ES11 - Topics</h1>
        <div className="es6">
          <h2>Ecmascript6 or ES6 or EcmaScript 2015 - Topics</h2>
          <ul className="fl">
              <li>
                <Link to="/var-let-const">Var, Let and Const</Link>
              </li>
              <li>
                <Link to="/arrow-function">Arrow Functions</Link>
              </li>
              <li>
                <Link to="/arrow-functions-lexical-this">Arrow Functions : Lexical This</Link>
              </li>
              <li>
                <Link to="/arrow-functions-map-filter-reduce">Arrow Functions : Map, Filter, Reduce</Link>
              </li>
          </ul>
        </div>
        <div>
          <h2>Ecmascript11 or ES11 or EcmaScript 2020 - Topics</h2>
          <ul className="fl">
              <li>
                <Link to="/optional-chaining">Optional Chaining</Link>
              </li>
          </ul>
        </div>
    </div>
  );
}

export default Home;
