import React, { useState } from 'react';
import './section3.css';
import image1 from '../image/gallery1.png';
import image2 from '../image/gallery2.png';
import image3 from '../image/gallery3.png';
import image4 from '../image/gallery4.png';

const images = [image1, image2, image3, image4];

const Section3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="section3">
      <button className="arrow left-arrow" onClick={goToPrevSlide}>
        &#8249;
      </button>
      <div className="section3-track" style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
        {images.map((img, index) => (
          <div key={index} className="section3-image">
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="arrow right-arrow" onClick={goToNextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default Section3;
