import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (replace with actual API call)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-start mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-tight">
            Contact Us
          </h1>
          <div className="w-20 h-1 bg-primary rounded-full mt-2"></div>
          <p className="text-gray-500 mt-4 text-lg">
            We're here to help! Reach out with any questions or feedback about your shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
            {submitted && (
              <p className="text-green-600 mb-4">Thank you! Your message has been sent.</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="text-lg font-medium text-gray-800">Address</h3>
                <p>123 Fresh Market Lane, Grocery City, GC 12345</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                <p>(123) 456-7890</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Email</h3>
                <p>support@freshgrocery.com</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Store Hours</h3>
                <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
                <p>Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-primary hover:text-primary/80">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 3.58 8.03 8.03 8.74v-6.18H7.5v-2.56h2.55V9.92c0-2.52 1.5-3.91 3.8-3.91 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.64.78-1.64 1.58v2h2.81l-.45 2.56h-2.36v6.18c4.45-.71 8.03-4.34 8.03-8.74 0-5.5-4.46-9.96-9.96-9.96z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;