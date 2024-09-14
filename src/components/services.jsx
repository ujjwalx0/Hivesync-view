import React from 'react';
import { motion } from 'framer-motion';
import services from './data/services'; // Ensure this path is correct

const ServicesTemplate = () => {
  // 3D hover effect variants
  const cardVariants = {
    hover: {
      scale: 1.1,
      rotateX: 10,
      rotateY: 15,
      rotateZ: 5,
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
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group rounded-xl border p-8 shadow-lg transition-transform duration-300  dark:bg-gray-800 cursor-pointer relative overflow-hidden"
            whileHover={{ 
              scale: 1.05, 
              transition: { duration: 0.4, ease: 'easeInOut' }
            }}
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative rounded-lg p-6 flex flex-col items-center justify-center"
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              initial="rest"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 -z-10 transform rotate-12 scale-110" />
              <div className="mb-6 flex items-center justify-center">
                <div className="text-5xl text-primary dark:text-white">
                  {React.createElement(service.icon)}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {service.service_name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
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
