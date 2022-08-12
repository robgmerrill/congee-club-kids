import ContactForm from "./Form";

export default function Contact() {
  return (
    <div
      style={{ backgroundColor: "#97FFE5", height: "100vw" }}
      className="flex justify-center pt-24"
    >
      <div>
        <h2 className="text-4xl">Contact Us:</h2>
        <ContactForm />
      </div>
    </div>
  );
}
