import { FaPhone } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export default function ContactOne() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-end">
      <img
        className="z-[-1] absolute w-full h-full object-cover"
        src="contact-map.jpeg"
        alt=""
      />
      <div className="hidden mr-20 w-72 h-80 md:flex flex-col gap-4 items-center justify-center bg-secondary rounded-lg shadow-xl drop-shadow-2xl">
        <div className="flex gap-2">
          <FaPhone className="text-primary" size={25} />
          <p className="text-primary text-lg font-nunito">+251911879388</p>
        </div>
        <div className="flex gap-2">
          <FaGlobe className="text-primary" size={25} />
          <p className="text-primary text-lg font-nunito">
            loliscoffee@gmail.com
          </p>
        </div>
        <div className="text-2xl text-primary font-sedan">Follow Us</div>
        <div className="flex gap-2">
          <FaFacebookSquare className="text-blue-500" size={25} />
          <FaLinkedin className="text-blue-500" size={25} />
          <FaFacebookSquare className="text-blue-500" size={25} />
          <FaLinkedin className="text-blue-500" size={25} />
        </div>
      </div>
    </section>
  );
}
