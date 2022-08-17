import Button from '../../components/button/Button';
import { FaStar, FaPlayCircle } from 'react-icons/fa';

import pilot from '../../assets/trustpilot.png';
import './header.css';

function Header() {
  return (
    <div className="container">
      <div className="section-header">
        <div className="hero">
          <div className="textbox-img"></div>
          <div className="text-box">
            <h1 className="hero-heading">
              The best use of social media marketing
            </h1>
            <p className="hero-summary">
              Social media networks are open to all. Social media is typically
              used for social <br /> interaction and access to news and
              information, and decision making.
            </p>

            <div className="hero-ctas">
              <Button
                children={'Start 14 Days Free Trial'}
                backgroundColor={'black'}
              />
              <button className="play-btn">
                <FaPlayCircle />
                <p className="font">Watch A Demo</p>
              </button>
            </div>
            <div className="ratings">
              <span className="brandName">
                <img src={pilot} alt="trustpilot" />
              </span>

              <span className="stars">
                <span>
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                </span>
                <p>4900+ 5 Stars</p>
              </span>
            </div>
          </div>
        </div>
        <div className="heroShape"></div>
      </div>
    </div>
  );
}

export default Header;
