import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaUser, FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: "3a5101a2-bdaf-42de-8332-ef6448a2deb4",
          ...formData,
        }),
      });

      const json = await response.json();

      if (response.status === 200) {
        Swal.fire({
          title: 'Success!',
          text: 'Message sent successfully!',
          icon: 'success',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: json.message || 'Submission failed.',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
     className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10 px-2 md:px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-blue-700">Contact Me</h2>
        <p className="text-gray-600 mt-2">You might contact me here.</p>
      </div>
    
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
  {/* Contact Info */}
  <div className="bg-white max-h-[300px] p-8 rounded-2xl shadow-lg w-full flex flex-col justify-center items-center gap-4 text-center">
    <h2 className="text-2xl font-semibold flex items-center gap-3 text-blue-700 mx-auto lg:mx-0">
      <FaPaperPlane className="text-blue-500" /> Find Me
    </h2>
    <p className="flex items-center text-gray-700 gap-3 mx-auto lg:mx-0">
      <FaEnvelope className="text-blue-500" />
      <a href="mailto:sandeshcrest7@gmail.com" className="hover:underline">
  Email: sandeshcrest7@gmail.com
</a>

    </p>
    <p className="flex items-center text-gray-700 gap-3 mx-auto lg:mx-0">
      <FaPhoneAlt className="text-blue-500" />
      <a href="tel:+9779810393338" className="hover:underline">
        Tel: +977 9810393338
      </a>
    </p>
    <p className="flex items-center text-gray-700 gap-3 mx-auto lg:mx-0">
      <FaMapMarkerAlt className="text-blue-500" />
      <span>Address: Siraha, Nepal</span>
    </p>
  </div>

  {/* Contact Form */}
  <div className="bg-white p-8 rounded-2xl shadow-lg w-full lg:min-h-[350px] flex flex-col justify-center">
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
            <FaUser />
          </span>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
            <FaEnvelope />
          </span>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          name="message"
          required
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border resize-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Message"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-400 text-white py-3 rounded-lg hover:from-blue-700 hover:to-teal-500 transition duration-300 font-semibold text-lg shadow"
        disabled={loading}
      >
        <FaPaperPlane />
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  </div>
</div>
    </section>
  );
};

export default ContactForm;
