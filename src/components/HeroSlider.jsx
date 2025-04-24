import React from 'react';
import Slider from 'react-slick';
import './HeroSlider.css';
import ActivaE from '../assets/images/ActivaE-main.webp';
import Activa125 from '../assets/images/Activa125-main.webp';
import CB200X from '../assets/images/CB200X-main.webp';
import Hornet from '../assets/images/Hornet-2.0-main.webp';
import QC from '../assets/images/QC1-main.webp';
import SP160 from '../assets/images/SP-160-main.webp'

const HeroSlider = ({ onSlideClick }) => {
  const slides = [
    { id: 'Activa125', img: Activa125, alt: 'Activa 125' },
    { id: 'ActivaE', img: ActivaE, alt: 'Activa Electric' },
    { id: 'CB200X', img: CB200X, alt: 'CB200X' },
    {id:'Hornet2.0', img:Hornet, alt:'Hornet2.0'},
    {id:'QC1', img:QC, alt:'QC1'},
    {id:'SP160', img:SP160, alt:'SP160'}
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
  };

  const handleSlideClick = (bikeId) => {
    if (onSlideClick) {
      onSlideClick(bikeId);  // Pass the selected bikeId to the parent component
    }
  };

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide" onClick={() => handleSlideClick(slide.id)} style={{ cursor: 'pointer' }}>
            <img src={slide.img} alt={slide.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
