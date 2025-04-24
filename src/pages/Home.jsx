import React from 'react';
import HeroSlider from '../components/HeroSlider';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <HeroSlider />
      <div className="content">
        <h1>Welcome to Honda 2Wheeler India</h1>
        <p>Explore our latest scooters and motorcycles.</p>
      </div>
    </section>
  );
};

export default Home;
