import React from 'react';
import ReactDOM from 'react-dom';


function HelloWorld() {
  return (
    <>
      <Hello />
      <World />!
    </>
  );
}

function Hello() {
  return <span>Hello </span>;
}

function World() {
  return <span>World</span>;
}

ReactDOM.render(
  <HelloWorld/>,
  document.querySelector('#root')
);
