import React from "react";
import { about } from "@/data";

export default function About() {
  return (
    <section id="about" className="my-16 p-8 md:p-12 mx-auto w-fit">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-white mb-1">
        Hello, I&apos;m {about.name}
      </h2>
      <h3 className="text-xl text-zinc-400 mb-4">{about.role}</h3>

      {/* Description */}
      <p className="text-zinc-400 whitespace-pre-wrap mb-6 w-fit">
        {about.description}
      </p>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {about.techStack.map((tech) => (
          <span
            key={tech}
            className="bg-zinc-700 text-white text-sm px-3 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
