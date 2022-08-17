import logo from '../../assets/Logo.png';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className="container">
      <div className="nav">
        <span className="nav-brand">
          <img src={logo} alt="logo" />
        </span>
        <ul className="nav-links">
          <li className="nav-link">
            <a href="" className="nav-item">
              Demos
            </a>
          </li>
          <li className="nav-link">
            <a href="" className="nav-item">
              About
            </a>
          </li>
          <li className="nav-link">
            <a href="" className="nav-item">
              Blog
            </a>
          </li>
          <li className="nav-link">
            <a href="" className="nav-item">
              Pages
            </a>
          </li>
          <li className="nav-link">
            <a href="" className="nav-item">
              Contact
            </a>
          </li>
        </ul>
        <div className="nav-cta">
          <a href="" className="cta-link">
            Sign in
          </a>
          <Button children={'Get Started Free'} backgroundColor={'black'} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
