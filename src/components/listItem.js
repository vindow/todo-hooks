import React from 'react';
import "./listItem.css";

function ListItem(props) {
  const {callback, content} = props;
  return (
    <div className="listItem">
      <span className="listItemText">{content.text}</span>
      <button className="checkButton" onClick={() => callback(content.id)}>✓</button>
    </div>
  );
}

export default ListItem;