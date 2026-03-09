import AssistantButton from "../components/AssistantButton";

function About() {

  const features = [
    {
      icon: "🌍",
      title: "Explore Destinations",
      description:
        "Discover India's most beautiful places with curated travel experiences."
    },
    {
      icon: "🚗",
      title: "Comfortable Travel",
      description:
        "Choose from AC and Non-AC cars for a smooth and enjoyable journey."
    },
    {
      icon: "🧑‍💼",
      title: "Travel Support",
      description:
        "Our team helps you plan and manage your travel easily."
    },
    {
      icon: "🤖",
      title: "AI Travel Assistant",
      description:
        "Smart AI helps you select the best packages and travel plans."
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
          Whether you're planning a relaxing vacation, a mountain adventure,
          or a beach getaway, YOLO helps you travel smarter. Our platform
          connects destinations, transportation, and planning tools into
          one seamless experience.
        </p>

      </div>

      <AssistantButton />

    </div>
  );
}

export default About;