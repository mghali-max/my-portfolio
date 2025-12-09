import { useState } from "react";
import { projects } from "../data/projects";
import ProjectGrid from "../components/ProjectGrid.jsx";

const CATEGORIES = ["All Projects", "Events & Media"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filtered =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="section work-page">
      <h1>Selected Work</h1>
      <p>A collection of projects spanning event production and more.</p>

      <div className="work-tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`work-tab ${cat === activeCategory ? "is-active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <ProjectGrid projects={filtered} />
    </section>
  );
}
