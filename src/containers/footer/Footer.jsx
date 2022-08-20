import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import './footer.css';
function Footer() {
  return (
    <div className="container">
      <div className="grid-4-cols">
        <div className="ft-box ft-box-1">
          <img src={Logo} alt="logo" className="ft-logo" />
          <p className="ft-text">
            There are many variations of passages of Lorem the Ipsum available
            it majority.
          </p>

          <div className="search">
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="ft-box ft-box-2">
          <h2 className="ft-heading">Services</h2>
          <ul className="ft-links">
            <li className="ft-link">
              <a className="ft-item">Incident Responder</a>
            </li>
            <li className="ft-link">
              <a className="ft-item">Secure Managed IT</a>
            </li>
            <li className="ft-link">
              <a className="ft-item">Check website Url</a>
            </li>
            <li className="ft-link">
              <a className="ft-item">Locker Security</a>
            </li>
          </ul>
        </div>
        <div className="ft-box ft-box-3">
          <h2 className="ft-heading">About Us</h2>
          <ul className="ft-links">
            <li className="ft-link">
              <a className="ft-item">Payment Plans</a>
            </li>
            <li className="ft-link">
              <a className="ft-item">Make saving More</a>
            </li>
            <li className="ft-link">
              <a className="ft-item">Tax Calculator</a>
            </li>
            <li className="ft-link">
              <a className="ft-item">Talk To Us</a>
            </li>
          </ul>
        </div>
        <div className="ft-box ft-box-4">
          <h2 className="ft-heading">Services</h2>
          <p className="ft-text">
            455 West Orchard Street Kings Mountain, NC 280867
          </p>

          <div className="ft-details ft-margin">
            <FaPhone className="ft-icon" />
            <p>+088 (246) 642-27-10</p>
          </div>
          <div className="ft-details">
            <FaEnvelope className="ft-icon" />
            <p>example@mail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
