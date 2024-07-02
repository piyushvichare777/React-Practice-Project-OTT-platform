// CardSection.js
import React from 'react';

const CardSection = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-8">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;

