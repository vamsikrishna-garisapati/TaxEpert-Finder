import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserFriends, FaShieldAlt, FaRegLightbulb } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = () => {
  const [showToast, setShowToast] = useState(false);

  // Show a toast notification on button click
  const handleToast = () => {
    toast.success('Welcome to our About Us page!');
    setShowToast(true);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white py-12 relative"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      }}
    >
      {/* Dark overlay behind content for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative max-w-6xl mx-auto px-4 text-center p-8 z-10">
        {/* Heading */}
        <motion.h1
          className="text-5xl font-bold tracking-wide mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl font-light mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We are a team dedicated to connecting individuals and businesses with professional Chartered Accountants who provide a wide range of financial services.
        </motion.p>

        {/* Button */}
        <motion.button
          className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg shadow-lg transition duration-300"
          onClick={handleToast}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Learn More
        </motion.button>

        {showToast && (
          <motion.div
            className="mt-6 p-6 bg-white text-gray-800 rounded-lg shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-semibold text-blue-700 mb-2">Thank You for Visiting!</h3>
            <p className="text-lg">
              We're excited to share more about our mission and the financial services we offer.
            </p>
          </motion.div>
        )}

        {/* Icons Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <motion.div
            className="flex flex-col items-center p-6 bg-white text-gray-800 rounded-lg shadow-xl transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <FaUserFriends className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold">Customer-Centric</h3>
            <p className="text-lg text-center mt-2">
              Your needs are at the heart of everything we do.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center p-6 bg-white text-gray-800 rounded-lg shadow-xl transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <FaShieldAlt className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold">Integrity</h3>
            <p className="text-lg text-center mt-2">
              We prioritize transparency and honesty in all our dealings.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center p-6 bg-white text-gray-800 rounded-lg shadow-xl transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <FaRegLightbulb className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold">Innovation</h3>
            <p className="text-lg text-center mt-2">
              We embrace new ways of delivering financial services and solutions.
            </p>
          </motion.div>
        </div>

        {/* Mission Section */}
        <div className="mt-16">
          <motion.h2
            className="text-4xl font-semibold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-lg font-light text-white max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            To empower individuals and businesses with trusted and expert financial guidance, enabling them to achieve their financial goals with confidence and clarity.
          </motion.p>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default About;
