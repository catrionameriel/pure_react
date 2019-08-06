import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ErrorBox({ children }) {
  return (
    <div className="error-box">
      <ErrorSymbol />
      { children }
    </div>
  )
};

function ErrorSymbol() {
  return(
    <i className="fas fa-exclamation-triangle"></i>
  )
};

ReactDOM.render(
  <ErrorBox>
     Something went wrong
  </ErrorBox>,
  document.getElementById('root')
);
