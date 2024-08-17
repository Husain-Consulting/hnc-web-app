import "@/styles/about.css";
import { aboutText } from "@/utils/constants";

export default function About() {
  return (
    <div className="about-main">
      <div className="about-upper">
        <div className="about-logo">
          <img src="/media/logo/logo.svg" alt="logo" />
        </div>
        <div className="about-txt">
          <div className="about-heading">
            <span>{aboutText.HEADING}</span>
            <hr />
          </div>
          <p>{aboutText.DESCRIPTION}</p>
        </div>
      </div>
      
      <div className="about-down">
        <div className="images">
          <div className="image-1">
            <img src="/media/images/image1.svg" alt="image1" />
          </div>
          <div className="image-2">
            <div className="image-up">
              <img src="/media/images/image2.svg" alt="image2" />
            </div>
            <div className="image-down">
              <img src="/media/images/image3.svg" alt="image3" />
            </div>
          </div>
        </div>
        
        <div className="description">
          <p>
            <span>Our purpose</span> {aboutText.SMALL_DESCRIPTION}
          </p>
        </div>
      </div>
    </div>
  );
}