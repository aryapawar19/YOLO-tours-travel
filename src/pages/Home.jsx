function Home() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
      }}
    >

      <div className="bg-black/50 p-10 rounded-xl">

        <h1 className="text-5xl font-bold mb-6">
          Explore The World With YOLO
        </h1>

        <p className="text-xl mb-8">
          Discover breathtaking destinations and unforgettable adventures
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

    </div>
  );
}

export default Home;