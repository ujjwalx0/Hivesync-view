import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 

const navItems = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Services', link: '#services' },
  { name: 'Contact', link: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (link) => {
    if (link.startsWith('#')) {
      if (window.location.pathname !== '/') {
        navigate('/'); 
      }
      
      setTimeout(() => {
        const sectionId = link.substring(1); 
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(link); 
    }
  };

  const backgroundColor = scrollY > 50
    ? 'bg-gradient-to-r from-green-300 via-yellow-300 to-red-300'
    : 'bg-gradient-to-r from-pink-300 via-blue-300 to-purple-500';

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        type: 'spring',
        stiffness: 80,
      },
    },
    closed: {
      opacity: 0,
      x: '-100%',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const hoverEffect = {
    hover: {
      scale: 1.2,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  const menuItemHover = {
    hover: {
      scale: 1.1,
      rotateY: 15,
      skewY: 5,
      color: '#ffffff',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const navbarEffect = {
    hover: {
      scale: 1.05,
      rotate: 0.5,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.nav
      className={`${backgroundColor} shadow-lg fixed w-11/12 md:w-4/5 z-10 left-0 right-0 mx-auto top-4 rounded-lg px-6 py-2 transition-all duration-500 ease-in-out`}
      whileHover="hover"
      variants={navbarEffect}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-white">
              <motion.img
                src="..\src\assets\logo.svg"
                alt="MyLogo"
                className="h-8 inline-block mr-2"
                whileHover="hover"
                variants={hoverEffect}
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavigation(item.link)}
                whileHover="hover"
                variants={menuItemHover}
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        initial={false}
        className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-pink-300 via-blue-300 to-purple-300 shadow-lg rounded-lg px-6 py-2"
      >
        {navItems.map((item) => (
          <motion.button
            key={item.name}
            onClick={() => handleNavigation(item.link)}
            whileHover={{ scale: 1.1, color: '#fff', rotateY: 15 }}
            className="block text-white hover:text-gray-200 px-4 py-3 border-b border-blue-400 text-base font-medium"
          >
            {item.name}
          </motion.button>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
