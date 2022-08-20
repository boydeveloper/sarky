import './promote.css';
import video from '../../assets/Image.png';
import { FaPlayCircle } from 'react-icons/fa';
function Promote() {
  return (
    <div className="container">
      <div className="grid-2-cols">
        <div className="promoteImg-box ">
          <img src={video} alt="social video" />
          <button className="play-btn">
            <FaPlayCircle className="promote-icon" />
            <div className="stroke"></div>
            <p>Watch a video</p>
          </button>
        </div>
        <div className="PromoteTextbox">
          <h2 className="heading-primary">
            The easiest way to promote social media
          </h2>
          <h4 className="promote-subheading">Build A Community</h4>
          <p className="promote-summary mb-sm">
            Community building is a field of practices directed toward the
            creation or enhancement of community among individuals.
          </p>

          <h4 className="promote-subheading">Video & Live Streaming</h4>
          <p className="promote-summary">
            Connect your audio and video sources. This involves on audio and
            video sources to your main live streaming setup.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Promote;
