import Image from "next/image";
import "@/styles/home.css";
import { HOME_PAGE_TEXT } from "@/utils/homeConstants";
import Home from "@/components/home/Home";

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
