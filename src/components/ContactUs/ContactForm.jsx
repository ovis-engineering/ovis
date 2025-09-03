import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    scope: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", phone: "", email: "", scope: "", message: "" });
  };

  return (
    <div className='max-w-md mx-auto p-4 bg-white rounded  absolute top-20 right-20 w-full shadow-md'>
      <h2 className='text-xl font-semibold mb-3 text-center text-amber-500'>
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className='space-y-3'>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          className='w-full border border-gray-300 rounded p-1.5 text-sm bg-gray-100 text-gray-800 focus:outline-none focus:ring-1 focus:ring-amber-500'
          placeholder='Your Name'
          required
        />

        <input
          type='tel'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          className='w-full border border-gray-300 rounded p-1.5 text-sm bg-gray-100 text-gray-800 focus:outline-none focus:ring-1 focus:ring-amber-500'
          placeholder='Phone'
          required
        />

        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className='w-full border border-gray-300 rounded p-1.5 text-sm bg-gray-100 text-gray-800 focus:outline-none focus:ring-1 focus:ring-amber-500'
          placeholder='Email'
          required
        />

        <input
          type='text'
          name='scope'
          value={formData.scope}
          onChange={handleChange}
          className='w-full border border-gray-300 rounded p-1.5 text-sm bg-gray-100 text-gray-800 focus:outline-none focus:ring-1 focus:ring-amber-500'
          placeholder='Scope of Work'
        />

        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          className='w-full border border-gray-300 rounded-lg p-3 text-sm bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none'
          placeholder='Your Message'
          rows='4'
          required
        ></textarea>

        <button
          type='submit'
          className='w-full bg-amber-500 text-white text-sm font-medium py-1.5 rounded hover:bg-amber-600 transition'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
