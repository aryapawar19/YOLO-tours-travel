import { useState } from "react";

function AssistantButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">

      {open && (
        <div className="bg-white text-black w-64 p-4 rounded-xl shadow-xl mb-3">

          <h3 className="font-bold text-lg mb-2">Travel Guide ✈️</h3>

          <p className="text-sm mb-3">
            Hi! I can help you plan your perfect trip.
          </p>

          <div className="flex flex-col gap-2">

            <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              View Packages
            </button>

            <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
              Book a Trip
            </button>

            <button className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600">
              Travel Tips
            </button>

          </div>

        </div>
      )}

      {/* Travel Guide Avatar */}

      <img
        src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
        alt="Travel Guide"
        className="w-16 h-16 rounded-full shadow-lg cursor-pointer hover:scale-110 transition duration-300 border-4 border-white"
        onClick={() => setOpen(!open)}
      />

    </div>
  );
}

export default AssistantButton;