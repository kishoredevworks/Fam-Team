import React, { useState, useEffect } from "react";

const BrandSlider = () => {
  const [slidePosition, setSlidePosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [brands] = useState([
    { name: "Brand 1", img: "images/Amazon.png" },
    { name: "Brand 2", img: "images/Myntra.png" },
    { name: "Brand 3", img: "images/Bookmyshow.png" },
    { name: "Brand 4", img: "images/Slack.png" },
    { name: "Brand 5", img: "images/InfinteTechSolution.png" },
    { name: "Brand 6", img: "images/Shopify.png" },
    { name: "Brand 7", img: "images/Shopify 2.png" },
    
  ]);

  // Calculate how fast it should move (per frame) to complete in 3 seconds
  const duration = 3000; // 3 seconds
  const fps = 60; // Frames per second (for smooth animation)
  const totalFrames = (duration / 1000) * fps; // Total frames for the 3-second loop

  useEffect(() => {
    const speedPerFrame = (100 / brands.length) / totalFrames; // Move amount per frame
    let interval;

    const updateSlide = () => {
      setSlidePosition((prevPosition) => {
        if (prevPosition <= -100) {
          return 0; // Reset to start to create a seamless loop
        }
        return prevPosition - speedPerFrame; // Move left
      });
    };

    if (!isHovered) {
      interval = setInterval(updateSlide, 1000 / fps); // Update every frame
    }

    return () => clearInterval(interval);
  }, [brands.length, isHovered, totalFrames]);

  return (
    <div className="overflow-hidden w-full bg-gray-100 py-4">
      <div
        className="flex items-center"
        style={{ transform: `translateX(${slidePosition}%)`, transition: 'transform 0.5s linear' }}
        onMouseEnter={() => setIsHovered(true)}  // Pause on hover
        onMouseLeave={() => setIsHovered(false)} // Resume on mouse leave
      >
        {/* Repeat the brand logos thrice to create an infinite scroll effect */}
        {[...brands, ...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="flex-none mx-4 p-2"
            style={{ minWidth: "150px" }}
          >
            <img
              src={brand.img}
              alt={brand.name}
              className="block w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
