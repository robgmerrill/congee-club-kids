import "../styles/globals.css";
import "../components/nprogress.css";

import { ThemeProvider } from "../lib/ThemeContext";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import NProgress from "nprogress";
import Router from "next/router";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="h-auto" style={{ backgroundColor: "#97FFE5" }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
