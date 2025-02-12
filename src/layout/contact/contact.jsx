import { useState } from "react";
import emailjs from "emailjs-com"; 

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" }); 
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <div className="contact-page text-white flex-grow flex flex-col items-center justify-center p-6 sm:p-10 md:p-20">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">
        Greetings 👋, <br className="sm:hidden" /> I would love to
      </h1>
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        Get in touch😊
      </h1>

      <div className="flex flex-col md:flex-row justify-between w-full max-w-lg mb-6 text-center md:text-left">
        <div>
          <p className="text-gray-300">PHONE:</p>
          <p className="font-semibold">+254794552713</p>
        </div>
        <div>
          <p className="text-gray-300">EMAIL:</p>
          <p className="font-semibold">mainaanthony@gmail.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={sendEmail} className="w-full max-w-lg flex flex-col gap-6 sm:gap-8">
        <input
          type="text"
          name="name"
          placeholder="YOUR NAME"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full sm:min-w-[300px] bg-gray-700 rounded-lg p-3 sm:p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="YOUR EMAIL"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full sm:min-w-[300px] bg-gray-700 rounded-lg p-3 sm:p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="subject"
          placeholder="SUBJECT"
          value={form.subject}
          onChange={handleChange}
          required
          className="w-full sm:min-w-[300px] bg-gray-700 rounded-lg p-3 sm:p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          placeholder="MESSAGE"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full sm:min-w-[300px] bg-gray-700 rounded-lg p-3 sm:p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button type="submit" className="bg-white text-black font-bold px-6 py-3 sm:py-4 rounded-lg hover:bg-gray-200">
          SEND MESSAGE
        </button>
      </form>

      {/* Social Media Links */}
      <div className="mt-6 sm:mt-8 text-center text-gray-400 flex flex-col md:flex-row gap-2 sm:gap-4 items-center">
        <p>INSTAGRAM: @tony_miley</p>
      </div>
    </div>
  );
};

export default Contact;
