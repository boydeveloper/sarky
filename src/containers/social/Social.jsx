import './social.css';

import faces from '../../assets/faces.png';
import potrait from '../../assets/potrait.png';
function Social() {
  return (
    <div className="container">
      <div className="grid-2-cols margin-bottom">
        <div className="img-box" data-aos="fade-up">
          <img src={faces} alt="faces social" />
        </div>
        <div className="socialText-box" data-aos="fade-up">
          <h1 className="heading-primary">
            Bring your target users together on social media
          </h1>
          <p className="social-summary mb-sm">
            Social media audience research isn’t complicated. It’s mainly about
            narrowing your focus while expanding your reach.
          </p>
          <p className="social-summary">
            We’ve created a free social media audience research template to help
            you keep track of all the information you learn as you conduct your
            research.
          </p>
        </div>
      </div>
      <div className="grid-2-cols">
        <div className="socialText-box" data-aos="fade-up">
          <h1 className="heading-primary">
            Build your brand & reach out to social followers
          </h1>
          <p className="social-summary mb-sm">
            Brand awareness is cited as the top priority for marketers, and
            social media channels are a one-to-many solution for getting the
            word out about your products and services.
          </p>
          <p className="social-summary">
            By creating a strong brand presence on social media, you can reach a
            broader audience & get partners brand advocates to post content.
          </p>
        </div>
        <div className="img-box-2" data-aos="fade-up">
          <img src={potrait} alt="faces social" />
        </div>
      </div>
    </div>
  );
}

export default Social;
