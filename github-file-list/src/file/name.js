import React from 'react';
import PropTypes from 'prop-types';

function FileName({ name, type }) {
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

function FileIcon({ type }) {
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

export default FileName;
