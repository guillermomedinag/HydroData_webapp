import { useEffect, useState } from 'react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    caption: "Río Baker, Patagonia Chilena"
  },
  {
    url: "https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    caption: "Río Futaleufú, Los Lagos"
  },
  {
    url: "https://images.unsplash.com/photo-1544960666-76ce4f6aa636?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    caption: "Río Maipo, Región Metropolitana"
  }
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-60' : 'opacity-0'
          }`}
        >
          <img
            src={image.url}
            alt={image.caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
            {image.caption}
          </div>
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-800/60 to-blue-900/80 backdrop-blur-[2px]"></div>
    </div>
  );
};

export default HeroCarousel;
