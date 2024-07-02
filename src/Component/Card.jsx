// Card.jsx
import React from 'react';

const Card = ({ image, title }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-40 object-cover"/>
        <div className="p-2">
          <h2 className="text-sm font-semibold">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
