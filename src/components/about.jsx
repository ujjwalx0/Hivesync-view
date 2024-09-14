import React from 'react';
import { motion } from 'framer-motion';
import { Statistics } from "./statistics";
import pilot from '../assets/pilot.png';

// Preload the pilot image to prevent any loading issues
const preloadImage = new Image();
preloadImage.src = pilot;

export const About = () => {
  return (
    <section id="about" className="container py-0 sm:py-0 mb-0 flex">
      <div className="bg-muted/50 rounded-lg py-0 px-6 w-full md:w-auto">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          
          {/* 3D Motion Image with Zoom-In/Zoom-Out Effect */}
          <motion.img
            src={pilot}
            alt="About"
            className="w-full md:w-[40%] object-contain rounded-lg mx-auto h-auto"
            style={{ transform: 'translateX(-30px) translateY(-10px) !important' }}
            initial={{ opacity: 0, scale: 0.9, x: 0, y: 0 }}
            animate={{ opacity: 1, scale: 1, x: -10, y: -10 }} // Slight shift
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={{
              scale: 1.1,
              rotateY: 20,
              rotateX: 30,
              rotateZ: 5,
              transition: { duration: 0.7, ease: 'easeOut' }
            }}
            whileTap={{
              scale: 0.95,
              rotateY: -15,
              rotateX: -10,
              transition: { duration: 0.5, ease: 'easeIn' }
            }}
          />

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
                About Hivesync
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              <strong>Hive Sync</strong> is a forward-thinking startup blending e-commerce with IT consulting. We run a vibrant e-commerce platform offering a variety of high-quality products. Our IT consulting covers technology integration, custom software development, cloud solutions, cybersecurity, data analytics, and IT strategy.
              <br /><br />
              Our dedicated team of experts is committed to delivering tailored solutions that enhance technology and provide exceptional customer experiences.
            </p>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
