import { useState } from "react";
import { heroImages } from "../../data/data";
import { useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);
  return (
    <section className="relative w-full h-screen">
      {heroImages.map((image, index) => (
        <div
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          key={image.id}
        >
          <img src={image.src} alt="" className="w-full h-full object-cover" />
          <div className="w-full h-full flex flex-col gap-4 items-center justify-center absolute bottom-0 left-0 p-4 bg-black bg-opacity-50">
            <p className="w-11/12 md:w-9/12 lg:w-8/12 text-white font-sedan text-4xl text-center">
              {image.text1}
            </p>
            <button className="mt-4 px-4 py-2 text-sm border rounded border-white/80 font-nunito text-white/80 ">
              {image.text2}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
