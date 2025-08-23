import React, { useState } from "react";
import { Link} from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/Logo.svg" alt="Little Lemon" />
          </Link>
        </div>
        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/booking-table" onClick={() => setMenuOpen(false)}>Reservations</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
