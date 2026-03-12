import { useState, useEffect } from "react";
import { FaCompass } from "react-icons/fa";

function Home() {

  const images = [
    {
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
      place: "Taj Mahal, Agra"
    },
    {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      place: "Goa Beaches"
    },
  
    {
      url: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e",
      place: "Manali Mountains"
    },
    {
      url: "https://images.unsplash.com/photo-1548013146-72479768bada",
      place: "Jaipur City Palace"
    },
    
    {
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      place: "Rishikesh Ganges"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(slider);

  }, []);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div
      className="h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[current].url})`
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
       <a
  href="#admin"
  className="absolute top-24 left-6 bg-white/20 backdrop-blur-md text-white p-4 rounded-full border border-white hover:bg-white hover:text-black transition transform hover:scale-110"
>
  <FaCompass size={22} />
</a>

      {/* Content */}
      <div className="relative z-10">

        <h1 className="text-5xl font-bold mb-4">
          Explore Incredible India
        </h1>

        <p className="text-xl mb-6">
          Discover amazing destinations across India
        </p>

        <div className="flex gap-6 justify-center">

          <a
            href="#book"
            className="bg-indigo-600 px-8 py-3 rounded-full font-semibold hover:scale-110 transition"
          >
            Book Now
          </a>

          <a
            href="#packages"
            className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Explore Packages
          </a>
      
        </div>

      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 text-4xl text-white"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 text-4xl text-white"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 flex gap-3">

        {images.map((_, index) => (

          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          ></div>

        ))}

      </div>

    </div>
  );
}

export default Home;