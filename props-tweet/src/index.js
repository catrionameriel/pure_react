import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const testTweet = {
  message: 'This is my tweet, what do you think?',
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "ILove Cats"
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:25:37"
}

function Tweet( {tweet} ) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <NameWithHandle /><Time />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  )
}

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img src={url}
    className="avatar"
    alt="avatar" />
  )
}

function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  )
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Name</span>
      <span className="handle">@handle</span>
    </span>
  )
}

const Time = () => (
  <span className="time">3h ago</span>
)

const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
)

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button" />
)

const LikeButton = () => (
  <i className="fa fa-heart like-button" />
)

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
)

ReactDOM.render(
  <Tweet tweet={testTweet} />,
  document.querySelector('#root')
)
