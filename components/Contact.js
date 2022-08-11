import ContactForm from "./Form";

export default function Contact() {
  return (
    <div
      style={{ backgroundColor: "#97FFE5" }}
      className="flex justify-center items-center"
    >
      <div>
        <h2 className="text-4xl">Contact Us:</h2>
        <ContactForm />
      </div>
    </div>
  );
}
