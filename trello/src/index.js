import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import List from './list';
import testLists from './data';

function App({ lists }) {
  return (
    <div className="list-group">
      {lists.map (list =>
        <List key={list.title} list={list} />
      )}
    </div>
  )
}

App.propTypes = {
  lists: PropTypes.array.isRequired
}

ReactDOM.render(<App lists={testLists} />, document.getElementById('root'));
