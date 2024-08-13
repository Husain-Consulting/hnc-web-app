import about from "@/styles/about.css";
import { aboutText } from "@/Utils/Constants";

export default function About() {
  return (
    <div className="about-main">
      <div className="about-upper">
        <div className="about-logo">
          <img src="/Images/LOGO.svg" alt="logo" />
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
            <img src="/Images/image1.svg" alt="image1" />
            </div>
            <div className="image-2">
                <div className="image-up">
                <img src="/Images/image2.svg" alt="image2" />
                </div>
                <div className="image-down">
                <img src="/Images/image3.svg" alt="image3" />
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
