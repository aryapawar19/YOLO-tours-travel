function Contact() {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

      <div>

        <h2 className="text-4xl font-bold mb-6 text-indigo-600">
          Get In Touch
        </h2>

        <p className="text-gray-600 mb-6">
          Have questions about travel packages? Our team is here to help you plan
          your perfect trip.
        </p>

        <p className="mb-3">📍 Mumbai, India</p>
        <p className="mb-3">📞 +91 9876543210</p>
        <p className="mb-3">✉ travelx@gmail.com</p>

      </div>

      <form className="bg-white shadow-lg p-8 rounded-xl flex flex-col gap-4">

        <input
          placeholder="Your Name"
          className="p-3 border rounded-lg"
        />

        <input
          placeholder="Email"
          className="p-3 border rounded-lg"
        />

        <textarea
          placeholder="Message"
          className="p-3 border rounded-lg"
          rows="4"
        />

        <button className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
          Send Message
        </button>

      </form>

    </div>
  );
}

export default Contact;