import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './list_item';

function List({ list }) {
  return (
    <ul className="list">
      <ListHeader title={list.title} />
      {list.cards.map(card =>
        <ListItem key={card.id} listItem={card} />
      )}
      <ListFooter />
    </ul>
  )
}

List.propTypes = {
  list: PropTypes.object
}

function ListHeader({ title }) {
  return (
    <div className="list-header">
      <ListTitle>
        {title}
      </ListTitle>
      <i className="dots fas fa-ellipsis-h"></i>
    </div>
  )
}

function ListTitle({ children }) {
  return (
    <h2 className="list-header-title">
      {children.toUpperCase()}
    </h2>
  )
}

function ListFooter() {
  return (
    <span className="list-footer">
      Add a card...
    </span>
  )
}

export default List;
