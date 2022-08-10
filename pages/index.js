import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav.js";
import Hero from "../components/Hero.js";
import About from "../components/About.js";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Contact />
    </div>
  );
}
