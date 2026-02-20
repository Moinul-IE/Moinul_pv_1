


import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Doctor Appointment System",
    description:
      "MERN-based doctor appointment booking with smart filtering, authentication, and admin control.",
    image: "/project1.jpg",
    tech: ["MERN", "React"],
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Listing App",
    description:
      "A modern listing platform with image uploads, CRUD features, and secure authentication.",
    image: "/project2.jpg",
    tech: ["MERN"],
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Ultra-modern portfolio built with React, Tailwind, Framer Motion & premium UI effects.",
    image: "/project3.jpg",
    tech: ["React"],
    live: "#",
    github: "#",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  const [selected, setSelected] = useState("All");
  const [active, setActive] = useState(null);

  const filtered =
    selected === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(selected));

  return (
    <div className="relative min-h-screen border border-red-500/10 bg-black text-white px-6 py-24 overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">
          Featured Projects
        </h1>
        
      </motion.div>

      {/* Filters */}
      

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl min-h-50 mx-auto"
      >
        {filtered.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            whileHover={{
              rotateX: 8,
              rotateY: -8,
              scale: 1.05,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="group relative rounded-2xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Glow Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-purple-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition" />

            {/* Card */}
            <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  {project.title}
                </h2>

                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-red-500/20 text-red-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.live}
                    className="flex-1 text-center bg-gradient-to-r from-red-500 to-pink-500 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition"
                  >
                    Live
                  </a>
                  <button
                    onClick={() => setActive(project)}
                    className="flex-1 border border-white/20 py-2 rounded-lg text-sm font-semibold hover:border-red-500 transition"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-black border border-white/10 rounded-2xl max-w-lg w-full p-6 relative"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 text-xl hover:text-red-500"
            >
              ✕
            </button>

            <img src={active.image} className="rounded-lg mb-4" />

            <h2 className="text-2xl font-bold mb-2">
              {active.title}
            </h2>

            <p className="text-gray-300 mb-5">
              {active.description}
            </p>

            <div className="flex gap-4">
              <a
                href={active.live}
                className="bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2 rounded-lg"
              >
                Live
              </a>
              <a
                href={active.github}
                className="border border-white/20 px-4 py-2 rounded-lg hover:border-red-500 transition"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}   

