import Nav from "../components/TempNav.js";
import Hero from "../components/Hero.js";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="h-full">
        <Nav />
        <Hero />
        <Footer />
      </div>
    </>
  );
}
