import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Error() {
  return (
    <ErrorBox className="is-faded-red is-display-flex is-center">
      Something has gone wrong!
    </ErrorBox>
  )
}

function ErrorBox(props) {
  return (
    <div className={props.className}>
      <ErrorIcon className="is-red"/>
      <span className="has-red-text">
        {props.children}
      </span>
    </div>
  )
}

function ErrorIcon(props) {
  return (
    <svg className={props.className} width="24" height="24" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  )
}

ReactDOM.render(<Error/>, document.getElementById('root'));

