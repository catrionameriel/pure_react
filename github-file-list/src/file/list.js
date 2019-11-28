import React from 'react';
import PropTypes from 'prop-types';
import FileName from './name';
import CommitMessage from './message';
import Time from '../time';

function FileList({ files }) {
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

function FileListItem({ file }) {
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

export default FileList;
