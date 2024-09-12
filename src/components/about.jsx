import React from 'react';
import { Statistics } from "./statistics"; // Ensure this path is correct
import pilot from '../assets/pilot.svg'; 

export const About = () => {
  return (
    <section id="about" className="container py-0 sm:py-0 mb-0">
      <div className="bg-muted/50 border rounded-lg py-0 px-6">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
          <img
            src={pilot}
            alt="Pilot"
            className="w-[300px] object-cover rounded-lg shadow-lg"
          />
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
                About Hivesync
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              <strong>Hive Sync</strong> is a forward-thinking startup blending e-commerce with IT consulting. We run a vibrant e-commerce platform offering a variety of high-quality products. Our IT consulting covers technology integration, custom software development, cloud solutions, cybersecurity, data analytics, and IT strategy.<br /><br />
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