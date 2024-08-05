import Image from "next/image";
import "@/styles/home.css";
import { homeText } from "./Text";

export default function Home() {
  return(
    <div className="hero-screen">
      <div className="hero-content">
        <h1>{homeText.heroText}</h1>
      </div>       
      <Image
        src="/Images/HeroScreen.jpg"
        alt="Hero Banner"
        fill
        style={{objectFit: 'cover'}}
        priority
      />   
    </div>
  );
}