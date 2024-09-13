import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.svg";

const footerLinks = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Contact', link: '/contact' },
  { name: 'Careers', link: '/careers' },
  { name: 'Privacy Policy', link: '/privacy-policy' },
];

const socialIcons = [
  { name: 'Facebook', link: '#', icon: '🔵' },
  { name: 'Twitter', link: '#', icon: '🐦' },
  { name: 'LinkedIn', link: '#', icon: '🔗' },
];

const Footer = () => {
  const logoHoverEffect = {
    hover: {
      rotate: [0, 360],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  const navigate = useNavigate();

 

  const handleLinkClick = (link) => {
    if (link.startsWith('#')) {
      // Navigate to the homepage first
      navigate('/');
      
      // Delay scrolling to allow navigation to complete
      setTimeout(() => {
        const sectionId = link.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Scroll to top before navigating to a different page
      window.scrollTo(0, 0);
      navigate(link);
    }
  };

  return (
    <motion.footer
      className="bg-gradient-to-r from-pink-300 via-blue-300 to-purple-500 text-white py-6 bottom-0 left-0 right-0 rounded"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover="hover"
            variants={logoHoverEffect}
            className="flex items-center space-x-3"
          >
            <motion.img
              src={logo}
              alt="Hivesync"
              className="h-40 w-40"
            />
          </motion.div>

          {/* Links Section */}
          <div className="mt-6 md:mt-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center">
            {footerLinks.map(({ name, link }) => (
              <motion.a
                key={name}
                onClick={() => handleLinkClick(link)} // Pass correct link to handleLinkClick
                whileHover={{ scale: 1.1 }}
                className="text-sm font-medium cursor-pointer"
              >
                {name}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-6 space-x-6">
          {socialIcons.map((icon) => (
            <motion.a
              key={icon.name}
              href={icon.link}
              whileHover={{ scale: 1.2 }}
              className="text-2xl"
            >
              {icon.icon}
            </motion.a>
          ))}
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center text-sm">
          <p>© 2024 Hivesync. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
