import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import './index.css';

const testTweets = [
  {
    message: 'This is my tweet, what do you think?',
    gravatar: "xyz",
    author: {
      handle: 'imahandle',
      name: 'ILove Cats'
    },
    likes: 2,
    retweets: 5,
    timestamp: "2019-07-20 21:25:37"
  },
  {
    message: 'This is my second tweet, it sucks',
    gravatar: "xyz",
    author: {
      handle: 'imahandle',
      name: 'ILove Cats'
    },
    likes: 0,
    retweets: 0,
    timestamp: "2019-09-20 05:10:10"
  },
  {
    message: 'Hello World!',
    gravatar: "xyz",
    author: {
      handle: 'imahandle',
      name: 'ILove Cats'
    },
    likes: 100,
    retweets: 50,
    timestamp: "2019-10-30 20:08:12"
  }
]

function TweetList({ tweets }) {
  return (
    <ul>
      {tweets.map((tweet) => {
        return <Tweet tweet={tweet} />
      })}
    </ul>
  )
}


function Tweet({ tweet }) {
  return (
    <li className="tweet">
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
    </li>
  )
}

Tweet.propTypes = {
  tweet: PropTypes.shape({
    message: PropTypes.string,
    gravatar: PropTypes.string,
    author: PropTypes.object.isRequired,
    likes: PropTypes.number,
    retweets: PropTypes.number,
    timestamp: PropTypes.string
  })
}

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img src={url}
    className="avatar"
    alt="avatar" />
  )
}

Avatar.propTypes = {
  hash: PropTypes.string
}


function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  )
}

Message.propTypes = {
  author: PropTypes.string
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

NameWithHandle.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired
  }).isRequired
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">
      {timeString}
    </span>
  );
}

Time.propTypes = {
  time: PropTypes.string
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

RetweetButton.propTypes = {
  retweets: PropTypes.number
};

const LikeButton = ({ likes }) => {
  const likesCount = getCount(likes);
  return (
    <span className="like-button">
      <i className="fa fa-heart" />
      {likesCount}
    </span>
  )
}

LikeButton.propTypes = {
  likes: PropTypes.number
};

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
};

ReactDOM.render(
  <TweetList tweets={testTweets} />,
  document.querySelector('#root')
)
