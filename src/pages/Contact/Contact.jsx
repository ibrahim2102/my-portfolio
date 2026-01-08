import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto min-h-screen pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Get in touch for opportunities, collaborations, or just to say hi! I&apos;ll get back to you as soon as possible.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-start gap-4 group">
            <div className="p-4 bg-gray-900 rounded-2xl text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-lg shadow-indigo-500/10">
              <FaEnvelope size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Email</h3>
              <p className="text-gray-400 group-hover:text-indigo-400 transition-colors">mdibrahim91695@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4 group">
            <div className="p-4 bg-gray-900 rounded-2xl text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-lg shadow-indigo-500/10">
              <FaPhone size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Phone</h3>
              <p className="text-gray-400 group-hover:text-indigo-400 transition-colors">+880 1778715126</p>
            </div>
          </div>
          <div className="flex items-start gap-4 group">
            <div className="p-4 bg-gray-900 rounded-2xl text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-lg shadow-indigo-500/10">
              <FaMapMarkerAlt size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Location</h3>
              <p className="text-gray-400 group-hover:text-indigo-400 transition-colors">Dhaka, Bangladesh</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          action="https://formsubmit.co/mdibrahim91695@gmail.com"
          method="POST"
          className="space-y-6 bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 shadow-xl"
        >
          {/* Honeypot for spam */}
          <input type="text" name="_honey" style={{ display: "none" }} />

          {/* Disable Captcha if desired, or leave it. Default is on. */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Success Page (optional, defaults to formsubmit page) */}
          <input type="hidden" name="_next" value="http://localhost:5173/contact" />

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white transition-all"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white transition-all"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white transition-all resize-none"
              placeholder="How can I help you?"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-indigo-600/25"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
