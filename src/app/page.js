import Home from "@/components/home/Home";
import "./page.module.css";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/contact/Contact";

export default function App() {
  return (
    <div className="main">
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
