import Home from "@/components/Home";
import "./page.module.css";
import About from "@/components/about/About";
import Services from "@/components/Services";
import Footer from "@/components/footer/Footer";

export default function App() {
  return (
    <div className="main">
      <Home />
      <About />
      <Services/>
      <Footer />
    </div>
  );
}
