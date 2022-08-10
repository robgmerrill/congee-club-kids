import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/TempNav.js";
import Hero from "../components/Hero.js";
import About from "../components/About.js";
import Contact from "../components/Contact";
import { motion, useScroll } from "framer-motion";
import Footer from "../components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="h-full">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="progress-bar"
        />
        <Nav />
        <Hero />
        <Footer />
      </div>
    </>
  );
}
