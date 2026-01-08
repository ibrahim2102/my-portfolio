import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-gray-400">
          <span className="text-indigo-500 font-semibold">Ibrahim</span> © {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-6">
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/projects" className="text-gray-300 hover:text-white">Projects</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/" aria-label="GitHub" className="text-gray-300 hover:text-white">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/" aria-label="LinkedIn" className="text-gray-300 hover:text-white">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:ibrahim.dev@email.com" aria-label="Email" className="text-gray-300 hover:text-white">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
