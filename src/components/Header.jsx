import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/">AG</Link>
      </div>

      <nav className="nav">
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
