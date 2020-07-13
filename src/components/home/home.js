import React from 'react';
import {
    Link
} from "react-router-dom";
import './home.css';

function Home() {
  return (
    <div>
        <h1>Ecmascript 2020 or ES11 - Topics</h1>
        <ul className="fl">
            <li>
              <Link to="/optional-chaining">Optional Chaining</Link>
            </li>
            <li>
              <Link to="/var-let-const">Var, Let and Const</Link>
            </li>
        </ul>
    </div>
  );
}

export default Home;
