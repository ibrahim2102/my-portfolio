

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaReact, FaJsSquare, FaGithub, FaNodeJs, FaCode, FaDownload, FaLinkedin } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import Image from '../../assets/image.jpg'
import toyTopiaImage from "../../assets/toy-topia.png";
import digitalLifeLessonsImage from "../../assets/digital-life-lessons.png";

const MotionLink = motion(Link);

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 -z-10"
      >
        <motion.div
          className="absolute w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"
          initial={{ x: -200, y: -100, scale: 0.8, opacity: 0.6 }}
          animate={{ x: 50, y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-10 bottom-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"
          initial={{ x: 150, y: 100, scale: 0.8, opacity: 0.6 }}
          animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </motion.div>

      <div className="px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-indigo-600/20 text-indigo-300 mb-6"
            >
              Full Stack Developer
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I’m <span className="text-transparent bg-clip-text 'bg-gradient-to-r' from-indigo-400 to-purple-500">Ibrahim</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mt-6 leading-relaxed max-w-lg">
              I build scalable web applications with the MERN stack. Passionate about clean code, performance, and seamless user experiences.
            </p>
            
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MotionLink
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                to="/projects"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-indigo-600/25"
              >
                View Projects
              </MotionLink>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume-details.pdf" 
                download="Resume.pdf"
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-xl font-medium transition-colors flex items-center gap-2"
              >
                <FaDownload /> Resume
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, color: "#fff" }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/ibrahim2102" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub size={28} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, color: "#fff" }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/md-ibrahim-5126i" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={28} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[320px] md:max-w-[400px] aspect-4/5"
          >
            <div className="absolute inset-0 rounded-3xl 'bg-gradient-to-tr' from-indigo-600 to-purple-600 blur-2xl opacity-40 -rotate-6 transform translate-y-4" />
            <img
              src={Image}
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-3xl border-2 border-gray-700/50 shadow-2xl"
            />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-5xl mx-auto mt-32"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12">
            Tech Stack
          </motion.h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
              { icon: SiExpress, name: "Express.js", color: "text-gray-400" },
              { icon: FaReact, name: "React", color: "text-cyan-400" },
              { icon: FaNodeJs, name: "Node.js", color: "text-green-400" },
              { icon: SiTailwindcss, name: "Tailwind", color: "text-sky-400" },
              { icon: FaJsSquare, name: "JavaScript", color: "text-yellow-400" },
              { icon: FaGithub, name: "Git", color: "text-gray-300" },
              { icon: FaCode, name: "Clean Code", color: "text-indigo-400", isComponent: false } // Fallback icon
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 flex flex-col items-center justify-center gap-4 transition-colors"
              >
                {tech.isComponent === false ? (
                   <FaCode size={40} className={tech.color} />
                ) : (
                   <tech.icon className={tech.color} size={40} />
                )}
                <span className="font-medium text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-4xl mx-auto mt-32"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-6">
            Education
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg md:text-xl leading-relaxed text-center mb-8"
          >
            I completed my <span className="text-indigo-400 font-semibold">Bachelor of Science in Computer Science &amp; Engineering </span> 
           in Bangladesh, where I built a strong foundation in algorithms, data structures, databases, networking, and web development.
          </motion.p>
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-800 p-8 md:p-10 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-wide text-indigo-400">Bachelor&apos;s Degree</p>
                <p className="text-xl font-semibold text-gray-100">Computer Science &amp; Engineering</p>
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                <p>Bangladesh University • 4-year program</p>
                <p>Focus: Web development, problem solving, software engineering</p>
              </div>
            </div>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              During my studies I worked on practical projects like CRUD applications with the MERN stack, RESTful APIs, authentication systems,
              and dashboards that turn raw data into clear visuals. This mix of theory and real projects shaped how I think about building
              reliable, user-friendly applications.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto mt-32"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:border-indigo-500/30 transition-all group flex flex-col h-full">
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                <img
                  src={toyTopiaImage}
                  alt="Toytopia project preview"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold group-hover:text-indigo-400 transition-colors">Toytopia</h3>
                <p className="text-gray-400 mt-3 flex-1 leading-relaxed">A niche marketplace for buying and selling unique toys. Built with React and Firebase for real-time data.</p>
                <div className="flex flex-wrap gap-2 mt-6">
                   <span className="text-xs font-medium px-3 py-1 bg-gray-800 rounded-full text-indigo-300 border border-gray-700">React</span>
                   <span className="text-xs font-medium px-3 py-1 bg-gray-800 rounded-full text-indigo-300 border border-gray-700">Firebase</span>
                   <span className="text-xs font-medium px-3 py-1 bg-gray-800 rounded-full text-indigo-300 border border-gray-700">Tailwind</span>
                </div>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="https://toytopia-assignment-09.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 mt-8 text-indigo-400 font-semibold hover:text-indigo-300"
                >
                  Live Demo →
                </motion.a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:border-indigo-500/30 transition-all group flex flex-col h-full">
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                <img
                  src={digitalLifeLessonsImage}
                  alt="Digital Life Lessons project preview"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold group-hover:text-indigo-400 transition-colors">Digital Life Lessons</h3>
                <p className="text-gray-400 mt-3 flex-1 leading-relaxed">A MERN stack platform for community-driven storytelling and life advice. Features user authentication and CRUD operations.</p>
                <div className="flex flex-wrap gap-2 mt-6">
                   <span className="text-xs font-medium px-3 py-1 bg-gray-800 rounded-full text-indigo-300 border border-gray-700">MongoDB</span>
                   <span className="text-xs font-medium px-3 py-1 bg-gray-800 rounded-full text-indigo-300 border border-gray-700">Express</span>
                   <span className="text-xs font-medium px-3 py-1 bg-gray-800 rounded-full text-indigo-300 border border-gray-700">React</span>
                   <span className="text-xs font-medium px-3 py-1 bg-gray-800 rounded-full text-indigo-300 border border-gray-700">Node</span>
                </div>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="https://digital-life-lessons-140b5.web.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 mt-8 text-indigo-400 font-semibold hover:text-indigo-300"
                >
                  Live Demo →
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <MotionLink
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              to="/projects"
              className="inline-block px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-xl font-medium transition-colors"
            >
              View All Projects
            </MotionLink>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto mt-32"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12">
            Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Full Stack Development", desc: "Building end-to-end web applications with MongoDB, Express, React, and Node.js." },
              { title: "Frontend & UI/UX", desc: "Responsive, accessible interfaces with modern design principles and animations." },
              { title: "API Integration", desc: "Connecting frontends to robust backends and third-party services seamlessly." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-6 text-indigo-400">
                  <FaCode size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mt-32 mb-20 text-center 'bg-gradient-to-br' from-indigo-900/20 to-purple-900/20 p-12 rounded-3xl border border-indigo-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s work together</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Have an idea or project in mind? I’m available for freelance and collaboration. Let&apos;s turn your vision into reality.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact" 
            className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-lg shadow-indigo-600/25 transition-all"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
