import { useState } from "react";

function FAQ() {

  const [open, setOpen] = useState(null);

  const data = [
  {
    question: "How can I book a tour or car on this website?",
    answer:
      "Booking a journey on YOLO is designed to be simple and convenient for users. First, go to the Book Now section of the website and create an account if you are a new user. After logging in, you will see a booking form where you can enter details such as your starting location, destination, travel date, time, and number of people traveling. Based on this information, the system suggests suitable vehicles for your trip. You can review the available options, check their pricing, and select the one that best fits your travel needs. This process ensures that your travel planning becomes quick, easy, and well organized."
  },
  {
    question: "Do I need to create an account to book a trip?",
    answer:
      "Yes, creating an account is required before you can book a trip on the YOLO platform. Having an account helps us securely store your booking information and manage your travel details efficiently. It also allows you to access your booking history, update travel information, and receive confirmation messages for your trips. The registration process is very quick and only requires basic information such as a username, email address, and password. This ensures that your travel details remain safe and accessible whenever you need them."
  },
  {
    question: "Can I book travel for a group or family?",
    answer:
      "Yes, YOLO allows users to book travel for individuals, families, or larger groups. When filling out the booking form, you can enter the number of people traveling with you. Based on the number of passengers, the system will suggest vehicles that have suitable seating capacity. This helps ensure that everyone can travel comfortably without space issues. Whether you are planning a small trip with friends or a family vacation, the platform provides options that suit different group sizes."
  },
  {
    question: "How will I receive confirmation after booking?",
    answer:
      "Once you complete the booking process, a confirmation message will be generated on the website itself. Additionally, a confirmation email will be sent to the email address that you used during registration. This confirmation includes important travel details such as your pickup location, destination, travel date and time, and the selected vehicle information. Keeping this confirmation helps you stay informed about your travel arrangements. It also allows you to quickly refer to your booking details whenever necessary."
  },
  {
    question: "Can I cancel or modify my booking after confirmation?",
    answer:
      "Yes, in many cases bookings can be modified or cancelled depending on the travel schedule and availability of vehicles. If your travel plans change, you can contact customer support to request changes to your booking. The support team will review your request and guide you through the available options. Modifications such as changing the travel date, destination, or vehicle type may be possible if done in advance. This flexibility helps travelers adjust their plans without major inconvenience."
  },
  {
    question: "What destinations are available for travel?",
    answer:
      "YOLO offers travel options to many popular destinations across India. These include famous tourist locations such as Goa, Manali, Shimla, Jaipur, Kerala, Ladakh, and Rishikesh. In addition to these, the platform also supports travel between major cities like Mumbai, Delhi, and Pune. Our goal is to help travelers explore both well-known attractions and culturally rich destinations. By providing multiple destination choices, the website helps users easily plan journeys according to their interests and preferences."
  },
  {
    question: "What types of vehicles are available for booking?",
    answer:
      "The platform provides a variety of vehicles to meet different travel needs. Smaller cars are available for individuals or small groups who prefer economical travel options. For families or groups with more passengers, larger vehicles with higher seating capacity are also available. Each vehicle option displays important details such as seating capacity, price per kilometer, and images of the car. This allows users to compare options and choose the most suitable vehicle for their trip."
  },
  {
    question: "Is my personal information safe on this website?",
    answer:
      "Yes, protecting user information is a top priority for the YOLO platform. Personal data such as usernames, contact information, and booking details are stored securely within the system. This information is used only for managing travel bookings and improving user experience. We ensure that your details are not shared with unauthorized third parties. By maintaining strong security practices, the website provides a safe environment for planning and booking your trips."
  },
  {
    question: "How can I contact customer support?",
    answer:
      "If you need help with bookings, travel planning, or any website-related issue, you can contact customer support through the Contact section of the website. There you will find a form where you can submit your query along with your contact details. Our support team reviews messages and responds as quickly as possible. Whether you have a booking question or need travel guidance, the support team is available to assist you. This ensures that users receive reliable help whenever they need it."
  },
  {
    question: "Can the website help me choose the best travel option?",
    answer:
      "Yes, the platform includes a smart travel suggestion feature that helps users choose suitable travel options. After filling out the booking form with details like destination, date, and number of travelers, the system suggests vehicles that match your requirements. These suggestions include information about the vehicle, seating capacity, and price per kilometer. This feature saves time by helping users quickly compare options. It also makes travel planning easier for people who are unsure about the best vehicle for their trip."
  }
];


  return (
    <div className="max-w-4xl mx-auto px-6" >

      <h2 className="text-4xl font-bold text-center mb-12 text-black-600">
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