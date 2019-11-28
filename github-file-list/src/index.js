import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import FileList from './file/list';
import './index.css';

const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: "2019-11-11 21:24:00",
    latestCommit:
    {
      message: 'Initial commit'
    }
  }, {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: "2019-11-11 21:24:00",
    latestCommit: {
      message: 'Initial commit'
    }
  }, {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: "2019-11-18 21:24:00",
    latestCommit: {
      message: 'Added a readme'
    }
  }
];

function App() {
  return (
    <>
      <FileList files={testFiles} />
    </>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
