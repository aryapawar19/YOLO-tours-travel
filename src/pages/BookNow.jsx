import { useState } from "react";

function BookNow() {

  const [step, setStep] = useState("register");
  const [showCars, setShowCars] = useState(false);
  const [people, setPeople] = useState("");

  const places = [
    "Mumbai","Pune","Delhi","Goa","Jaipur","Manali","Shimla",
    "Udaipur","Kerala","Ladakh","Rishikesh","Varanasi",
    "Agra","Amritsar","Mysore","Ooty","Darjeeling","Sikkim",
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
      className="min-h-screen flex flex-col items-center justify-center px-5 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')"
      }}
    >

      {/* PAGE HEADING */}
      <div className="text-center text-black mb-10 animate-pulse">

        <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r ">
          Book Your Dream Journey 🚗
        </h1>

        <p className="text-lg">
          Plan your trip with YOLO and explore incredible destinations across India
        </p>

      </div>


      <div className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-2xl max-w-2xl w-full">

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

              {/* LOGIN BUTTON DOES NOTHING */}
              <button
                type="button"
                className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
              >
                Login
              </button>

            </form>

          </div>
        )}

      </div>

    </div>
  );
}

export default BookNow;