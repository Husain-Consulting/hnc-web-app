import "@/styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="heading-btn">
          <div className="contact-heading">Get in touch with our experts!</div>
          <button className="contact-btn">Contact Us</button>
        </div>
        <img
          className="contact-img"
          src="/media/images/contact-img.svg"
          alt=""
        />
      </div>
    </div>
  );
}
