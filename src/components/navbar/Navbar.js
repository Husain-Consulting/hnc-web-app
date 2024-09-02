import React from "react";
import Link from "next/link";
import "@/styles/navbar.css";
import { NAVIGATION_ITEMS } from "@/helper/footerConstants";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link href="/" className="logo">
          <img src="/media/logo/logo.svg" alt="logo" />
        </Link>
        <ul>
          {NAVIGATION_ITEMS.map((item) => (
            <li>
              <Link href={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
