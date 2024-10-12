import React, { useState } from 'react';

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => setShowMore(!showMore);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white font-sans p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <img
            src="images/AboutUs.png"
            alt="About Us"
            className="w-36 h-36 rounded-full shadow-lg"
          />
        </div>
        
        <h1 className="text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300">
          About FAM-TEAM
        </h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8">
          <p className="text-lg leading-relaxed mb-4">
          FAM-TEAM is a pioneering technology company at the forefront of digital innovation. We specialize in crafting cutting-edge solutions that seamlessly blend design aesthetics with powerful functionality. Our team of visionary designers and skilled developers work in harmony to push the boundaries of what's possible in the digital realm. With a focus on user-centric design and robust backend architecture, we create digital experiences that not only meet but exceed the expectations of our clients and their users. From responsive web applications to immersive mobile experiences, FAM-TEAM is committed to shaping the future of digital interaction.
          </p>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-yellow-300">What Sets Us Apart</h3>
        <ul className="list-none space-y-4 mb-8">
          {[
            "Innovative Design Thinking: We approach every project with a fresh perspective, blending creativity with functionality.",
            "Cutting-Edge Technology: Our team stays ahead of the curve, leveraging the latest technologies to build future-proof solutions.",
            "Collaborative Approach: We work closely with our clients, ensuring their vision is at the heart of every project.",
            "Scalable Solutions: Our architectures are designed to grow with your business, providing long-term value.",
            "Commitment to Excellence: We're not satisfied until we've exceeded expectations, refining every detail to perfection."
          ].map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-pink-400 mr-2">▹</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="relative">
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showMore ? 'max-h-full' : 'max-h-32'}`}>
            <h1 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">
              Our Vision
            </h1>
            <p className="text-lg leading-relaxed">
              At FAM-TEAM, we envision a world where technology seamlessly enhances human experiences. Our mission is to be at the forefront of this digital revolution, creating intuitive and powerful solutions that empower businesses and individuals alike. We believe in the transformative power of technology when wielded with creativity and purpose. Our team is dedicated to turning this vision into reality, one project at a time, always pushing the boundaries of what's possible in the digital landscape.
            </p>
          </div>
          {!showMore && <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-indigo-900 to-transparent"></div>}
        </div>

        <button
          onClick={toggleReadMore}
          className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          {showMore ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default Home;