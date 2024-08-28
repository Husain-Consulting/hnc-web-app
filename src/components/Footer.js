import "@/styles/footer.css";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="/media/logo/logo.svg" alt="Logo" className="logo" />

        <div className="nav-social">

        <nav className="navigations">
        
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/About">About</Link>
            </li>
            <li>
              <Link href="/Services">Services</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>

       

        <div className="social-media">
        <span>Connect</span>
          <div className="icons">
            <ul>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="ri-instagram-line"></i>
                  
                </a>
              </li>

              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <i className="ri-twitter-line"></i>
                  
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="ri-facebook-line"></i>
                  
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="ri-linkedin-line"></i>
                  
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        </div>
      </div>
      <p>© Husain Consulting 2024 | All rights reserved.</p>
    </footer>
  );
}
