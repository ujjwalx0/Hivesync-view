import React from 'react';
import { motion } from 'framer-motion';
import data from './data/services_data.json';

const ServicesTemplate = () => {
  // 3D hover effect variants
  const cardVariants = {
    hover: {
      scale: 1.1,
      rotateX: 10,
      rotateY: 15,
      rotateZ: 2,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    },
    tap: {
      scale: 0.95,
      rotateX: -5,
      rotateY: -5,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold mb-12 text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-gray-800 bg-clip-text">
          Our Services
        </span>
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.services.map((service, index) => (
          <motion.div
            key={index}
            className="group rounded-xl border p-8 shadow-lg transition-transform duration-300 bg-[#fff] dark:bg-[#1e1e1e] cursor-pointer relative overflow-hidden"
            whileHover={{ 
              scale: 1.05, 
              background: 'linear-gradient(135deg, rgba(255,0,150,0.5), rgba(0,204,255,0.5))',
              transition: {
                duration: 0.4,
                ease: 'easeInOut',
              }
            }}
            initial={{ background: 'transparent' }}
          >
            <motion.div
              className="rounded-lg p-6"
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              initial="rest"
            >
              <div className="mb-6 flex items-center justify-center">
                {/* Placeholder for icons */}
                <div className="text-4xl text-primary">
                  {/* Insert icon component here */}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {service.service_name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-600">
                {service.service_desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesTemplate;
