import React from 'react';

function es5OldWay() {
    var a = function (a) {
        return a*a;
    }
    console.log(a(2));
}

function es6ExpressionBodies() {
    var b = a => a*a;
    console.log(b, b(4));
}

function es6StatementBodies() {
    var c = (a) => {
        return a*a
    };
    console.log(c, c(5));
    
}

function ArrowFunction() {
  return (
    <div>
      <h1>Arrow Functions</h1>
      <h2>ES5 Old Way : </h2>
      <div>
        <button onClick={es5OldWay}>First press F12, open Console, then see output</button>
      </div>
      <h2>ES6 Expression Bodies : </h2>
      <div>
        <button onClick={es6ExpressionBodies}>First press F12, open Console, click here to call Let Function</button>
      </div>
      <h2>ES6 Statement Bodies : </h2>
      <div>
        <button onClick={es6StatementBodies}>First press F12, open Console, click here to call Const Function</button>
      </div>
    </div>
  );
}

export default ArrowFunction;
