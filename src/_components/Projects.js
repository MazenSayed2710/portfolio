"use client";
import { useState } from "react";
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
      <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-1 sm:gap-3 mb-6 text-sm sm:text-base h-fit">
        {filterButtons.map(({ id, label, width }) => (
          <button
            key={id}
            onClick={() => setFilter(label)}
            className={`${width} sm:py-2 py-1 rounded  transition-colors duration-200 font-semibold h-14 ${
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
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Project key={project.id} project={project} animationKey={filter} />
          ))
        ) : (
          <div className="col-span-full text-center text-blue-400 text-xl font-medium py-8 animate-pulse">
            Coming Soon...
          </div>
        )}
      </div>
    </section>
  );
}
