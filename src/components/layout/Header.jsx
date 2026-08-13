import '../../styles/Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">FocoJá</a>
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <Link to="/sobre" rel="noopener noreferrer">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
