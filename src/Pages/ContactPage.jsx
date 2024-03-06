import { useState, useEffect } from "react";
import "./ContactPage.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = ({ handleClick }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setShowForm(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a 10-digit phone number.");
      return;
    }

    if (formData.message.split(" ").filter(Boolean).length < 5) {
      toast.error("Message should be at least 5 words long.");
      return;
    }

    if (formData.name.trim() === "") {
      toast.error("Please enter your name.");
      return;
    }
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/yashdxr/google_sheets/IygJVWsurkcAidLE?tabId=Sheet1",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([
            [formData.name, formData.email, formData.phone, formData.message],
          ]),
        }
      );
      if (response.ok) {
        toast.success("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        console.error("Failed to submit form:", response.statusText);
      }
    } catch (error) {
      toast.error("Failed to submit form:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div
      className={`bg-gray-900 text-white p-8 ${
        showForm ? "animate-fade-in" : ""
      }`}
    >
      <ToastContainer />
      <div className="flex justify-center items-center">
        <p className="text-white mx-3">Click to hide form</p>
        <button
          onClick={handleClick}
          className="relative overflow-hidden rounded-full h-16 w-16 flex justify-center items-center bg-gradient-to-br from-yellow-300 to-yellow-500 hover:from-yellow-400 hover:to-yellow-600 border-4 border-yellow-400 shadow-md transition duration-300"
        >
          <span className="text-yellow-900 text-3xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            ☀️
          </span>
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-4">CONTACT ME</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border-b border-white bg-transparent focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border-b border-white bg-transparent focus:outline-none"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border-b border-white bg-transparent focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border-b border-white bg-transparent focus:outline-none"
        />
        <button
          type="submit"
          className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-200"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
