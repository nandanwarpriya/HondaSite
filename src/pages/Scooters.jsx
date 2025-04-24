import React from 'react';
import './Scooters.css';

const Scooters = () => {
  return (
    <section className="product-grid">
      <h1>Scooters</h1>
      <div className="grid">
        <div className="product-card">
          <img src="https://via.placeholder.com/300x200?text=Activa" alt="Activa" />
          <h3>Honda Activa</h3>
          <p>Price: ₹75,000</p>
        </div>
        <div className="product-card">
          <img src="https://via.placeholder.com/300x200?text=Dio" alt="Dio" />
          <h3>Honda Dio</h3>
          <p>Price: ₹60,000</p>
        </div>
      </div>
    </section>
  );
};

export default Scooters;
