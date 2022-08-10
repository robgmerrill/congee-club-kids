export default function Footer() {
  const date = new Date();
  return (
    <>
      <div>Facebook</div>
      <div>Instagram</div>
      <div>&copy; {date.getYear() + 1900} Congee Club Kids</div>
    </>
  );
}
