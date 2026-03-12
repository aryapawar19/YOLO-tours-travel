import AssistantButton from "../components/AssistantButton";

function About() {

  const features = [
  {
    icon: "🌄",
    title: "Explore Destinations",
    description:
      "Discover India's most breathtaking destinations including mountains, beaches, heritage cities, and spiritual places. Our curated travel routes help you experience the culture, beauty, and adventure of each location without the stress of planning."
  },
  {
    icon: "🚗",
    title: "Comfortable Travel",
    description:
      "Travel in comfort with our well-maintained vehicles and experienced drivers. Choose between AC and Non-AC cars according to your preference, and enjoy a smooth, safe, and relaxing journey from your starting point to your destination."
  },
  {
    icon: "🧑‍💼",
    title: "Travel Support",
    description:
      "From booking to completing your trip, our support team is always ready to assist you. Whether you need help choosing destinations, adjusting travel dates, or understanding packages, we ensure your travel experience remains simple and hassle-free."
  },
  {
    icon: "🤖",
    title: "AI Travel Assistant",
    description:
      "Our intelligent travel assistant helps you find the most suitable travel options based on your destination, number of people, and travel preferences. It suggests the best cars, estimated costs, and travel details to help you make quick decisions."
  },
];

  return (
    <div className="min-h-screen pt-24 pb-20 px-10 bg-gradient-to-b from-blue-50 to-white text-center" >

      <h1 className="text-4xl font-bold mb-6">
        Why Choose YOLO
      </h1>

      <p className="max-w-3xl mx-auto text-gray-800 mb-16">
        YOLO – You Only Live Once is designed for travelers who want simple,
        smart and exciting travel planning. From selecting destinations to
        booking comfortable rides, we help make every journey memorable.
      </p>

      <div className="grid md:grid-cols-4 gap-10">

        {features.map((feature, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-lg 
            transform transition duration-500 
            hover:-translate-y-3 hover:shadow-2xl"
          >

            <div className="text-5xl mb-4 ">
              {feature.icon}
            </div>

            <h2 className="text-xl font-bold mb-3">
              {feature.title}
            </h2>

            <p className="text-gray-800 text-sm">
              {feature.description}
            </p>

          </div>

        ))}

      </div>

      <div className="mt-20 max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold mb-6">
          Travel With Confidence
        </h2>

        <p className="text-gray-800">
          <b>Whether you're planning a relaxing vacation, a mountain adventure,
          or a beach getaway, YOLO helps you travel smarter. Our platform
          connects destinations, transportation, and planning tools into
          one seamless experience.</b>
        </p>

      </div>

      <AssistantButton />

    </div>
  );
}

export default About;