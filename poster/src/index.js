import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

const info = {
  title: 'I love React',
  image: '/react.svg',
  text: 'Don\'t you?'
}

function Poster({ info }) {
  return (
    <div className="black-background is-flex is-center is-column">
      <Title title={info.title} />
      <Image url={info.image} />
      <Text text={info.text} />
    </div>
  )
}

function Title({title}) {
  return (
    <span className="heading has-small-margin-bottom">
      { title }
    </span>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}

function Image({ url }) {
  return (
    <img src={url} className="small-image has-border" alt="React icon" />
  )
}

function Text({ text }) {
  return (
    <p className="paragraph">
      {text}
    </p>
  )
}

ReactDOM.render(<Poster info={info} />, document.getElementById('root'));
