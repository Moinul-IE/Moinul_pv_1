



import MyImage from '../assets/Image/moinulformal.jpg';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SubProjects from './SubProjects.jsx';
import AnimatedButton from './AnimatedButton.jsx';
import { Link } from "react-router-dom";


const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
}

export default function Home() {
  return (
    <div className="min-h-screen px-6 md:px-20 py-24 space-y-32">

      {/* ================= HERO ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.9 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12
                   bg-black/70 backdrop-blur-xl rounded-3xl
                   border border-white/10
                   shadow-[0_0_80px_rgba(239,68,68,0.5)]
                   p-12"
      >
        {/* Image */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex justify-center"
        >
          <img
            src={MyImage}
            alt="Moinul"
            className="w-60 h-60 rounded-full object-cover
                       border-4 border-red-500/40"
          />
        </motion.div>

        {/* Content */}
        <div>
          <h1 className="text-4xl font-bold">
            Hi, I’m <span className="text-red-500">Moinul</span>
          </h1>

          <p className="mt-2 text-gray-400">
            Software Engineer <br />
            MERN Full-Stack Developer
          </p>

          <p className="mt-5 text-gray-300 leading-relaxed">

        I’m a full-stack MERN developer helping turn ideas into scalable, high-performance web applications with clean design and real-world usability, using structured architecture and modern development best practices.
          </p>

          {/* Social */}
          <div className="flex gap-6 mt-6 text-2xl">

  

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

          {/* CTA */}
          <div className="flex gap-4 mt-8">
            <a className="px-6 py-2 rounded-xl bg-red-500 hover:bg-red-600 transition" href='/projects'>
              View Projects
            </a>
            <button
    onClick={() => {
      const link = document.createElement("a");
      link.href = "/cv.pdf"; // file must be inside public folder
      link.download = "cv.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }}
    className="px-6 py-2 rounded-xl border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition"
  >
    Download CV
  </button>
          </div>
        </div>
      </motion.section>

      {/* ================= WHAT I DO ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8"
      >
        {[
          { title: 'Frontend', icon: 'fa-react', desc: 'React, Tailwind, Motion' },
          { title: 'Backend', icon: 'fa-node-js', desc: 'Node, Express, REST APIs' },
          { title: 'Database', icon: 'fa-database', desc: 'MongoDB, MySQL' },
          { title: 'DevOps', icon: 'fa-docker', desc: 'Docker, Deployments' },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="bg-black/60 backdrop-blur-lg rounded-xl p-6
                       border border-white/10 text-center
                       shadow-[0_0_40px_rgba(239,68,68,0.35)]"
          >
            <i className={`fa-brands ${item.icon} text-3xl text-red-400`} />
            <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* ================= FEATURED PROJECTS ================= */}
      <SubProjects />

      {/* ================= SKILLS ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        <div className="flex flex-wrap justify-center gap-6 text-4xl text-gray-300">
          {[
            'fa-react',
            'fa-node-js',
            'fa-js',
            'fa-java',
            'fa-python',
            'fa-php',
            'fa-docker',
            'fa-git-alt',
          ].map((icon, i) => (
            <motion.i
              key={i}
              className={`fa-brands ${icon}`}
              whileHover={{ scale: 1.3, color: '#ef4444' }}
            />
          ))}

          <Link to="/skills">
                            <AnimatedButton text="More"  />

          </Link>
                  

        </div>
      </motion.section>

      {/* ================= WHY HIRE ME ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Why Hire Me?</h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          {[
            'Strong communication skills',
            'Clean & maintainable code',
            'Quick learner & adaptable',
            'Team collaboration mindset',
            'Problem-solving focused',
            'Real project experience',
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-black/60 rounded-xl p-5 border border-white/10"
            >
              ✅ {item}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold">
          Ready to work together?
        </h2>
        <p className="text-gray-400 mt-3">
          Let’s build something impactful.
        </p>
        <a className="inline-block mt-6 px-8 py-3 bg-red-500 rounded-xl hover:bg-red-600 transition">
          Contact Me
        </a>
      </motion.section>
    </div>
  )
}
