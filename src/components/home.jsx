import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-36 bg-transparent">
      {/* Text Section with Enhanced 3D Style */}
      <motion.div
        className="flex-1 text-center md:text-left mb-12 md:mb-0 md:pr-8 lg:pr-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
            letterSpacing: '0.05em',
            transform: 'perspective(500px) rotateX(15deg)',
          }}
        >
          Shaping the Future with Hivesync
          <span
  className="relative text-blue-400 text-opacity-80 animate-pulse sm:right-0 right-0 sm:top-2 top-1"
>
  ✨
</span>

        </motion.h1>
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          style={{ transform: 'perspective(500px) rotateY(5deg)', fontWeight: '500' }}
        >
          At HiveSync, we push the boundaries of technology. With innovative solutions, our team transforms ideas into impactful realities, ensuring your business thrives in a digital era.
        </motion.p>
        <div className="flex justify-center md:justify-start space-x-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link to="/contact">
              <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold py-3 px-4 sm:px-6 rounded-lg hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform-gpu">
                Let’s Talk
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a href="#services">
              <button className="text-purple-500 font-bold py-3 px-4 sm:px-6 rounded-lg border border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 transform-gpu">
                Discover More
              </button>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Section with Framer Motion and Effects */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <img
          src="/src/assets/logo.svg" // Adjust the path to match your project structure
          alt="Hero"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
    </div>
  );
};

export default Home;
