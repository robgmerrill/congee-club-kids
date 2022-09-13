import { RiFacebookCircleLine, RiInstagramLine } from "react-icons/ri";
import Link from "next/link";

export default function Footer() {
  const date = new Date();
  return (
    <div className="fixed bottom-0 flex justify-center items-center w-full h-16 b-4 bg-white space-x-4">
      <div className="text-black">
        &copy; {date.getYear() + 1900} Congee Club Kids
      </div>

      <Link href="https://www.facebook.com/congeeclubkids">
        <RiFacebookCircleLine
          size={40}
          color="#4267B2"
          style={{ cursor: "pointer" }}
        ></RiFacebookCircleLine>
      </Link>
      <Link href="https://www.instagram.com/congeeclubkids/">
        <RiInstagramLine
          size={40}
          color="#8a3ab9"
          style={{ cursor: "pointer" }}
        ></RiInstagramLine>
      </Link>
    </div>
  );
}
