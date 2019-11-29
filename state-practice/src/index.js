import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function handleEvent(event) {
  console.log('Child did ', event);
}

function Parent() {
  return (
    <Child onAction={handleEvent} />
  )
}

function Child({ onAction }) {
  return (
    <button onClick={onAction}>
      Click me!
    </button>
  )
}

ReactDOM.render(<Parent />, document.getElementById('root'));
