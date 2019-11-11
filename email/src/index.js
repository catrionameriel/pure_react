import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

const email = {
  sender: 'Jeremy Beremy',
  subject: 'Infinite Time',
  date: '18 Oct 2019',
  message: 'Do you what time looks like from space? Well you should! Blah blah blah I\'m an email with lots of words'
}

function Inbox( {email} ) {
  const { sender, subject, date, message } = email;
  return (
    <div className="is-display-flex grey-border has-medium-padding-all-around">
      <div className="is-display-flex is-aligned-center has-medium-margin-right">
        <input type="checkbox" />
        <img src="email.svg" alt="envelope" />
      </div>
      <div className="is-display-flex display-flex is-column is-flex-1">
        <div className="email-header has-small-margin-bottom">
          <Info info={sender} />
          <Info info={subject} />
          <Date info={date} />
        </div>
        <Message message={message} />
      </div>
    </div>
  )
}

function Info( {info} ) {
  return (
    <span className="has-bold-text">
      {info}
    </span>
  )
}

function Date({ info }) {
  return (
    <span className="has-bold-text">
      {moment(info, "D MMM YYYY").fromNow()}
    </span>
  )
}

function Message({ message }) {
  return (
    <span>
      {message}
    </span>
  )
}

ReactDOM.render(<Inbox email={email} />, document.getElementById('root'));
