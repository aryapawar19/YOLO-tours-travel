import { useState } from "react";

function BookNow() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return (

    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1598091383021-15ddea10925d')"
      }}
    >

      {/* Dark Blur Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Card */}
      <div className="relative bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-96 animate-fadeIn">

        {!loggedIn ? (

          <div className="text-center">

            <h2 className="text-3xl font-bold mb-6 text-indigo-600">
              BOOK YOUR TRIP
            </h2>

            {isRegister ? (

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <input
                  type="text"
                  placeholder="Username"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                  required
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                  required
                />

                <button
                  className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 hover:scale-105 transition"
                >
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

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <input
                  type="text"
                  placeholder="Username"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                  required
                />

                <button
                  className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 hover:scale-105 transition"
                >
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

          <div>

            <h2 className="text-2xl font-bold mb-6 text-indigo-600 text-center">
              Trip Booking Form
            </h2>

            <form className="flex flex-col gap-4">

              <input
                placeholder="Full Name"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              />

              <input
                placeholder="Destination"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              />

              <input
                type="date"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              />

              <input
                type="number"
                placeholder="Number of People"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              />

              <button
                className="bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 hover:scale-105 transition"
              >
                Show Suggestions
              </button>

            </form>

          </div>

        )}

      </div>

    </div>

  );
}

export default BookNow;