import Nav from "../components/TempNav.js";
import Hero from "../components/Hero.js";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar.js";

export default function Home() {
  return (
    <div className="h-full">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
