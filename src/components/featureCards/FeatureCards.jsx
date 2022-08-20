import './featureCards.css';
import { FaCheck, FaDollarSign } from 'react-icons/fa';
import Checkbox from '../Checkbox/Checkbox';
function FeatureCards() {
  return (
    <div className="container">
      <div className="text-center">
        <h2 className="heading-primary">
          Choose a plan that <br /> works for you
        </h2>
        <Checkbox />
      </div>

      <div className="grid-3-cols">
        <div className="pricing-cards grey" data-aos="fade-up">
          <div className="pricing-plan">Starter</div>
          <div className="flex">
            <FaDollarSign size={30} className="dollar" />
            <strong className="pricing-price">$ 5.00</strong>
          </div>
          <div className="pricing-duration">Per Month</div>
          <div className="border"></div>
          <ul className="pricing-lists">
            <li className="pricing-list">
              <span className="card-icon">
                <FaCheck />
              </span>
              <p>3 Social Media Account</p>
            </li>
            <li className="pricing-list">
              <span className="card-icon">
                <FaCheck />
              </span>
              <p>Free Platform Access</p>
            </li>
            <li className="pricing-list">
              <span className="card-icon">
                <FaCheck />
              </span>
              <p>24/7 Customer Support</p>
            </li>
          </ul>
          <button className="pricing-btn transperent">Get Started</button>
        </div>
        <div className="pricing-cards black" data-aos="fade-up">
          <div className="pricing-plan">Basic</div>
          <div className="flex">
            <FaDollarSign size={30} className="dollar" />
            <strong className="pricing-price">$ 45.00</strong>
          </div>
          <div className="pricing-duration">Per Month</div>
          <div className="border"></div>
          <ul className="pricing-lists">
            <li className="pricing-list">
              <span className="card-icon">
                <FaCheck />
              </span>
              <p>5 Social Media Account</p>
            </li>
            <li className="pricing-list">
              <span className="card-icon">
                <FaCheck />
              </span>
              <p>Free Platform Access</p>
            </li>
            <li className="pricing-list">
              <span className="card-icon">
                <FaCheck />
              </span>
              <p>24/7 Customer Support</p>
            </li>
          </ul>
          <button className="pricing-btn white">Get Started</button>
        </div>
        <div className="pricing-cards grey card-3" data-aos="fade-up">
          <div className="pricing-plan">Premium</div>
          <div className="flex">
            <FaDollarSign size={30} className="dollar" />
            <strong className="pricing-price">230.00</strong>
          </div>
          <div className="pricing-duration">Per Month</div>
          <div className="border"></div>
          <ul className="pricing-lists">
            <li className="pricing-list">
              <span className="card-icon">
                <FaCheck />
              </span>
              <p>10 Social Media Account</p>
            </li>
            <li className="pricing-list">
              <span className="card-icon">
                <FaCheck />
              </span>
              <p>Free Platform Access</p>
            </li>
            <li className="pricing-list">
              <span className="card-icon">
                <FaCheck />
              </span>
              <p>24/7 Customer Support</p>
            </li>
          </ul>
          <button className="pricing-btn transperent">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default FeatureCards;
