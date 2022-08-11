import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  const date = new Date();
  return (
    <div className="fixed bottom-0 flex justify-around w-full">
      <AiFillFacebook></AiFillFacebook>
      <AiFillInstagram></AiFillInstagram>
      <div>&copy; {date.getYear() + 1900} Congee Club Kids</div>
    </div>
  );
}
