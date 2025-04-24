import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { HiArrowSmRight } from "react-icons/hi";
import { motion } from "framer-motion";
function Project({ project, animationKey }) {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      // initial={animationKey !== "React" ? { scale: 0.5 } : { x: 0 }}
      // animate={
      //   animationKey !== "React"
      //     ? { scale: 1 }
      //     : project.id !== 3
      //     ? { x: [600, 0] }
      //     : { y: [3000, 0], x: [-3000, 0] }
      // }
      transition={{ duration: 0.2 }}
      key={animationKey}
      className="max-w-sm bg-transparent border border-blue-400 hover:border-blue-300 hover:rotate-2 transition rounded-lg shadow-2xl overflow-hidden group hover:shadow-2xl  duration-300"
    >
      <div className="w-full h-48 overflow-hidden relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="w-full h-full object-cover group-hover:scale-105 transform transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Icons row */}
        <div className="flex items-center space-x-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Live Demo"
          >
            <FiExternalLink size={20} />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub Repo"
          >
            <FiGithub size={20} />
          </a>
        </div>
      </div>

      {/* “more →” Link */}
      <div className="px-6 pb-6">
        <a
          href={project.more}
          className="inline-flex items-center text-blue-400 hover:text-blue-200 font-medium transition-colors"
        >
          more
          <HiArrowSmRight className="ml-1" size={20} />
        </a>
      </div>
    </motion.div>
  );
}

export default Project;
