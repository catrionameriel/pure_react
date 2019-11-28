import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Time from './time';
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

function FileList( {files} ) {
  return (
    <ul className="file-list">
      {files.map(file => (
        <FileListItem key={file.id} file={file} />
      ))}
    </ul>
  )
};

FileList.propTypes = {
  files: PropTypes.array
};

function FileListItem( {file} ) {
  return (
    <li className="file-list-item">
      <FileName name={file.name} type={file.type} />
      <CommitMessage message={file.latestCommit.message} />
      <Time time={file.updated_at} />
    </li>
  )
};

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

function FileName( {name, type}) {
  return (
    <div className="file-list-item-name">
      <FileIcon type={type} />
      <span>
        {name}
      </span>
    </div>
  )
};

FileName.propTypes = {
  name: PropTypes.string
}

function FileIcon( {type} ) {
  const icons = {
    'folder': 'fas fa-folder',
    'file': 'far fa-file'
  }
  return (
    <i className={`file-list-item-name-icon ${icons[type]}`} alt="file-icon" />
  )
};

FileName.propTypes = {
  type: PropTypes.string.isRequired
};

function CommitMessage( {message} ) {
  return (
    <span className="file-list-item-message">
      {message}
    </span>
  )
};

CommitMessage.propTypes = {
  message: PropTypes.string.isRequired
};


ReactDOM.render(<App />, document.getElementById('root'));
