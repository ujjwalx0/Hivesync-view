import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryTypes = ['General Inquiry', 'Work With Us', 'Work For Us'];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleInquiryTypeSelect = (type) => {
    setFormData({ ...formData, inquiryType: type });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required.';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    if (!formData.inquiryType) newErrors.inquiryType = 'Inquiry type must be selected.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const recipientEmails = {
      'Work With Us': 'work@hivesync.com',
      'Work For Us': 'careers@hivesync.com',
      'General Inquiry': 'info@hivesync.com'
    };

    const recipient = recipientEmails[formData.inquiryType];

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('recipient', recipient);

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        toast.success('Message sent successfully!', {
          //position: toast.POSITION.TOP_RIGHT
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          inquiryType: ''
        });
      } else {
        toast.error('There was a problem sending your message.', {
         // position: toast.POSITION.TOP_RIGHT
        });
      }
    } catch (error) {
      toast.error('There was an error sending your message.', {
        
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-20 mb-8 ">
      {/* Left Side: Interactive, Stylish Text */}
      <motion.div
        className="md:w-1/2 p-8 text-center md:text-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Have questions, ideas, or proposals? We'd love to hear from you! Let us help you sync up your project with innovation. Whether it's about working together or just a general inquiry, we're here to assist.
        </p>
        <p className="text-lg font-semibold text-blue-600 italic">
          "Your success is our priority, let’s make it happen!"
        </p>
      </motion.div>

      {/* Right Side: Contact Form */}
      <motion.div
        className="md:w-1/2 p-6 rounded-lg shadow-lg mt-10 md:mt-0 rounded border m-2"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ backgroundColor: 'var(--background-color)' }}
      >
        <ToastContainer />
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 ">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="relative">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>
          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Inquiry Type Buttons */}
          <div className="relative flex justify-between space-x-4">
            {inquiryTypes.map((type) => (
              <button
                key={type}
                type="button"
                className={`px-4 py-2 border border-gray-300 rounded-lg shadow-sm ${formData.inquiryType === type ? 'bg-blue-500 text-white' : 'bg-transparent'}`}
                onClick={() => handleInquiryTypeSelect(type)}
              >
                {type}
              </button>
            ))}
          </div>
          {errors.inquiryType && <p className="text-red-500 text-sm mt-1">{errors.inquiryType}</p>}

          <motion.button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileHover={{ scale: 1.05 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
