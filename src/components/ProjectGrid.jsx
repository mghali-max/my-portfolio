import ProjectCard from "./ProjectCard.jsx";

export default function ProjectGrid({ projects }) {
  return (
    <div className="work-grid">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
