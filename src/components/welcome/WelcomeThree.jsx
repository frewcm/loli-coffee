import { FaArrowRightLong } from "react-icons/fa6";

export default function WelcomeThree() {
  return (
    <section className="w-full min-h-80 pb-10">
      <div className="w-10/12 mx-auto flex flex-col items-center justify-center gap-3">
        <img className="w-24" src="loli-logo.png" alt="" />
        <p className="font-sedan text-2xl text-primary text-center">
          Step in and experience the art of our coffee and pastries!
        </p>
        <button className="py-2 px-4 rounded text-secondary bg-primary">
          Join Us
        </button>
      </div>
    </section>
  );
}
