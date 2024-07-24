import Image from "next/image";
import "@/styles/home.css";

export default function Home() {
  return (
    <div className="hero-screen">
      <div className="hero-content">
        <h1>Code . Craft . Captivate</h1>
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