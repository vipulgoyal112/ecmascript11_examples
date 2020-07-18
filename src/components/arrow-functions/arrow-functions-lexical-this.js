import React from 'react';

function es5OldWayUsingThis() {
  var a = function() {
    this.val = 1;
    setTimeout(function() {
      console.log('val 1 : ', ++this.val);
    })
  }	
  var b = new a();  
}

function es5OldWayUsingBindThis() {
  var a = function() {
    this.val = 1;
    setTimeout(function () {
      console.log('val 1 : ', ++this.val);
    }.bind(this), 1)
  }
  var b = new a();
  
}

function es5OldWayUsingBindThat() {
  var a = function() {
    var that = this;
    this.val = 1;
    setTimeout(function () {
      console.log('val 1 : ', ++that.val);
    }, 1)
  }
  var b = new a();
}

function es6NewWay() {
  var a = function() {
    this.val = 1;
    setTimeout(()=> {
      console.log('val 1 : ', ++this.val);
    })
  }
  var b = new a();  
}

export function ArrowFunctionsLexicalThis() {
  return (
    <div>
      <h1>Arrow Functions</h1>
      <h2>ES5 old way : </h2>
      <div>
        <button onClick={es5OldWayUsingThis}>First press F12, open Console, click here to call Const Function</button>
      </div>
      <h2>ES5 Use of this : </h2>
      <div>
        <button onClick={es5OldWayUsingBindThis}>First press F12, open Console, click here to call Const Function</button>
      </div>
      <h2>ES5 Use of that : </h2>
      <div>
        <button onClick={es5OldWayUsingBindThat}>First press F12, open Console, click here to call Const Function</button>
      </div>
      <h2>ES6 Arrow function : </h2>
      <div>
        <button onClick={es6NewWay}>First press F12, open Console, click here to call Const Function</button>
      </div>
    </div>
  );
}

// export default ArrowFunctionsLexicalThis;
