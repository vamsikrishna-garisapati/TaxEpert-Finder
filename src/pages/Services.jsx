import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaFileInvoiceDollar, FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://severance-pay-germany.de/wp-content/uploads/2023/09/AdobeStock_612301064-edited.jpeg')`,
      }}
    >
      {/* Overlay for text readability */}
      <div className="bg-black bg-opacity-60 min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Services
          </motion.h1>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Service 1: Financial Advisory */}
            <motion.div
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <FaChartLine className="text-4xl sm:text-5xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">
                Financial Advisory
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Get personalized advice from our financial experts to help you plan and grow your wealth.
              </p>
              <Link
                to="/services/financial-advisory"
                className="text-blue-600 hover:underline"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Service 2: Tax Services */}
            <motion.div
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <FaFileInvoiceDollar className="text-4xl sm:text-5xl text-green-600 mb-4 mx-auto" />
              <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-2">
                Tax Services
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                We provide efficient tax planning and filing to help minimize your liabilities and maximize savings.
              </p>
              <Link
                to="/services/tax-services"
                className="text-green-600 hover:underline"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Service 3: Business Consulting */}
            <motion.div
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <FaHandshake className="text-4xl sm:text-5xl text-yellow-600 mb-4 mx-auto" />
              <h3 className="text-lg sm:text-xl font-semibold text-yellow-700 mb-2">
                Business Consulting
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Our consulting services help businesses streamline operations, improve strategy, and achieve growth.
              </p>
              <Link
                to="/services/business-consulting"
                className="text-yellow-600 hover:underline"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
