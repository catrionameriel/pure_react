import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function Children() {
  return (
    <>
      <FirstChildOnly>
        <h1>This is some text that I want to show</h1>
        <p>This is text I don't want to show</p>
      </FirstChildOnly>
      <LastChildOnly>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </LastChildOnly>
      <Head number={7}>
        <p>Don't show this</p>
        <p>Don't show this</p>
        <p>Don't show this</p>
        <p>Don't show this</p>
        <p>Don't show this</p>
        <p>Don't show this</p>
        <p>Don't show this</p>
        <p>Don't show this</p>
      </Head>
      <Tail line={3}>
        <p>Don't show this</p>
        <p>Don't show this</p>
        <p>I will be shown, hooray!</p>
        <p>Don't show this</p>
        <p>Don't show this</p>
      </Tail>
    </>
  )
}

function FirstChildOnly( {children} ) {
  const text = React.Children.map(children, (child, index) => {
    if (index === 0) {
      return child;
    }
  })
  return (
    <div>
      {text}
    </div>
  )
}

function LastChildOnly( {children} ) {
  const count = React.Children.count(children);
  const text = children[count -1];
  return (
    <div>
      {text}
    </div>
  )
}

function Head(props) {
  return (
    <div>
      {props.number}
    </div>
  )
}

function Tail(props) {
  return (
    <div>
      {props.children[props.line - 1]}
    </div>
  )
}

Head.propTypes = {
  number: PropTypes.number.isRequired
}

ReactDOM.render(<Children />, document.getElementById('root'));
