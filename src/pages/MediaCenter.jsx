import React from "react";
import "./mediacenter.css";

const mediaItems = [
  {
    title: "Honda Launches the All-New SP 160",
    date: "March 10, 2025",
    image: "https://www.honda2wheelersindia.com/assets/images/newsroom/thumbnail-3.jpg",
    link: "#",
  },
  {
    title: "HMSI Inaugurates New Dealership in Delhi",
    date: "February 25, 2025",
    image: "https://www.honda2wheelersindia.com/assets/images/newsroom/thumbnail-1.jpg",
    link: "#",
  },
  {
    title: "Activa Electric Scooter Unveiled",
    date: "January 30, 2025",
    image: "https://www.honda2wheelersindia.com/assets/images/newsroom/thumbnail-2.jpg",
    link: "#",
  },
];

export default function MediaCenter() {
  return (
    <div className="media-center">
      <h2>Media Center</h2>
      <hr className="media-hr" />
      <div className="media-grid">
        {mediaItems.map((item, index) => (
          <div key={index} className="media-card">
            <a href={item.link}>
              <img src={item.image} alt={item.title} />
              <div className="media-content">
                <h3>{item.title}</h3>
                <p>{item.date}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
