import { useState } from "react";

function BookNow() {

  const [step, setStep] = useState("register");
  const [showCars, setShowCars] = useState(false);
  const [people, setPeople] = useState("");

  const places = [
    "Mumbai",
    "Pune",
    "Delhi",
    "Goa",
    "Jaipur",
    "Manali",
    "Shimla",
    "Udaipur",
    "Kerala",
    "Ladakh",
    "Rishikesh",
    "Varanasi",
    "Agra",  
    "Amritsar",
    "Mysore",
    "Ooty",
    "Darjeeling",
    "Sikkim",

  ];

  
  const cars = [
  {
    name: "Swift",
    price: "₹10/km",
    capacity: 3,
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d"
  },
  {
    name: "WagonR",
    price: "₹11/km",
    capacity: 3,
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738"
  },
  {
    name: "Dzire",
    price: "₹13/km",
    capacity: 5,
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2"
  },
  {
    name: "Baleno",
    price: "₹14/km",
    capacity: 5,
    img: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6f9"
  },
  {
    name: "Ertiga",
    price: "₹18/km",
    capacity: 7,
    img: "https://images.unsplash.com/photo-1616422285623-13ff0162193c"
  },
  {
    name: "Innova",
    price: "₹22/km",
    capacity: 8,
    img: "https://images.unsplash.com/photo-1550355291-bbee04a92027"
  }
];

  return (
    <div
      className="min-h-screen flex items-center justify-center px-5 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')"

      }}
    >

      <div className="bg-white/90 backdrop-blur-lg p-3 rounded-2xl shadow-2xl  max-w-2xl animate-fadeInUp">

        {/* REGISTER */}

        {step === "register" && (
          <div className="text-center">

            <h2 className="text-3xl font-bold mb-6 text-indigo-600">
              Register
            </h2>

            <form className="flex flex-col gap-4">

              <input
                type="text"
                placeholder="Username"
                className="border p-3 rounded-lg"
              />

              <input
                type="email"
                placeholder="Email"
                className="border p-3 rounded-lg"
              />

              <input
                type="password"
                placeholder="Password"
                className="border p-3 rounded-lg"
              />

             <button
  type="button"
  onClick={() => setStep("login")}
  className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
>
  Register
</button>

<p className="mt-4 text-gray-600">
  Already registered?{" "}
  <span
    onClick={() => setStep("login")}
    className="text-indigo-600 font-semibold cursor-pointer hover:underline"
  >
    Login
  </span>
</p>

            </form>

          </div>
        )}

        {/* LOGIN */}

        {step === "login" && (
          <div className="text-center">

            <h2 className="text-3xl font-bold mb-6 text-green-600">
              Login
            </h2>

            <form className="flex flex-col gap-4">

              <input
                type="text"
                placeholder="Username"
                className="border p-3 rounded-lg"
              />

              <input
                type="password"
                placeholder="Password"
                className="border p-3 rounded-lg"
              />

              <button
                type="button"
                onClick={() => setStep("form")}
                className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
              >
                Login
              </button>

            </form>

          </div>
        )}

        {/* BOOKING FORM */}

        {step === "form" && (
          <div>

            <h2 className="text-3xl font-bold mb-6 text-purple-600 text-center">
              Car Booking Form
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <input
                placeholder="Full Name"
                className="border p-3 rounded-lg"
              />

              <input
                placeholder="Contact Number"
                className="border p-3 rounded-lg"
              />

              <select className="border p-3 rounded-lg">
                <option>From</option>
                {places.map((p, i) => (
                  <option key={i}>{p}</option>
                ))}
              </select>

              <select className="border p-3 rounded-lg">
                <option>Destination</option>
                {places.map((p, i) => (
                  <option key={i}>{p}</option>
                ))}
              </select>

              <input
                type="date"
                className="border p-3 rounded-lg"
              />

              <input
                type="time"
                className="border p-3 rounded-lg"
              />

              <input
  type="number"
  placeholder="Number of People"
  className="border p-3 rounded-lg"
  value={people}
  onChange={(e) => setPeople(e.target.value)}
/>

              <select className="border p-3 rounded-lg">
                <option>AC</option>
                <option>Non AC</option>
              </select>

            </div>

            <textarea
              placeholder="Other Instructions"
              className="border p-3 rounded-lg w-full mt-4"
            ></textarea>

            <div className="text-center mt-6">

              <button
                onClick={() => setShowCars(true)}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition"
              >
                Show Suggestions
              </button>

            </div>

            {/* CAR SUGGESTIONS */}

            {showCars && (

              <div className="grid md:grid-cols-3 gap-6 mt-10">

                {cars.map((car, index) => (

                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
                  >

                    <img
                      src={car.img}
                      alt={car.name}
                      className="h-40 w-full object-cover"
                    />

                    <div className="p-4 text-center">

                      <h3 className="text-xl font-semibold">
                        {car.name}
                      </h3>

                      <p className="text-gray-600 mb-3">
                        {car.price}
                      </p>

                      <button
                        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
                      >
                        Book Now
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>
        )}

      </div>

    </div>
  );
}

export default BookNow;