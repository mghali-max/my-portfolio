import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Home() {
  const featured = projects.slice(0, 1);

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">Creative Professional</p>
          <h1 className="hero-title">Aymen Ghali</h1>
          <p className="hero-subtitle">
            Event Producer · Creative Director · Musician · Designer · UX/UI
          </p>
          <p className="hero-body">
            Creating meaningful experiences at the intersection of music, design,
            and technology.
          </p>
          <div className="hero-actions">
            <Link className="btn-primary" to="/work">
              View Projects
            </Link>
            <Link className="btn-secondary" to="/about">
              About Me
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="assets\Aymen_Ghali_Headshot.jpg
          " alt="Aymen at work" />
        </div>
      </section>


            {/* SELECTED WORK */}
      <section className="section">
        <div className="section-header">
          <h2>Selected Work</h2>
          <Link to="/work" className="section-link">
            View All →
          </Link>
        </div>
        <div className="work-grid home-work-grid">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>


      {/* CONTACT CTA */}
      <section id="contact" className="section section-contact">
        <h2>Let&apos;s Create Something Together</h2>
        <p>Available for select projects and collaborations.</p>
        <a className="btn-primary" href="mailto:youremail@example.com">
          Get in Touch
        </a>
      </section>
    </div>
  );
}
