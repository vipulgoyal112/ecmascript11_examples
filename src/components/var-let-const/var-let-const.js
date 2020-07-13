import React from 'react';

function varExample() {
    // #Function hoisting : b will be declared here
    var a = 1;
    if (a >= 0) {
        var b = 2; // Althogh we define b here but beacause of function hoisting, it define at the top of function
        console.log(a); // prints 1
        console.log(b); // prints 2
    }
    console.log(a); // prints 1
    console.log(b); // prints 2 // that's why b can be access here
}

function letExample() {
    let a = 1;
    if (a >= 0) {
        let b = 2;
        console.log(a); // prints 1
        console.log(b); // prints 2
        a = 3;
    }
    console.log(a); // prints 3
    //console.log(b); // Cannot access b outside its block
}

function constExample() {
    const a = 1;
    if (a >= 0) {
        const b = 2;
        console.log(a); // prints 1
        console.log(b); // prints 2
        // a = 3; // Uncaught TypeError: Assignment to constant variable.
    }
    console.log(a); // prints 1
    //console.log(b); // Cannot access b outside its block
}


function VarLetConst() {
  return (
    <div>
      <h1>Difference between Var, Let and Const</h1>
      <h2>Var Example : </h2>
      <div>
        <button onClick={varExample}>First press F12, open Console, click here to call Var Function</button>
      </div>
      <div>
        Output : 1 2 1 2
      </div>
      <h2>Let Example : </h2>
      <div>
        <button onClick={letExample}>First press F12, open Console, click here to call Let Function</button>
      </div>
      <div>
        Output : 1 2 3 
      </div>
      <h2>Const Example : </h2>
      <div>
        <button onClick={constExample}>First press F12, open Console, click here to call Const Function</button>
      </div>
      <div>
        Output : 1 2 1 
      </div>
    </div>
  );
}

export default VarLetConst;
