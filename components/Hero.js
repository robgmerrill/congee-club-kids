import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <div className="" style={{ backgroundColor: "#97FFE5", height: "600px" }}>
        <div
          className="flex justify-center items-center"
          style={{ height: "600px" }}
        >
          <div className="w-1/2 text-6xl">
            <div>
              <p>Congee</p>
              <p>Club Kids</p>
            </div>
            <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-yellow-400 rounded-3xl w-56"
              >
                Button
              </motion.button>
            </div>
          </div>

          <div className="">Section 2</div>
        </div>
      </div>
    </>
  );
}
