import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/70 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
            <FaCode size={20} />
          </span>
          <span className="font-bold text-xl tracking-tight text-gray-100 group-hover:text-white transition-colors">Portfolio</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-indigo-400 transition-colors">About</Link>
          <Link to="/projects" className="hover:text-indigo-400 transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800 shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-4 text-center">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-indigo-400 text-lg font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-indigo-400 text-lg font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/projects" 
                className="text-gray-300 hover:text-indigo-400 text-lg font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-300 hover:text-indigo-400 text-lg font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
