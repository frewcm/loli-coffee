import ContactOne from "./ContactOne";
import ContactTwo from "./ContactTwo";

export default function Contact() {
  return (
    <section>
      <div className="w-10/12 mx-auto min-h-96 flex flex-col items-center justify-center">
        <p className="my-6 font-sedan text-3xl">Get In Touch</p>
        <p className="my-4 font-sedan text-2xl text-center">
          Contact us for any inquiries or updates on our coffee and pastries.
          We're here to ensure your perfect café experience.
        </p>
      </div>
      <ContactOne />
      <ContactTwo />
    </section>
  );
}
