export default function Hero() {
  return (
    <div
      className="max-w-4xl mb-32 mx-auto relative pt-40 lg:pt-48 px-5 text-white"
      style={{ fontFamily: "Andika" }}
    >
      <h2
        className="text-6xl md:text-8xl"
        // style={{ fontFamily: "Caveat Brush" }}
        style={{
          textShadow: "2px 4px 3px rgba(0,0,0,0.1)",
          backgroundImage:
            "linear-gradient(0deg,transparent 12px,#FDE046 13px,#FDE046 22px,transparent 23px,transparent)",
          fontFamily: "Caveat Brush",
          display: "inline",
        }}
      >
        Congee Club Kids Blog
      </h2>
      <p
        className="text-xl w-4/6 font-bold pt-4"
        style={{ textShadow: "1px 1px rgba(0,0,0,0.1)" }}
      >
        Community update and things such as this. lsjd flsjd flksjdf lksjd
        flksjd flksj dflksd jflsdkjf{" "}
      </p>
    </div>
  );
}
