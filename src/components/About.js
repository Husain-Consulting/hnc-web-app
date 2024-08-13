import about from "@/styles/about.css";
import { aboutText } from "./Text";

export default function About() {
  return (
    <div className="about-main">
      <div className="about-upper">
        <div className="about-logo">
          <img src="/Images/HNC-Logo.svg" alt="logo" />
        </div>
        <div className="about-txt">
          <div className="about-heading">
            <span>{aboutText.aboutHeading}</span>
            <hr />
          </div>
          <p>{aboutText.about}</p>
        </div>
      </div>

      <div className="about-down">
        <div className="images">
            <div className="image-1">
            <img src="/Images/Image1.svg" alt="image1" />
            </div>
            <div className="image-2">
                <div className="image-up">
                <img src="/Images/Image2.svg" alt="image2" />
                </div>
                <div className="image-down">
                <img src="/Images/Image3.svg" alt="image3" />
                </div>
            </div>
        </div>
        
        <div className="description">
            <p>
            <span>Our purpose</span> {aboutText.aboutdescription}
            </p>
        </div>

      </div>
    </div>
  );
}
