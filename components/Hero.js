import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <div className="" style={{ backgroundColor: "#97FFE5", height: "600px" }}>
        <div
          className="flex justify-center items-center"
          style={{ height: "600px" }}
        >
          <div className="w-1/2 border-4 ">
            <div className="flex justify-center items-center flex-col text-9xl">
              <p>Congee</p>
              <p>Club Kids</p>
            </div>
            <div className="text-4xl flex justify-center border-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-yellow-300 rounded-3xl  p-4 w-64"
              >
                Button
              </motion.button>
            </div>
          </div>

          <div className="w-1/2 flex justify-center items-center">
            Section 2
          </div>
        </div>
      </div>
    </>
  );
}
