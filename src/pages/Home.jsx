import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaSearch, FaPhoneAlt } from "react-icons/fa";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen ">
      {/* Hero Section */}
      <motion.header
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find the Perfect Chartered Accountant
          </h1>
          <p className="text-lg md:text-xl font-light mb-6">
            Discover top-notch financial experts to simplify your accounting and tax needs.
          </p>
          <div className="flex justify-center">
            <Link
              to="/about"
              className="bg-white text-blue-600 hover:text-white hover:bg-blue-700 font-semibold px-6 py-3 rounded-md shadow-md transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Search Section */}
      <section className="py-10">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Start Your Search
          </motion.h2>
          <p className="text-gray-700 mb-6">
            Use our search bar to find the best Chartered Accountants tailored to your needs.
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Why Choose Us?
          </h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, staggerChildren: 0.3 }}
          >
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://img.icons8.com/fluency/96/services.png"
                alt="Service"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Wide Expertise</h3>
              <p className="text-gray-600">
                Access experienced professionals specializing in taxation, corporate finance, and more.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=gxLL7PE14eiG&format=png&color=000000"
                alt="Efficiency"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
              <p className="text-gray-600">
                Streamline your financial processes with our trusted experts.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://img.icons8.com/fluency/96/customer-support.png"
                alt="Support"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Enjoy round-the-clock assistance to ensure your financial success.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Trusted by Thousands
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <FaCheckCircle className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">10K+</h3>
              <p className="text-gray-600">Satisfied Clients</p>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <FaSearch className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">5K+</h3>
              <p className="text-gray-600">Successful Searches</p>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <FaPhoneAlt className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">24/7</h3>
              <p className="text-gray-600">Customer Support</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <motion.section
        className="bg-gradient-to-r from-green-400 to-blue-500 py-12 text-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-6">
            Join thousands of satisfied clients and make the most of our expert services.
          </p>
          <Link
            to="/contact"
            className="bg-white text-green-600 hover:text-white hover:bg-green-700 font-semibold px-6 py-3 rounded-md shadow-md transition"
          >
            Contact Us
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
