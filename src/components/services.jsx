import React, { useState } from 'react';
import Slider from 'react-slick';
import services from './data/services'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const ServicesCarousel = () => {
  const [selectedService, setSelectedService] = useState(0);

  const handleTabClick = (index) => {
    setSelectedService(index);
  };

  const handleAfterChange = (currentSlide) => {
    setSelectedService(currentSlide);
  };

  const { icon: SelectedIcon, service_name, service_desc } = services[selectedService];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '10px',
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '10px',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '10px',
        }
      }
    ]
  };

  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold mb-12 text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-gray-800 bg-clip-text">
          Our Services
        </span>
      </h2>
      <div className="relative">
        {/* Carousel for Tabs */}
        <Slider {...settings} className="pb-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-tab rounded border-2 ${index === selectedService ? 'bg-gradient-to-r from-green-300 via-yellow-300 to-red-300' : 'bg-gray-200'} flex items-center justify-center p-4 m-2 cursor-pointer`}
              onClick={() => handleTabClick(index)}
            >
              <div className="text-2xl">{React.createElement(service.icon)}</div>
              <span className="text-lg font-semibold text-center">{service.service_name}</span>
            </div>
          ))}
        </Slider>
        {/* Service Detail Card */}
        <div className="mt-8 p-6  border shadow-lg rounded-lg dark:bg-gray-800 detail-card max-w-md mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="text-5xl text-blue-600 dark:text-white">
              {React.createElement(SelectedIcon)}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-4">
            {service_name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            {service_desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
