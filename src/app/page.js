import Home from "@/components/Home";
import "./page.module.css";
import About from "@/components/About";
import Services from "@/components/Services";

export default function App() {
  return (
    <div className="main">
      <Home />
      <About />
      <Services/>
    </div>
  );
}
