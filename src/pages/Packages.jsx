import AssistantButton from "../components/AssistantButton";

function Packages() {

  const places = [
    {
      name: "Taj Mahal",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada",
      description: "One of the Seven Wonders of the World located in Agra.",
    },
    {
      name: "Goa",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      description: "Famous for beaches, nightlife, and Portuguese culture.",
    },
    {
      name: "Golden Temple",
      image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16",
      description: "The Golden Temple shines with divine beauty, peaceful surroundings, and spiritual harmony, offering visitors a deeply calming and unforgettable experience.",
    },
    {
      name: "Manali",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      description: "A beautiful hill station in Himachal Pradesh, known for its snow-capped peaks and lush valleys.",
    },
    {
      name: "Kerala",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
      description: "Known as 'God's Own Country', Kerala offers serene backwaters, lush greenery, and vibrant culture.",
    },
    {
      name: "Ladakh",
      image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQWn4DZGr8gkAqlQmhj7ujAUK0JPJOy5xnh3-vVjSqH66rPUwT93r1s7hCql-cux8rljxRYueKijf-H8jd_q4Iu_Xk&s=19",
      description: "A Ladakh amazes travelers with dramatic mountains, crystal-clear lakes, ancient monasteries, and thrilling adventures in the heart of the Himalayas.paradise for mountain and adventure lovers.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10 pt-24">

      <h1 className="text-4xl font-bold text-center mb-12">
        Popular Packages
      </h1>

      <div className="grid md:grid-cols-3 gap-5">

        {places.map((place, index) => (

          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >

            <div className="overflow-hidden">

              <img
                src={place.image}
                alt={place.name}
                className="h-48 w-full object-cover transform transition duration-500 hover:scale-110"
              />

            </div>

            <div className="p-4">

              <h2 className="text-2xl font-bold mb-2">
                {place.name}
              </h2>

              <p className="text-gray-600">
                {place.description}
              </p>

            </div>

          </div>

        ))}

      </div>

      <AssistantButton />

    </div>
  );
}

export default Packages;