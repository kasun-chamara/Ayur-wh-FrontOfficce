import React from 'react';
import Slider from 'react-slick';
import './WhatAyurOffer.css';
import sampleImg from '../../assets/sample-img.jpg';

// Sample data
const cardsData = [
  { title: 'Herbal Therapy', description: 'Natural herbs and oils to cleanse and rejuvenate.', image: sampleImg },
  { title: 'Detox Programs', description: 'Tailored detox for full-body restoration.', image: sampleImg },
  { title: 'Ayurvedic Massage', description: 'Stress-relief massage with ancient techniques.', image: sampleImg },
  { title: 'Diet Consultation', description: 'Personalized dietary plans for health and vitality.', image: sampleImg },
  { title: 'Mind Balance', description: 'Mental clarity through natural healing methods.', image: sampleImg },
  { title: 'Skin Glow Therapy', description: 'Revitalize your skin with natural care.', image: sampleImg },
];

const WhatAyurOffer = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="what-ayur-wrapper">
      <div className="what-ayur-container">
        {/* <h2 className="section-topic">The combination <br />of nature and science.</h2> */}
        <Slider {...sliderSettings}>
          {cardsData.map((card, index) => (
            <div key={index}>
              <div className="offer-card-wrapper">
                <div className="offer-card h-100">
                  <img src={card.image} alt={card.title} className="offer-img" />
                  <div className="card-body m-4">
                    <h5 className="card-title">{card.title}</h5>
                    <hr />
                    <p className="card-text">{card.description}</p>
                    <button className="btn-mr">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider><hr className='mt-3'></hr>
      </div>
    </div>
  );
};

export default WhatAyurOffer;
