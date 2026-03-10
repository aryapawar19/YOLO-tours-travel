import AssistantButton from "../components/AssistantButton";

function Contact() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">

      {/* LEFT SIDE - CONTACT DETAILS */}
      <div className="flex items-center justify-center bg-white p-10">

        <div className="max-w-md w-full space-y-6">

          <h1 className="text-4xl font-bold text-indigo-700">
            Contact Us
          </h1>

          <p className="text-gray-600">
            Have questions about your trip? Reach out to us anytime.
          </p>

          {/* Contact Info */}
          <div className="space-y-3 text-lg text-gray-700">

            <p className="hover:text-indigo-600 transition">
              📞 +91 98765 43210
            </p>

            <p className="hover:text-indigo-600 transition">
              📧 yolotours@gmail.com
            </p>

            <p className="hover:text-indigo-600 transition">
              📍 Mumbai, India
            </p>

          </div>

          {/* Feedback Form */}
          <div className="mt-6">

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Feedback
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Source"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <input
                type="text"
                placeholder="Destination"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <select
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option>Rating</option>
                <option>⭐</option>
                <option>⭐⭐</option>
                <option>⭐⭐⭐</option>
                <option>⭐⭐⭐⭐</option>
                <option>⭐⭐⭐⭐⭐</option>
              </select>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition transform hover:scale-105"
              >
                Submit Feedback
              </button>

            </form>

          </div>

        </div>

      </div>


      {/* RIGHT SIDE - BACKGROUND IMAGE */}
      <div
        className="hidden md:flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
        }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative text-white text-center px-6">
          <h2 className="text-4xl font-bold mb-3">
            Plan Your Journey
          </h2>
          <p className="text-lg">
            YOLO Tours — Because You Only Live Once
          </p>
        </div>

      </div>

      {/* AI Assistant */}
      <AssistantButton />

    </div>
  );
}

export default Contact;