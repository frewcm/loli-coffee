import { useState, useEffect } from "react";
import { heroImages } from "../../data/data";
import { motion } from "framer-motion";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);
  return (
    <section className="relative w-full h-screen">
      {heroImages.map((image, index) => (
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          key={image.id}
        >
          <img src={image.src} alt="" className="w-full h-full object-cover" />
          <div className="w-full h-full flex flex-col gap-4 items-center justify-center absolute bottom-0 left-0 p-4 bg-primary bg-opacity-50">
            <p className="w-11/12 md:w-9/12 lg:w-8/12 text-secondary font-sedan text-4xl text-center">
              {image.text1}
            </p>
            <button className="mt-4 px-4 py-2 text-sm border rounded border-secondary/80 font-nunito text-secondary/80 ">
              {image.text2}
            </button>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? "bg-secondary" : "bg-gray-400/70"
                  } cursor-pointer`}
                  onClick={() => handleIndicatorClick(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
