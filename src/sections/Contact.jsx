import React, { useState } from "react";
import emailjs from "emailjs-com";
import facebook from "../../public/assets/facebook.png";
import instagram from "../../public/assets/instagram.png";
import github from "../../public/assets/github2.png";
import Lottie from "lottie-react";
import contact from "../../public/assets/mail.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // حالة الرسالة
  const [errorMessage, setErrorMessage] = useState(""); // حالة رسالة الخطأ

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate the form data
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      return "Please fill in all fields.";
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formData.email)) {
      return "Please enter a valid email address.";
    }

    return ""; // If validation passes, return an empty string (no error)
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submitting
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError); // Set error message if validation fails
      return;
    }

    setStatus("Sending your message...");
    setErrorMessage(""); // Clear previous error messages

    // Use EmailJS to send the form data
    emailjs
      .sendForm(
        "service_efnmlok", // Replace with your EmailJS service ID
        "template_8he2xej", // Replace with your EmailJS template ID
        e.target, // Pass the form element
        "HHkmgdm4k2NN4Tq8b" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!"); // Success message
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          setStatus("Failed to send the message. Please try again."); // Error message
        }
      );
  };

  return (
    <section id="contact" className="relative py-10 px-5 md:px-0">
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-blue-500">
              Get in Touch
            </h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaboration. Feel free
              to reach out!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/alaaeldin.abousamra"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={facebook} alt="Facebook" className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/3laaddin.abosamra/"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={instagram} alt="Instagram" className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/Alaaeldinabosamra/"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={github} alt="GitHub" className="h-6 w-6" />
              </a>
            </div>
            <Lottie
              animationData={contact}
              className="w-[350px] mx-auto lg:w-[500px]"
            />
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 bg-blue-500/50 backdrop-blur-lg rounded-lg border border-blue-300 shadow-lg shadow-blue-500 p-10"
          >
            <h1 className="text-white-600 text-4xl font-bold mb-7">
              Contact Me
            </h1>

            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md bg-black-200 border border-black-300 text-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md bg-black-200 border border-black-300 text-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md bg-black-200 border border-black-300 text-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-3 py-2 rounded-lg"
            >
              Send Message
            </button>

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 mt-4">{errorMessage}</p>
            )}

            {/* Status Message */}
            {status && <p className="text-white mt-4">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
