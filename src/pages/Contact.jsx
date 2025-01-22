import React from 'react';
// import ContactForm from './ContactForm'; // Import the ContactForm component
import ContactForm from '../components/contactForm';
const Contact = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat py-16 relative" style={{ backgroundImage: `url('https://images.pexels.com/photos/8518720/pexels-photo-8518720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}>
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto text-white relative z-10">
        <h2 className="text-4xl font-semibold text-center mb-8">Contact Us</h2>
        <p className="text-lg text-center mb-12">
          We would love to hear from you. Please fill out the form below, and we will get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg opacity-90">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
