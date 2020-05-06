import React from 'react';
import './style.scss';

const Card = props => {
  return (
    <div className="card">
      <div className="card-container">{props.children}</div>
    </div>
  );
};

export default Card;
