import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        mt-16
        bg-white/70 dark:bg-black/40
        backdrop-blur-md
        border-t border-black/10 dark:border-white/10
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-3">MyPortfolio</h2>
          <p className="text-gray-700 dark:text-gray-400">
            Building clean and modern web experiences. Thanks for visiting my
            portfolio.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-400">
            <li><a href="/" className="hover:text-red-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-red-400 transition">About</a></li>
            <li><a href="/projects" className="hover:text-red-400 transition">Projects</a></li>
            <li><a href="/Contact" className="hover:text-red-400 transition">Contact</a></li>
            <li><a href="/skills" className="hover:text-red-400 transition">Skills</a></li>

          </ul>
        </motion.div>

        {/* Social */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <h3 className="text-lg font-semibold mb-4">Connect</h3>
  <div className="flex gap-4">

    {/* GitHub */}
    <a
      href="https://github.com/Moinul-IE"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-black/10 dark:bg-white/10 rounded-2xl hover:bg-gray-700/20 dark:hover:bg-gray-300/20 transition"
    >
      <FaGithub size={20} />
    </a>

    {/* LinkedIn */}
    <a
      href="https://linkedin.com/in/moinul-islam-emon"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-black/10 dark:bg-white/10 rounded-2xl hover:bg-blue-500/20 transition"
    >
      <FaLinkedin size={20} />
    </a>

    {/* Email */}
    <a
      href="mailto:moinulislamemon82@gmail.com"
      className="p-3 bg-black/10 dark:bg-white/10 rounded-2xl hover:bg-red-500/20 transition"
    >
      <MdEmail size={20} />
    </a>

  </div>
</motion.div>
      </div>

      {/* Bottom */}
      <div className="border-t border-black/10 dark:border-white/10 text-center py-6 text-gray-700 dark:text-gray-500">
        © {year} MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
}
