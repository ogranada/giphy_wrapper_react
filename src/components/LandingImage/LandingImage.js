import image from "./image.svg";
import './LandingImage.scss';

function LandingImage() {
  return (
    <div className="landingimage">
      <img
        className="landingimage-img"
        src={image}
        alt="Video"
      />
    </div>
  )
}

export default LandingImage;
