"use client";
import { useState } from "react";
import Product from "./Project";
import Project from "./Project";
import { filterButtons, projects } from "@/data";

export default function Projects() {
  const [filter, setFilter] = useState("All Projects");

  const filteredProjects =
    filter === "All Projects"
      ? projects
      : projects.filter((project) => project.tools === filter);

  return (
    <section
      id="products"
      className="mt-8 flex flex-col sm:flex-row gap-5 py-10"
    >
      <div className="flex flex-row sm:flex-col gap-1 mb-6 text-sm">
        {filterButtons.map(({ id, label, width }) => (
          <button
            key={id}
            onClick={() => setFilter(label)}
            className={`${width} sm:py-2 py-1 rounded transition-colors duration-200 font-semibold ${
              filter === label
                ? "border border-blue-400 shadow text-gray-300"
                : "bg-zinc-700 text-gray-400 hover:bg-zinc-600"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
