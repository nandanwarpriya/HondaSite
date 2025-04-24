import React, { useEffect } from "react";
import "./newlaunch.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {Link} from "react-router-dom";

export default function NewLaunchCarousel() {
  useEffect(() => {
    // Carousel is auto-initialized by Bootstrap 5 JS bundle
  }, []);

  const images = [
    "new_release_Sp160_obd2.jpg",
    "new_release_sp125_obd2b.jpg",
    "new_release_activa125_obd2.jpg",
    "Activa_E.jpg",
    "QC1.jpg",
  ];

  return (
    <div className="newlaunchdiv1">
      <h1 className="newlaunchh1">New Launch</h1>
      <span>
        <img
          src="https://www.honda2wheelersindia.com/assets/images/wheel.png"
          alt="wheel"
        />
      </span>
      <hr align="left" className="aboutushr" width="80px" />
      <hr align="left" className="aboutushr" width="60px" />

      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {images.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="1000"
            >
              <Link>
                <img
                  src={`https://www.honda2wheelersindia.com/assets/images/new-launch/${img}`}
                  className="d-block w-100"
                  alt={`New launch ${index + 1}`}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </div>
  );
}
