import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

const person = {
  name: 'John Williams',
  expiration: "04/24",
  ccn: 1234567812345678,
  bank: 'Santander'
}

function CreditCard({ cardInfo }) {
  return (
    <div className="credit-card">
      <BankInfo name={cardInfo.bank}/>
      <CardNumber number={cardInfo.ccn}/>
      <Expiration date={cardInfo.expiration}/>
      <Name name={cardInfo.name}/>
    </div>
  );
}

CreditCard.propTypes = {
  cardInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    expiration: PropTypes.string.isRequired,
    ccn: PropTypes.number.isRequired,
    bank: PropTypes.string.isRequired
  })
}

function BankInfo({ name }) {
  return <span className="large-text">{name}</span>;
}

function CardNumber({ number }) {
  return (
    <div className="number">
      <span className="mid-text">{format(number)}</span>
       <span className="small-text">1234</span>
    </div>
  )
}

function Expiration({ date }) {
  return (
    <div className="exp">
      <span className="small-text">VALID UNTIL</span>
      <span className="mid-text">{date}</span>
    </div>
  )
}

function Name({ name }) {
  return (
    <span className="mid-text">{name}</span>
  )
}


const format = (number) => {
  const numberString = number.toString();
  if (numberString.length > 16) {
    return;
  } else {
    return numberString.replace(/(\d{4})/g, "$1 ");
  }
}

ReactDOM.render(<CreditCard cardInfo={person} />, document.getElementById('root'));
