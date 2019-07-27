import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

const sendTo = {
  firstName: 'Catriona',
  lastName: 'Meriel',
  address: {
    street: '39/5 Temple Park Crescent',
    city: 'Edinburgh'
  }
}

const sender = {
  firstName: 'Pete',
  lastName: 'Myall',
  address: {
    street: '4 Lyons Lane',
    city: 'Warrington'
  }
}

function Envelope({ sendTo, sender }) {
  return (
    <div className="envelope">
      <Heading sender={sender} />
      <div className="centered">
        <AdressLabel person={sendTo} />
      </div>
    </div>
  )
}

function Heading({ sender }) {
  return (
    <div className="heading">
      <AdressLabel person={sender} />
      <Stamp />
    </div>
  )
}

function AdressLabel({ person }) {
  return (
    <ul className="label">
      <li>{fullName(person.firstName, person.lastName)}</li>
      <li>{person.address.street}</li>
      <li>{person.address.city}</li>
    </ul>
  )
}

function Stamp() {
  return (
    <div className="stamp">
      STAMP
    </div>
  )
}

AdressLabel.propTypes = {
  person: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired
  })
}

const fullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

ReactDOM.render(
  <Envelope sendTo={sendTo} sender={sender}/>,
  document.getElementById('root')
);
