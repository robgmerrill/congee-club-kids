import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Nav from "../components/TempNav";
import TempNav from "../components/TempNav";

export default function ContactPage() {
  return (
    <div className="border h-max">
      <TempNav />
      <div className="h-2/3">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
