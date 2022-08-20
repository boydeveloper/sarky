import phone from '../../assets/icon-1.png';
import bell from '../../assets/icon-2.png';
import hands from '../../assets/icon-3.png';
import './features.css';
function Features() {
  return (
    <div className="container">
      <div className="features-grid margin-bottom">
        <h2 className="heading-primary" data-aos="fade-up">
          Take the lead in smartly social media marketing
        </h2>
        <div className="features-summary" data-aos="fade-up">
          We offer some special services through which you can easily complete
          the marketing work on social media. Which helps increase your lead and
          sales.
        </div>
      </div>
      <div className="grid-3-cols " data-aos="fade-up">
        <div className="card">
          <img src={bell} alt="card illustration" />

          <h3 className="card-heading">Social Media Strategy</h3>
          <p className="card-summary">
            A social media strategy is a summary of everything you plan to do
            and hope to achieve on social media.
          </p>
          <span className="card-cta">Discover More &rarr;</span>
        </div>
        <div className="card">
          <img src={hands} alt="card illustration" />

          <h3 className="card-heading">Digital Marketing Plan</h3>
          <p className="card-summary">
            Digital marketing is important because it connects a business with
            its customers & is effective in all industries.
          </p>
          <span className="card-cta">Discover More &rarr;</span>
        </div>
        <div className="card card-3">
          <img src={phone} alt="card illustration" />

          <h3 className="card-heading">Search Engine Optimization</h3>
          <p className="card-summary">
            Search engine optimization (SEO) is the art and science of getting
            pages to rank higher in search engines.
          </p>
          <span className="card-cta">Discover More &rarr;</span>
        </div>
      </div>
    </div>
  );
}

export default Features;
