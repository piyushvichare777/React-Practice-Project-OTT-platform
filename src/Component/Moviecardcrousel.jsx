// CardContainer.jsx
import React from 'react';
import Card from './Card';

const CardContainer = ({ items }) => {
  return (
    <div className="flex flex-wrap">
      {items.map((item, index) => (
        <Card key={index} image={item.image} title={item.title} />
      ))}
    </div>
  );
};

export default CardContainer;
