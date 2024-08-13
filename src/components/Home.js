import Image from "next/image";
import "@/styles/home.css";
import { homeText } from "@/Utils/Constants";

export default function Home() {
  return(
    <div className="hero-screen">
      <div className="hero-content">
        <h1>{homeText.COMPANY_PROFILE_DATA}</h1>
      </div>       
      <Image
        src="/Images/HeroScreen.svg"
        alt="Hero Banner"
        fill
        style={{objectFit: 'cover'}}
        priority
      />   
    </div>
  );
}