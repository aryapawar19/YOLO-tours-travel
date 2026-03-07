import { useState } from "react";

function BookNow() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-indigo-300 p-6">

      {!isLoggedIn ? (

        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center">

          <h1 className="text-3xl font-bold mb-6 text-indigo-600">
            BOOK YOUR TRIP
          </h1>

          {isRegister ? (

            <form onSubmit={handleRegister} className="flex flex-col gap-4">

              <input
                type="text"
                placeholder="Username"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />

              <button className="bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition">
                Register
              </button>

              <p className="text-sm">
                Already Registered?{" "}
                <span
                  className="text-indigo-600 cursor-pointer"
                  onClick={() => setIsRegister(false)}
                >
                  Login
                </span>
              </p>

            </form>

          ) : (

            <form onSubmit={handleLogin} className="flex flex-col gap-4">

              <input
                type="text"
                placeholder="Username"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />

              <button className="bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition">
                Login
              </button>

              <p className="text-sm">
                New User?{" "}
                <span
                  className="text-indigo-600 cursor-pointer"
                  onClick={() => setIsRegister(true)}
                >
                  Register
                </span>
              </p>

            </form>

          )}

        </div>

      ) : (

        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg">

          <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
            Trip Booking Form
          </h2>

          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border rounded-lg"
            />

            <input
              type="text"
              placeholder="Destination"
              className="p-3 border rounded-lg"
            />

            <input
              type="date"
              className="p-3 border rounded-lg"
            />

            <input
              type="number"
              placeholder="Number of People"
              className="p-3 border rounded-lg"
            />

            <button className="bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition">
              Show Suggestions
            </button>

          </form>

        </div>

      )}

    </div>
  );
}

export default BookNow;