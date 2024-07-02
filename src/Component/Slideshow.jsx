import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import myphoto from '../assets/imagemy.jpg';
import myP from '../assets/strangerthings.webp';

const slideImages = [
  {
    url: myphoto,
  },
  {
    url: myP,
  }
];

const Slideshow = () => {
  const properties = {
    prevArrow: (
      <button className="bg-transparent text-white p-2 rounded-full hover:bg-white hover:bg-opacity-25 focus:outline-none">
        <span className="text-4xl">&#9664;</span>
      </button>
    ),
    nextArrow: (
      <button className="bg-transparent text-white p-2 rounded-full hover:bg-white hover:bg-opacity-25 focus:outline-none">
        <span className="text-4xl">&#9654;</span>
      </button>
    )
  };

  return (
    <div className="slide-container mx-auto ">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="flex items-center justify-center h-96 bg-cover bg-center" style={{ backgroundImage: `url(${slideImage.url})` }}>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
