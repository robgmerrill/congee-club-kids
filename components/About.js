import styled from "styled-components";
import Image from "next/image";
import TestProfile from "./congee-club-test-profile.jpg";
import MarProfile from "./mar-profile.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="bg-yellow-300 block text-center"
      style={{ height: "500px" }}
      title="section1"
      id="about"
    >
      <div>Greetings from About</div>
      <div className="flex justify-around items-center h-96">
        <div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <h3>Sara</h3>
            <Image
              src={TestProfile}
              alt="Sara"
              height="360px"
              width="360px"
              className="rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>

        <div>
          <h3>Marissa</h3>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Image
              src={MarProfile}
              alt="Marissa Merrill"
              height="360px"
              width="360px"
              objectFit="contain"
              className="rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
