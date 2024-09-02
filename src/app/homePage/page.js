import Image from "next/image";
import "@/styles/home.css";
import { HOME_PAGE_TEXT } from "@/helper/constants";

export default function Home() {
  return(
    <div className="hero-screen">
      <div className="hero-content">
        <h1>{HOME_PAGE_TEXT}</h1>
      </div>       
      <Image
        src="/media/images/heroimg.svg"
        alt="Hero Banner"
        fill
        style={{objectFit: 'cover'}}
        priority
      />   
    </div>
  );
}