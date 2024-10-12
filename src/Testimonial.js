import React, { useState, useEffect } from 'react';

const defaultTestimonials = [
  {
    name: "MR. RAJARATINEM",
    role: "Founder of FAM-TEAM",
    summary: "Leading the way in innovation and team building.",
    picture: "images/Raja.jpg"
  },
  {
    name: "MR. VIJAYRATINEM",
    role: "Co-founder of FAM-TEAM",
    summary: "Bringing creativity and strategic vision to our projects.",
    picture: "images/Vijay.jpg"
  },
  {
    name: "MR. BALAKRISHNAN",
    role: "Team Lead",
    summary: "Guiding our FAM-TEAM to success with expertise and dedication.",
    picture: "images/Bala.jpg"
  },
  {
    name: "GOKULKANAN",
    role: "Team Lead",
    summary: "Inspiring innovation and driving project excellence.",
    picture: "images/Gokul.jpg"
  }
];

export default function Testimonials() {
  const [testimonials] = useState(defaultTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="w-full max-w-4xl p-8 rounded-xl backdrop-blur-md bg-white bg-opacity-20 shadow-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Testimonials</h2>
        <div className="relative h-64 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.picture}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-white opacity-75">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-white text-lg">{testimonial.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
