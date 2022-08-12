import Contact from "../components/Contact";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function ContactPage() {
  return (
    <div className="border h-max">
      <NavBar />
      <div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
