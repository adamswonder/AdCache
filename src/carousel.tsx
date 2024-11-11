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
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextCurrentIndex = (currentIndex + 1) % images.length;
      const nextNextIndex = (nextCurrentIndex + 1) % images.length;
      setCurrentIndex(nextCurrentIndex);
      setNextIndex(nextNextIndex);
      setCurrentAnimation((prevAnim) => (prevAnim + 1) % animationModes.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length, currentIndex]);

  return (
    <div className="relative mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="relative w-[300px] h-[250px]">
        <img
          key={`${currentIndex}-${animationModes[currentAnimation]}`}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={300}
          height={250}
          className={`w-[300px] h-[250px] object-fit carousel-${animationModes[currentAnimation]} absolute top-0 left-0 z-10`}
        />
        <img
          src={images[nextIndex].src}
          alt={images[nextIndex].alt}
          width={300}
          height={250}

          className="w-[300px] h-[250px] object-fit absolute top-0 left-0 z-0"
        />
      </div>
    </div>  
  );
};

export default Carousel;