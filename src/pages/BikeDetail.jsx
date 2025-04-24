import React from 'react';
import EnquiryForm from './EnquiryForm';
import './BikeDetail.css';

const BikeDetail = () => {
  const bikeModel = 'Honda CBR600'; // You can dynamically get this value based on the selected bike

  return (
    <div className="bike-detail">
      <h1>{bikeModel} Details</h1>
      <div className="bike-info">
        <img
          src="https://via.placeholder.com/600x400?text=Honda+CBR600"
          alt={bikeModel}
        />
        <p>
          The Honda CBR600 is a powerful and stylish motorcycle, designed to offer
          an exciting ride experience with its sleek design and high performance.
        </p>
      </div>

      {/* Enquiry Form */}
      <EnquiryForm bikeModel={bikeModel} />
    </div>
  );
};

export default BikeDetail;
