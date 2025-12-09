export default function About() {
  return (
    <section className="section about-page">
      <div className="about-layout">
        <div className="about-image">
          <img src="/assets/about-portrait.jpg" alt="Aymen Ghali" />
        </div>
        <div className="about-text">
          <h1>About</h1>
          <p>
            I&apos;m Aymen Ghali, a multidisciplinary creative bridging the worlds
            of music, design, and technology.
          </p>
          <p>
            My journey began in music production and evolved into event
            production, brand identity, and digital experiences that feel both
            intuitive and emotionally resonant.
          </p>

          <h2>Capabilities</h2>
          <div className="capabilities-grid">
            <ul>
              <li>Production</li>
              <li>Event Production</li>
              <li>Creative Direction</li>
              <li>Music Production</li>
              <li>Project Management</li>
            </ul>
            <ul>
              <li>Design</li>
              <li>Brand Identity</li>
              <li>Editorial Design</li>
              <li>UX/UI Design</li>
              <li>Typography</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
