import logo from '../../assets/Logo.png';
import Button from '../button/Button';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navbar.css';
import { useState } from 'react';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="container">
      <div className="nav">
        <div className="gpt3__navbar-links">
          <div className="nav-brand">
            <img src={logo} />
          </div>
          <ul className="nav-links">
            <li className="nav-link">
              <a className="nav-item" href="#home">
                Demos
              </a>
            </li>
            <li className="nav-link">
              <a className="nav-item" href="#wgpt3">
                About
              </a>
            </li>
            <li className="nav-link">
              <a className="nav-item" href="#possibility">
                Blog
              </a>
            </li>
            <li className="nav-link">
              <a className="nav-item" href="#features">
                Pages
              </a>
            </li>
            <li className="nav-link">
              <a className="nav-item" href="#blog">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-cta">
          <a className="cta-link">Sign in</a>
          <button type="button" className="u-button black">
            Get Started Free
          </button>
        </div>
        <div className="menu-btns">
          {toggleMenu ? (
            <FaTimes
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <FaBars
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="open-nav scale-up-center">
              <div className="open-nav-links">
                <a className="nav-item" href="#home">
                  Demos
                </a>

                <a className="nav-item" href="#wgpt3">
                  About
                </a>

                <a className="nav-item" href="#possibility">
                  Blog
                </a>

                <a className="nav-item" href="#features">
                  Pages
                </a>

                <a className="nav-item" href="#blog">
                  Contact
                </a>
                <div className="openNav-cta">
                  <a className="nav-item" href="#sign">
                    Sign in
                  </a>
                  <button type="button" className="u-button black">
                    Get Started Free
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
