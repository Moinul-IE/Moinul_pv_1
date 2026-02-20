import { motion } from "framer-motion";

export default function PremiumButton({ text = "Contact Me" }) {
  return (
    <motion.button
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="relative group px-10 py-2 rounded-2xl text-sm
                 bg-black text-white font-semibold tracking-wide
                 border border-red-500/40
                 overflow-hidden
                 shadow-[0_0_30px_rgba(239,68,68,0.4)]
                 hover:shadow-[0_0_60px_rgba(239,68,68,0.9)]
                 transition-all duration-300"
    >

      {/* Glow Background */}
      <span className="absolute inset-0 rounded-2xl
                       bg-red-500/20 blur-xl
                       opacity-0 group-hover:opacity-100
                       transition duration-300"></span>

      {/* Animated Gradient Sweep */}
      <span className="absolute inset-0
                       bg-gradient-to-r from-transparent
                       via-red-400/40 to-transparent
                       -translate-x-full group-hover:translate-x-full
                       transition-transform duration-700"></span>

      {/* Button Text */}
      <span className="relative z-10">{text}</span>
    </motion.button>
  );
}
