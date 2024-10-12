import React, { useState } from 'react';

export default function TestimonialForm() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [summary, setSummary] = useState('');
  const [picture, setPicture] = useState('/placeholder.svg');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTestimonial = { name, role, summary, picture };
    console.log('New testimonial:', newTestimonial);
    setSubmitted(true);
  };

  const handlePictureChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (submitted) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 via-blue-500 to-purple-500 p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-md p-4 sm:p-6 md:p-8 rounded-xl backdrop-blur-md bg-white bg-opacity-20 shadow-lg text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">Thank You!</h2>
          <p className="text-white text-base sm:text-lg">Your testimonial has been submitted successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-4 sm:p-6 md:p-8">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-4 sm:p-6 md:p-8 rounded-xl backdrop-blur-md bg-white bg-opacity-20 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4 sm:mb-6 md:mb-8">Add Your Testimonial</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 rounded bg-white bg-opacity-20 text-white placeholder-gray-300 text-sm sm:text-base"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block text-white mb-2">Role</label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className="w-full px-3 py-2 rounded bg-white bg-opacity-20 text-white placeholder-gray-300 text-sm sm:text-base"
            placeholder="Your Role"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="summary" className="block text-white mb-2">Summary</label>
          <textarea
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
            className="w-full px-3 py-2 rounded bg-white bg-opacity-20 text-white placeholder-gray-300 text-sm sm:text-base"
            placeholder="Your Testimonial"
            rows={4}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="picture" className="block text-white mb-2">Picture</label>
          <input
            type="file"
            id="picture"
            accept="image/*"
            onChange={handlePictureChange}
            className="w-full text-white"
          />
          {picture && (
            <div className="mt-2">
              <img src={picture} alt="Preview" width={100} height={100} className="rounded-full" />
            </div>
          )}
        </div>
        <button type="submit" className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-2 px-4 rounded transition duration-300 text-sm sm:text-base">
          Submit Testimonial
        </button>
      </form>
    </div>
  );
}
