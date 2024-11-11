import React, { useState, useEffect } from "react";

type Image = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

type CarouselProps = {
  images: Image[];
};

const animationModes = [
  'fade-in',
  'fade-out',
  'zoom-in',
  'zoom-out',
  'slide-up',
  'slide-down',
  'rotate'
];

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentAnimation((prevAnim) => (prevAnim + 1) % animationModes.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setCurrentAnimation((prevAnim) => (prevAnim + 1) % animationModes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    setCurrentAnimation((prevAnim) => prevAnim === 0 ? animationModes.length - 1 : prevAnim - 1);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="relative">
        <img
          key={`${currentIndex}-${animationModes[currentAnimation]}`}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className={`w-full h-60 object-cover carousel-${animationModes[currentAnimation]}`}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white px-4 py-2">
          <h3 className="text-lg font-semibold">{images[currentIndex].title}</h3>
          <p className="text-sm">{images[currentIndex].description}</p>
        </div>
      </div>
      <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl text-white bg-black bg-opacity-40 hover:bg-opacity-70 p-2 rounded-full">‹</button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-3xl text-white bg-black bg-opacity-40 hover:bg-opacity-70 p-2 rounded-full">›</button>
    </div>
  );
};

export default Carousel;
