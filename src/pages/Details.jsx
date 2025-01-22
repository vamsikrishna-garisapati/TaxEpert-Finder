import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft, FaStar, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useSpring, animated } from "react-spring";
import "react-toastify/dist/ReactToastify.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Details = () => {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();
  const [accountant, setAccountant] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAccountantDetails = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/accountants/${id}`);
        setAccountant(response.data);
        toast.success("Accountant details loaded successfully!");
      } catch (err) {
        console.error("Error fetching accountant details:", err);
        setError("Unable to fetch accountant details. Please try again later.");
        toast.error("Failed to load accountant details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccountantDetails();
  }, [id]);

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const fadeIn = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
        <p className="text-red-600 text-lg mb-4">{error}</p>
        <button
          onClick={handleBackClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (!accountant) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg text-gray-600">No accountant details available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <ToastContainer />
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition mb-6"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>

      {/* Accountant Details */}
      <animated.div style={fadeIn} className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
        {/* Image Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <img
            src={accountant.image}
            alt={accountant.name}
            className="w-40 h-40 lg:w-60 lg:h-60 rounded-full object-cover mb-6 lg:mb-0 lg:mr-10 shadow-md"
          />

          {/* Info Section */}
          <div className="w-full">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{accountant.name}</h1>
            <p className="text-gray-600 text-lg mb-4">{accountant.intro}</p>
            <div className="flex items-center text-yellow-500 mb-4">
              {[...Array(Math.floor(accountant.rating))].map((_, i) => (
                <FaStar key={i} className="mr-1" />
              ))}
              <span className="text-gray-600 ml-2">({accountant.reviewCount} reviews)</span>
            </div>
            <p className="text-gray-600">
              <strong>Price:</strong> {accountant.price}
            </p>
            <p className="text-gray-600">
              <strong>Delivery Time:</strong> {accountant.deliveryTime}
            </p>
          </div>
        </div>

        {/* Tabs for additional details */}
        <Tabs className="mt-6">
          <TabList>
            <Tab>Testimonial</Tab>
            <Tab>About</Tab>
            <Tab>Services</Tab>
            <Tab>Benefits</Tab>
          </TabList>

          <TabPanel>
            <div className="bg-blue-50 p-4 rounded-lg shadow-md border-l-4 border-blue-500">
              <FaQuoteLeft className="text-blue-500 text-3xl mb-2" />
              <p className="text-gray-700 italic">{accountant.testimonial.text}</p>
              <p className="text-right text-blue-600 font-bold mt-2">- {accountant.testimonial.author}</p>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p>
                <strong>From:</strong> {accountant.about.from}
              </p>
              <p>
                <strong>Partner Since:</strong> {accountant.about.partnerSince}
              </p>
              <p>
                <strong>Response Time:</strong> {accountant.about.averageResponseTime}
              </p>
              <p className="text-gray-700 mt-4">{accountant.about.description}</p>
            </div>
          </TabPanel>

          <TabPanel>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              {accountant.about.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </TabPanel>

          <TabPanel>
            <ul className="list-none space-y-2">
              {accountant.about.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </TabPanel>
        </Tabs>
      </animated.div>
    </div>
  );
};

export default Details;
