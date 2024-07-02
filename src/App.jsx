import React from 'react';
import Navbar from './Component/Navbar';
import Slideshow from './Component/Slideshow';
import CardSection from './Component/Cardsection';

import Footer from './Component/Footer';
import myphoto from "./assets/imagemy.jpg";
import myP from './assets/strangerthings.webp';

const movies = [
  { image: myphoto, title: 'Movie 1' },
  { image: myP, title: 'Movie 2' },
  { image: myphoto, title: 'Movie 3' },
  { image: myP, title: 'Movie 4' },
  { image: myphoto, title: 'Movie 5' },
  { image: myP, title: 'Movie 6' },
  { image: myphoto, title: 'Movie 7' },
  { image: myP, title: 'Movie 8' },
  { image: myphoto, title: 'Movie 9' },
  { image: myP, title: 'Movie 10' },
  { image: myphoto, title: 'Movie 11' },
  { image: myP, title: 'Movie 12' },
];

const tvShows = [
  { image: myP, title: 'TV Show 1' },
  { image: myphoto, title: 'TV Show 2' },
  { image: myP, title: 'TV Show 3' },
  { image: myphoto, title: 'TV Show 4' },
  { image: myP, title: 'TV Show 5' },
  { image: myphoto, title: 'TV Show 6' },
  { image: myP, title: 'TV Show 7' },
  { image: myphoto, title: 'TV Show 8' },
  { image: myP, title: 'TV Show 9' },
  { image: myphoto, title: 'TV Show 10' },
  { image: myP, title: 'TV Show 11' },
  { image: myphoto, title: 'TV Show 12' },
];

function App() {
  return (
    <div className="bg-slate-700 min-h-screen">
      <Navbar />
      <Slideshow />
      <h2 className="text-4xl text-white text-center font-bold mt-8">Movies</h2>
      <CardSection items={movies} />
      <h2 className="text-4xl text-white text-center font-bold mt-8">TV Shows</h2>
      <CardSection items={tvShows} />
      <Footer />
    </div>
  );
}

export default App;
