import "@/styles/footer.css";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import {
  NAVIGATION_ITEMS,
  COPYRIGHT_FOOTER_TEXT,
} from "@/utils/footerConstants";
import { SOCIAL_ITEMS, SOCIAL_TEXT } from "@/utils/socialConstants";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="/media/logo/logo.svg" alt="Logo" className="logo" />

        <div className="nav-social">
          <nav className="navigations">
            <ul>
              {NAVIGATION_ITEMS.map((item, key) => (
                <li key={key}>
                  <Link href={item.path}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="social-media">
            <span>{SOCIAL_TEXT}</span>
            <div className="icons">
              <ul>
                {SOCIAL_ITEMS.map((social, key) => (
                  <li key={key}>
                    <a
                      href={social.socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.socialName}
                    >
                      <div className="social-icons">
                        <img src={social.socialIcon} alt="" />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-lower">{COPYRIGHT_FOOTER_TEXT}</div>
    </footer>
  );
}
