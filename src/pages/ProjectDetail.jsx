import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!project) {
    return (
      <section className="section">
        <p>Project not found.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </section>
    );
  }

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = () =>
    setLightboxIndex((i) =>
      i === 0 ? project.images.length - 1 : i - 1
    );

  const showNext = () =>
    setLightboxIndex((i) =>
      i === project.images.length - 1 ? 0 : i + 1
    );

  return (
    <div className="project-page">
      <section className="section project-hero">
        <Link to="/work" className="back-link">
          ← Back to Projects
        </Link>

        {project.images?.[0] && (
          <div className="project-hero-image">
            <img src={project.images[0]} alt={project.title} />
          </div>
        )}

        <p className="work-meta">
          {project.category.toUpperCase()} · {project.year}
        </p>
        <h1 className="project-title">{project.title}</h1>
      </section>

   <section className="section project-body">
<p className="project-text">{project.description}</p>

</section>

      {/* Optional project video (e.g. YouTube embed) */}
      {project.video && (
        <section className="section project-video">
          <div className="video-wrapper">
            <iframe
              src={project.video}
              title={project.title + " video"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}

      {project.images?.length > 1 && (
        <section className="section project-gallery">
          <h2>Project Gallery</h2>
          <div className="gallery-grid">
            {project.images.map((src, index) => (
              <button
                key={src}
                className="gallery-thumb"
                onClick={() => openLightbox(index)}
              >
                <img src={src} alt={`${project.title} ${index + 1}`} />
              </button>
            ))}
          </div>
        </section>
      )}

      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            <button className="lightbox-nav left" onClick={showPrev}>
              ‹
            </button>
            <img
              src={project.images[lightboxIndex]}
              alt={`${project.title} ${lightboxIndex + 1}`}
            />
            <button className="lightbox-nav right" onClick={showNext}>
              ›
            </button>
            <div className="lightbox-counter">
              {lightboxIndex + 1} / {project.images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
