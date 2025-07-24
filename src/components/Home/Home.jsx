import React from 'react';
import ParticlesLayout from '../common/ParticlesLayout';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
     <ParticlesLayout/>
    </div>
  );
};

export default Home;