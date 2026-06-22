import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Rick & Morty</Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Inicio</Link>
        <Link to="/favoritos" className="navbar-link">Favoritos</Link>
        <Link to="/login" className="navbar-link">Login</Link>
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label={isDark ? "Modo claro" : "Modo oscuro"}
        >
          {isDark ? "☀" : "☾"}
        </button>
      </div>
    </nav>
  );
}
