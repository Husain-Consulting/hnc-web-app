import "@/styles/about.css";

export default function About() {
  return (
    <div className="about-main">
      <div className="about-upper">
        <div className="about-logo">
          <img src="/Images/LOGO.png" alt="logo" />
        </div>
        <div className="about-txt">
          <div className="about-heading">
            <span>KNOW MORE</span>
            <hr />
          </div>
          <p>
            Empowering businesses through innovative digital solutions. Crafting
            stunning websites, intuitive mobile apps, and robust custom
            software. Experts in driving growth and success with cutting-edge
            technology and user-centric designs."
          </p>
        </div>
      </div>

      <div className="about-down">
        <div className="images">
            <div className="image-1">
            <img src="/Images/image1.jpg" alt="image1" />
            </div>
            <div className="image-2">
                <div className="image-up">
                <img src="/Images/image2.jpg" alt="image2" />
                </div>
                <div className="image-down">
                <img src="/Images/image3.jpg" alt="image3" />
                </div>
            </div>
        </div>
        
        <div className="description">
            <p>
            <span>Our purpose</span> is to empower businesses by harnessing the transformative power of innovative digital solutions. We are dedicated to crafting stunning websites, intuitive mobile apps, and robust custom software that not only captivate users but also drive growth and success. Our team of experts combines cutting-edge technology with user-centric designs, ensuring that every digital experience we create is tailored to meet the unique needs of our clients. We are committed to pushing boundaries and delivering solutions that elevate businesses, enabling them to thrive in the ever-evolving digital landscape."
            </p>
        </div>

      </div>
    </div>
  );
}
