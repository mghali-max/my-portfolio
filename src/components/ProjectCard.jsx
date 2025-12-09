// src/components/ProjectCard.jsx
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="work-card">
      <Link to={`/projects/${project.id}`}>
        {project.images?.[0] && (
          <div className="work-image-wrapper">
            <img src={project.images[0]} alt={project.title} />
          </div>
        )}

        <p className="work-meta">
          {project.category.toUpperCase()} · {project.year}
        </p>
        <h3 className="work-title">{project.title}</h3>
        <p className="work-desc">{project.description}</p>
      </Link>
    </article>
  );
}
