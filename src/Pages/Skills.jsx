import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

/* ================= TECH SKILLS ================= */
const technicalSkills = [
  { name: "MERN Stack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "PHP (Basic)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Docker / DevOps", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

/* ================= NON-TECH ================= */
const nonTechnicalSkills = [
  "Communication Skills",
  "Problem Solving",
  "Team Collaboration",
  "Leadership",
  "Time Management",
  "Adaptability",
  "Critical Thinking",
  "Client Communication",
  "Presentation Skills",
  "Fast Learner",
];

const floatAnim = {
  animate: {
    y: [0, -12, 0],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function Skills() {
  return (
    <div className="min-h-screen px-6 md:px-20 py-20">

      {/* ===== MAIN TITLE ===== */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-20"
      >
        Skills & <span className="text-red-500">Expertise</span>
      </motion.h1>

      {/* ===== TECH SKILLS ===== */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto"
      >
        {technicalSkills.map((skill, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              show: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.15, rotate: 1 }}
            className="relative group"
          >
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-2xl bg-red-500/30 blur-xl opacity-0 group-hover:opacity-100 transition" />

            {/* Card */}
            <motion.div
              {...floatAnim}
              className="relative z-10 flex flex-col items-center justify-center
                         bg-black/70 dark:bg-white/5 backdrop-blur-xl
                         border border-white/10 rounded-2xl p-6
                         shadow-[0_0_50px_rgba(239,68,68,0.5)]"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />

              <p className="mt-4 font-semibold tracking-wide text-center">
                {skill.name}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* ===== NON TECH SKILLS ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto mt-28"
      >
        <h2 className="text-2xl font-semibold text-red-400 mb-10 text-center">
          Professional Skills
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {nonTechnicalSkills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              animate={{
                boxShadow: [
                  "0 0 15px rgba(239,68,68,0.3)",
                  "0 0 35px rgba(239,68,68,0.6)",
                  "0 0 15px rgba(239,68,68,0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-center py-4 rounded-xl
                         bg-black/60 dark:bg-white/5 backdrop-blur-lg
                         border border-white/10 font-medium"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ===== GITHUB / LINKS ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex justify-center gap-6 mt-10"
      >
        <a href="https://github.com/MOINUL-IE" target="_blank" rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
               className="w-10 h-10 hover:scale-125 transition" />
        </a>
        <a href="https://gitlab.com/MOINUL-IE" target="_blank" rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
               className="w-10 h-10 hover:scale-125 transition" />
        </a>
      </motion.div>

      {/* ===== EDUCATION / SUMMARY ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 max-w-4xl mx-auto text-center
                   bg-black/70 dark:bg-white/5 backdrop-blur-xl
                   border border-white/10 rounded-3xl p-10
                   shadow-[0_0_70px_rgba(239,68,68,0.6)]"
      >
        <h3 className="text-xl font-semibold text-red-400">
          🎓 Full Stack Developer
        </h3>

        <p className="mt-4 text-gray-300 leading-relaxed">
          I am a <span className="text-white font-semibold">Full Stack Developer</span> with expertise in MERN stack, backend development, database management, and version control using Git & GitHub. Experienced in designing responsive web applications, collaborating in agile teams, and writing clean, scalable code.
        </p>
      </motion.div>

    </div>
  );
}




