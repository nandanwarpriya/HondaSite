import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import "./latest.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function LatestCarousel() {
  useEffect(() => {
    // No manual initialization needed with Bootstrap 5 JS bundle.
  }, []);

  return (
    <div className="latestdiv1">
      <h1 className="latesth1">Latest</h1>
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
          {[
            "Hornet_newlaunch_img_latest_product_dev_one.jpg",
            "livobs-VI-latest_product-image-dev-one.jpg",
            "cd110_latest_product_dev_one.jpg",
            "dio125_latest_section_image_dev_one.jpg",
            "dio_110_latest_img_july1723.jpg",
            "unicorn_bs_latest_section_image.jpg",
            "shine125_new_launch_new2_dev_one.jpg",
            "sp125_latest_23.jpg",
            "activa_125_latest_img_july1723.jpg",
            "activa_latest_img_july1723.jpg",
          ].map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="1000"
            >
            <Link>
                <img
                  src={`https://www.honda2wheelersindia.com/assets/images/latest-product/${img}`}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
