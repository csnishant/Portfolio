import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Contact Us
      </h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Your Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Your Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Your Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Write your message..."
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 w-[220px] sm:w-[400px] bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full shadow-xl hover:shadow-indigo-500/50 transition inline-block">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <p className="text-center text-gray-400 mt-8">
        Or message us on Instagram 👉{" "}
        <a
          href="https://instagram.com/crevonx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 underline hover:text-white">
          @crevonx
        </a>
      </p>
    </section>
  );
};

export default Contact;
