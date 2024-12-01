import { Link } from "react-router-dom";
import "./Header.css"; 

function Header() {
  return (
    <nav className="header">
      <ul className="header-menu">
        <li className="header-item">
          <Link to="/">Home</Link>
        </li>
        <li className="header-item">
          <Link to="/about">About</Link>
        </li>
        <li className="header-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
