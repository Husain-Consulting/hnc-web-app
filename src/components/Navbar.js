import React from "react";
import Link from "next/link";
import "@/styles/navbar.css";

export default function Navbar() {
  return(
    <nav className="navbar">
      <div className="navbar-content">
        <Link href="/" className="logo">
          <img src="/Images/Logo.svg" alt="logo" />
        </Link>
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
      </div>
    </nav>
  );
}