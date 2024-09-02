import "@/styles/footer.css";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import { NAVIGATION_ITEMS, COPYRIGHT_FOOTER_TEXT } from "@/utils/footerConstants";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="/media/logo/logo.svg" alt="Logo" className="logo" />

        <div className="nav-social">
          <nav className="navigations">
            <ul>
              {NAVIGATION_ITEMS.map(item => <li>
                <Link href={item.path}>{item.text}</Link>
              </li>)}
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
      <p>{COPYRIGHT_FOOTER_TEXT}</p>
    </footer>
  );
}
