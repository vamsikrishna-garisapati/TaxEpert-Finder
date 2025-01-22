import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, ExampleCorp',
    text: 'This company has completely transformed the way we handle our finances. Their expert advice and personalized service are unparalleled.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Founder, StartupX',
    text: 'I’ve never experienced such dedicated support. The team is incredibly responsive, and they have helped me grow my business exponentially.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Michael Lee',
    role: 'Manager, Techify',
    text: 'The best investment we made! Their business consulting services gave us the insight needed to scale successfully.',
    image: 'https://randomuser.me/api/portraits/men/15.jpg',
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold text-blue-700 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          What Our Clients Say
        </motion.h1>

        {/* Testimonial Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-xl w-80 transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: testimonial.id * 0.2 }}
            >
              {/* Testimonial Content */}
              <div className="flex flex-col items-center mb-6">
                <img
                  className="w-24 h-24 rounded-full object-cover mb-4"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <p className="text-lg text-gray-700 italic mb-4">
                  <FaQuoteLeft className="text-3xl text-blue-600 inline-block mr-2" />
                  {testimonial.text}
                  <FaQuoteRight className="text-3xl text-blue-600 inline-block ml-2" />
                </p>
              </div>

              {/* Client Name and Role */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-700">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
