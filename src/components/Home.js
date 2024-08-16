import Image from "next/image";
import "@/styles/home.css";
import { homeText } from "@/Utils/Constants";

export default function Home() {
  return(
    <div className="hero-screen">
      <div className="hero-content">
        <h1>{homeText.HOME_PAGE_TEXT}</h1>
      </div>       
      <Image
        src="/Images/HeroImg.svg"
        alt="Hero Banner"
        fill
        style={{objectFit: 'cover'}}
        priority
      />   
    </div>
  );
}