import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto min-h-screen pt-32 flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent 'bg-gradient-to-r' from-indigo-400 to-purple-500 inline-block">
          About Me
        </h2>
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-800 shadow-xl space-y-6">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            I&apos;m <span className="text-indigo-400 font-semibold">Ibrahim</span>, a curious and detail-oriented developer who fell in love with programming by
            experimenting with small websites and simple JavaScript projects. Over time that curiosity turned into a focused journey with the{" "}
            <span className="text-indigo-400 font-semibold">MERN stack</span> (MongoDB, Express, React, Node.js), where I enjoy turning ideas into clean,
            interactive, and responsive web experiences.
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            I love working on projects where I can combine problem-solving with design thinking—dashboards, full-stack applications, and
            user-focused interfaces that feel smooth and intuitive. Writing readable code, structuring projects properly, and adding small
            micro-interactions and animations are the parts of the job I genuinely enjoy.
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Outside of coding, I like staying active and creative—whether that&apos;s watching football, going out for a run, listening to music,
            or exploring new ideas and technologies. I enjoy learning from people, sharing what I know, and always looking for opportunities
            to grow both as a developer and as a person.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
