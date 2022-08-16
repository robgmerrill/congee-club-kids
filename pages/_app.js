import "../styles/globals.css";
import { ThemeProvider } from "../lib/ThemeContext";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
      </div>
      <div className=" h-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
