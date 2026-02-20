import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from "emailjs-com";
import { useRef } from "react";


export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
    )
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch(() => {
      alert("Failed to send message.");
    });

    e.target.reset();
  };
  return (
    <div className="min-h-screen bg-black text-white px-8 py-20">
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-4">Contact Me</h1>
      <p className="text-center text-gray-500 mb-12">
        Let’s work together or just say hello 👋
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-40">

        {/* LEFT — Contact Info */}
        

        {/* RIGHT — Contact Form */}
        <div className="bg-black/70 mt-35 mb-30  backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-[0_0_60px_rgba(239,68,68,0.6)] ">
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm">Your Name</label>
              <input
                name='name'
                type="text"
                placeholder="Enter your name"
                className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Email Address</label>
              <input
                name='email'
                type="email"
                placeholder="Enter your email"
                className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
              />
            </div>
           

            <div>
              <label className="block mb-1 text-sm">Message</label>
              <textarea
                name='message'
                rows="4"
                placeholder="Write your message..."
                className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 transition rounded-lg py-2 font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>




{/* contact info */}


<div className="w-lg h-100 bg-black/70 backdrop-blur-md shadow-[0_0_60px_rgba(239,68,68,0.6)] border border-white/10 rounded-xl p-6  space-y-6">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>

          <p className="text-gray-300">
            I’m open to freelance work, remote jobs, and collaboration.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>
              <i className="fa-solid fa-envelope text-red-500 mr-3"></i>
              <a href="mailto:moinulislamemon82@gmail.com" className="text-white-400 hover:text-red-300 transition">
                moinulislamemon82@gmail.com
              </a>
            </p>
            <p>
              <i className="fa-solid fa-location-dot text-red-500 mr-3"></i>
              Malaysia 
            </p>
            <p>
              <i className="fa-solid fa-briefcase text-red-500 mr-3"></i>
              Software Engineer <br />
             Specially- MERN Full-Stack Developer
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-5 text-2xl pt-4">
           <a
    href="https://linkedin.com/in/moinul-islam-emon "
    target="_blank"
    rel="noopener noreferrer"
    className="transition transform hover:scale-125 hover:text-blue-400"
  >
    <i className="fa-brands fa-linkedin" />
  </a>

  <a
    href="https://github.com/Moinul-IE"
    target="_blank"
    rel="noopener noreferrer"
    className="transition transform hover:scale-125 hover:text-yellow-400"
  >
    <i className="fa-brands fa-github" />
  </a>

  {/* Email — same design */}
  <a
    href="mailto:moinulislamemon82@gmail.com?subject=Contact%20from%20Portfolio"
    className="transition transform hover:scale-125 hover:text-red-500"
  >
    <i className="fa-solid fa-envelope" />
  </a>
 
<a
    href="https://facebook.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="transition transform hover:scale-125 hover:text-blue-500"
  >
    <i className="fa-brands fa-facebook" />
  </a>

  <a
    href="https://instagram.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="transition transform hover:scale-125 hover:text-pink-500"
  >
    <i className="fa-brands fa-instagram" />
  </a>
          </div>
        </div>















      </div>
    </div>
  );
}
