import React from 'react';
import PropTypes from 'prop-types';

function ListItem({ listItem }) {
  return (
    <li className="list-item">
      {listItem.text}
    </li>
  )
}

ListItem.propTypes = {
  listItem: PropTypes.object
}

export default ListItem;
