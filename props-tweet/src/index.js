import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

const testTweet = {
  message: 'This is my tweet, what do you think?',
  gravatar: "xyz",
  author: {
    handle: 'catperson',
    name: 'ILove Cats'
  },
  likes: 2,
  retweets: 0,
  timestamp: "2019-07-20 21:25:37"
}

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <NameWithHandle author={tweet.author} /><Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton retweets={tweet.retweets}/>
          <LikeButton likes={tweet.likes}/>
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

function NameWithHandle({ author }) {
  return (
    <span className="name-with-handle">
      <span className="name">
        {author.name}
      </span>
      <span className="handle">
        @{author.handle}
      </span>
    </span>
  )
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">
      {timeString}
    </span>
  );
}

const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
)

const RetweetButton = ({ retweets }) => {
  const retweetsCount = getCount(retweets);
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet" />
      {retweetsCount}
    </span>
  )
}

const LikeButton = ({ likes }) => {
  const likesCount = getCount(likes);
  return (
    <span className="like-button">
      <i className="fa fa-heart" />
      {likesCount}
    </span>
  )
}

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
)

const getCount = (count) => {
  if (count > 0) {
    return (
      <span className="count">
        {count}
      </span>
    );
  } else {
    return null;
  }
}

ReactDOM.render(
  <Tweet tweet={testTweet} />,
  document.querySelector('#root')
)
