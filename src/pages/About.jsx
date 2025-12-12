export default function About() {
  return (
    <section className="section about-page">
      <div className="about-layout">
        <div className="about-image">
          <img src="public\assets\image.jpg" alt="Aymen Ghali" />
        </div>
        <div className="about-text">
          <h1>About</h1>
          <p>
            I&apos;m Aymen Ghali, a multidisciplinary creative bridging the worlds
            of music, design, and technology.
          </p>
          <p>
           Blending strategy with storytelling, I design and deliver live experiences that leave 
lasting impressions. From large-scale branded activations to culturally-rooted 
music events, I lead cross-functional teams from concept to execution —aligning 
creative vision with technical precision.
This portfolio showcases selected works across brand, culture, and entertainment 
—each project shaped by creativity, collaboration, and a commitment to excellence 
in production
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
