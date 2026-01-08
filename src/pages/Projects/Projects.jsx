import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import toyTopiaImage from "../../assets/toy-topia.png";
import digitalLifeLessonsImage from "../../assets/digital-life-lessons.png";
import synvoItSolutionsImage from "../../assets/synvo-it-solutions.png";

const projects = [
  {
    title: "Toytopia",
    description: "A toy marketplace where users can buy and sell toys. Features include user authentication, product management, and a responsive design.",
    tech: ["React", "Tailwind", "Firebase"],
    link: "https://toytopia-assignment-09.netlify.app",
    github: "https://github.com/ibrahim2102/toyTopia.git",
    image: toyTopiaImage
  },
  {
    title: "Digital Life Lessons",
    description: "A platform for sharing and learning life lessons. Users can post stories, comment, and interact with a community focused on personal growth.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://digital-life-lessons-140b5.web.app",
    github: "https://github.com/ibrahim2102/digital-life-lessons-client.git",
    image: digitalLifeLessonsImage
  },
  {
    title: "Synvo-IT-Solutions",
    description: "A service marketplace platform that connects clients with verified providers across web development, design, marketing, and IT support, with ratings, reviews, and clear pricing.",
    tech: ["React", "Tailwind", "JavaScript"],
    link: "https://synvo-it-solutions-client.netlify.app",
    github: "https://github.com/ibrahim2102/synvo-it-solutions-client.git",
    image: synvoItSolutionsImage
  },
];

export default function Projects() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto min-h-screen pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-400 text-lg">
          Here are some of the projects I&apos;ve worked on. Each one was an opportunity to learn and solve interesting problems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
          >
            <div className="h-48 bg-gray-800 relative overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{p.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {p.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tech.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors font-medium"
                >
                  <FaExternalLinkAlt size={14} /> Live Demo
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-lg transition-colors font-medium"
                >
                  <FaGithub size={16} /> Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
