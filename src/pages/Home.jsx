import { useState, useEffect } from "react";

function Home() {

  const images = [
    {
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
      place: "Taj Mahal, Agra"
    },
    {
      url: "https://images.unsplash.com/photo-1609948543911-04f6f8e6c3c4",
      place: "Goa Beaches"
    },
    {
      url: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
      place: "Kerala Backwaters"
    },
    {
      url: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e",
      place: "Manali Mountains"
    },
    {
      url: "https://images.unsplash.com/photo-1548013146-72479768bada",
      place: "Jaipur City Palace"
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

      {/* Content */}
      <div className="relative z-10">

        <h1 className="text-5xl font-bold mb-4">
          Explore Incredible India
        </h1>

        <p className="text-xl mb-6">
          Discover amazing destinations across India
        </p>

        <h2 className="text-2xl font-semibold mb-8">
          {images[current].place}
        </h2>

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