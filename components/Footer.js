import { RiFacebookCircleLine, RiInstagramLine } from "react-icons/ri";

export default function Footer() {
  const date = new Date();
  return (
    <div className="fixed bottom-0 flex justify-around items-center w-full h-16 b-4 bg-white">
      <RiFacebookCircleLine size={40} color="#4267B2"></RiFacebookCircleLine>
      <RiInstagramLine size={40} color="#8a3ab9"></RiInstagramLine>
      <div>&copy; {date.getYear() + 1900} Congee Club Kids</div>
    </div>
  );
}
