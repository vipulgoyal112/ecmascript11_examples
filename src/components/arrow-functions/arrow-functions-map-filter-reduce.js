import React from 'react';

function arrowMapFilterReduce() {
    let arr = [5, 6, 13, 0, 1, 18, 23];

    let sum = arr.reduce((a, b) => a + b);
    let diff = arr.reduce((a, b) => b - a);
    console.log('sum : ', sum);
    console.log('diff : ', diff);
    // 66

    let even = arr.filter(v => v % 2 == 0);
    let odd = arr.filter(v => v % 2 != 0);
    console.log('even : ', even);
    console.log('odd : ', odd);
    // [6, 0, 18]

    let double = arr.map(v => v * 2);
    let original = double.map(v => v / 2);
    console.log('double : ', double);
    console.log('original : ', original);
    // [10, 12, 26, 0, 2, 36, 46]
}


function ArrowFunctionsMapFilterReduce() {
  return (
    <div>
      <h1>Arrow Functions</h1>
      <h2>ES6 Arrow function - map, filter, reduce: </h2>
      <div>
        <button onClick={arrowMapFilterReduce}>First press F12, open Console, click here to call Const Function</button>
      </div>
      
    </div>
  );
}

export default ArrowFunctionsMapFilterReduce;
