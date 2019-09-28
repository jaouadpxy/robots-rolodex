import React from 'react';
import './../card/card.style.css';

const Card = ({ monster: { id, name, email } }) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}?set=set&size=180x180`} alt="" />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default Card;
