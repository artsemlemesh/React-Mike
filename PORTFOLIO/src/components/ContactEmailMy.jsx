import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { BackgroundGradientAnimationDemo } from "./BGAnimDemo";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hpx884p",  // Replace with your EmailJS service ID
        "template_6xzamk8",  // Replace with your EmailJS template ID
        form.current,
        "c94a_MPbSVCfJjfmW"       // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to Send Message.");
        }
      );
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      <BackgroundGradientAnimationDemo />

      <div className="absolute z-10 max-w-lg w-full p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Contact Me</h1>
        <form ref={form} onSubmit={sendEmail} className="bg-white shadow-lg rounded-lg p-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;