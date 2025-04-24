import React from 'react';
import './Motorcycles.css';

const Motorcycles = () => {
  return (
    <section className="product-grid">
      <h1>Motorcycles</h1>
      <div className="grid">
        <div className="product-card">
          <img src="https://via.placeholder.com/300x200?text=Honda+CBR600" alt="Honda CBR600" />
          <h3>Honda CBR600</h3>
          <p>Price: ₹1,50,000</p>
        </div>
        <div className="product-card">
          <img src="https://via.placeholder.com/300x200?text=Honda+CBR650R" alt="Honda CBR650R" />
          <h3>Honda CBR650R</h3>
          <p>Price: ₹7,00,000</p>
        </div>
        <div className="product-card">
          <img src="https://via.placeholder.com/300x200?text=Honda+Hornet+2.0" alt="Honda Hornet 2.0" />
          <h3>Honda Hornet 2.0</h3>
          <p>Price: ₹1,30,000</p>
        </div>
        <div className="product-card">
          <img src="https://via.placeholder.com/300x200?text=Honda+CB+350" alt="Honda CB 350" />
          <h3>Honda CB 350</h3>
          <p>Price: ₹1,80,000</p>
        </div>
      </div>
    </section>
  );
};

export default Motorcycles;
