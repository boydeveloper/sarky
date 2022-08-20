import './testimonials.css';
import quote from '../../assets/quote.png';

import profilePic1 from '../../assets/profilePic.png';
import profilePic2 from '../../assets/profilePic2.png';
import profilePic3 from '../../assets/profilePic3.png';
function Testimonials() {
  return (
    <div className="container ">
      <div className="text-center">
        <h2 className="heading-primary" data-aos="fade-up">
          Give our users a <br />
          great experience
        </h2>
      </div>
      <div className="grid-3-cols">
        <div className="testimonial-box" data-aos="fade-up">
          <img src={quote} alt="quote marking" className="quote-img" />
          <h1 className="testimonial-text">
            "They are able to help a startup like mine scale and are very
            responsive to all of our unique needs."
          </h1>

          <div className="testimonial-profile">
            <img src={profilePic1} alt="face" />
            <span>
              <strong className="TM-name">Joew Harbert</strong>
              <p className="TM-about">CEO, NoonBrew</p>
            </span>
          </div>
        </div>
        <div className="testimonial-box" data-aos="fade-up">
          <img src={quote} alt="quote marking" className="quote-img" />
          <h1 className="testimonial-text">
            "They are able to help a startup like mine scale and are very
            responsive to all of our unique needs."
          </h1>

          <div className="testimonial-profile">
            <img src={profilePic2} alt="face" />
            <span>
              <strong className="TM-name">Joew Harbert</strong>
              <p className="TM-about">CEO, NoonBrew</p>
            </span>
          </div>
        </div>
        <div className="testimonial-box" data-aos="fade-up">
          <img src={quote} alt="quote marking" className="quote-img" />
          <h1 className="testimonial-text">
            "They are able to help a startup like mine scale and are very
            responsive to all of our unique needs."
          </h1>

          <div className="testimonial-profile">
            <img src={profilePic3} alt="face" />
            <span>
              <strong className="TM-name">Joew Harbert</strong>
              <p className="TM-about">CEO, NoonBrew</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
