import { useState } from "react";

function FAQ() {

  const [open, setOpen] = useState(null);

  const data = [
    {
      question: "How do I book a trip?",
      answer: "You can book a trip easily using our booking section."
    },
    {
      question: "Can I cancel my booking?",
      answer: "Yes, cancellations are allowed according to our policy."
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes! Special discounts are available for group bookings."
    },
    {
      question: "Is travel insurance included?",
      answer: "Travel insurance can be added during the booking process."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">
        Frequently Asked Questions
      </h2>

      {data.map((item, index) => (

        <div
          key={index}
          className="mb-4 border rounded-lg shadow-sm"
        >

          <button
            className="w-full text-left p-4 font-semibold bg-gray-100 hover:bg-gray-200"
            onClick={() => setOpen(open === index ? null : index)}
          >
            {item.question}
          </button>

          {open === index && (
            <div className="p-4 text-gray-700 bg-white">
              {item.answer}
            </div>
          )}

        </div>

      ))}

    </div>
  );
}

export default FAQ;