import { motion } from "framer-motion";
import steamer from "./dim-sum-steamer.png";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="" style={{ backgroundColor: "#97FFE5", height: "600px" }}>
        <div
          className="md:flex justify-center items-center border-8"
          style={{ height: "600px" }}
        >
          <div className="md:w-1/2">
            <div className="flex justify-center items-center flex-col text-4xl md:text-9xl">
              <h2>Congee</h2>
              <p>Club Kids</p>
            </div>
            <div className="text-2xl md:text-4xl flex justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-yellow-300 rounded-3xl  p-4 w-64"
              >
                Button
              </motion.button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center items-center">
            <Image
              src={steamer}
              height="150px"
              width="150px"
              alt="steamer basket"
            />
          </div>
        </div>
      </div>
    </>
  );
}
