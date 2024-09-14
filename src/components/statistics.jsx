import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaProjectDiagram, FaGlobeAmericas, FaProductHunt, FaCogs, FaChartLine, FaAward, FaHandshake } from 'react-icons/fa';

export const Statistics = () => {
  const stats = [
    { quantity: "50+", description: "Global Clients", icon: <FaUsers size={40} /> },
    { quantity: "500+", description: "Successful Projects", icon: <FaProjectDiagram size={40} /> },
    { quantity: "10", description: "Countries Covered", icon: <FaGlobeAmericas size={40} /> },
    { quantity: "10", description: "Innovative Products", icon: <FaProductHunt size={40} /> },
    { quantity: "25", description: "Cutting-edge Solutions", icon: <FaCogs size={40} /> },
    { quantity: "40%", description: "Year-over-Year Growth", icon: <FaChartLine size={40} /> },
    { quantity: "15", description: "Industry Awards", icon: <FaAward size={40} /> },
    { quantity: "100+", description: "Strategic Partnerships", icon: <FaHandshake size={40} /> },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {stats.map(({ quantity, description, icon }) => (
          <motion.div
            key={description}
            className="flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4">
              {icon}
            </div>
            <h2 className="text-3xl font-bold mb-2">{quantity}</h2>
            <p className="text-lg text-gray-600">{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
