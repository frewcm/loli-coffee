import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LocationOne() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const md = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section className="z-10 w-full">
      <div
        ref={container}
        className="w-10/12 mx-auto min-h-96 flex flex-col items-center justify-center"
      >
        <p className="my-6 font-sedan text-3xl">Locations</p>
        <p className="my-4 font-sedan text-2xl text-center">
          Loli's coffee and pastry has the best coffee selection day-to-day of
          any shop in the city, showcasing coffees from a variety of esteemed
          roasters around Addis Ababa.
        </p>
      </div>
      <div className="relative overflow-hidden w-full h-screen flex items-start justify-start">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="z-[-1] absolute object-cover  w-full h-full"
          src="location.jpg"
          alt=""
        />
        <motion.div
          style={{ y: sm }}
          className="z-10 ml-6 md:ml-16 bg-secondary w-80 h-80 rounded flex flex-col items-start justify-center"
        >
          <p className="ml-6 font-sedan  text-3xl">General Location</p>
          <p className="ml-6 mt-4 font-nunito text-nunito text-lg">
            Specific Location
          </p>
          <p className="ml-6 mb-4 font-nunito text-nunito text-lg">
            Time the shop is open.
          </p>
          <button className="ml-6 mt-4 text-secondary bg-primary text-center font-nunito px-4 py-2 hover:animate-pulse transition easy-in-out">
            Get Direction
          </button>
        </motion.div>
      </div>
      <motion.div
        style={{ y: md }}
        className="w-full bg-secondary items-center justify-center"
      >
        <hr className="z-30 my-12 w-full h-[0.5px] bg-gray-200 border-0 dark:bg-gray-700" />
      </motion.div>
      <div className="relative overflow-hidden w-full h-screen flex items-start justify-start">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="z-[-1] absolute object-cover  w-full h-full"
          src="location.jpg"
          alt=""
        />
        <motion.div
          style={{ y: sm }}
          className="z-10 ml-6 md:ml-16 bg-secondary w-80 h-80 rounded flex flex-col items-start justify-center"
        >
          <p className="ml-6 font-sedan  text-3xl">General Location</p>
          <p className="ml-6 mt-4 font-nunito text-nunito text-lg">
            Specific Location
          </p>
          <p className="ml-6 mb-4 font-nunito text-nunito text-lg">
            Time the shop is open.
          </p>
          <button className="ml-6 mt-4 text-secondary bg-primary text-center font-nunito px-4 py-2 hover:animate-pulse transition easy-in-out">
            Get Direction
          </button>
        </motion.div>
      </div>
      <motion.div
        style={{ y: md }}
        className="w-full bg-secondary items-center justify-center"
      >
        <hr className="z-30 my-12 w-full h-[0.5px] bg-gray-200 border-0 dark:bg-gray-700" />
      </motion.div>
      <div className="relative overflow-hidden w-full h-screen flex items-start justify-start">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="z-[-1] absolute object-cover w-full h-full"
          src="location.jpg"
          alt=""
        />
        <motion.div
          style={{ y: sm }}
          className="z-10 ml-6 md:ml-16 bg-secondary w-80 h-80 rounded flex flex-col items-start justify-center"
        >
          <p className="ml-6 font-sedan  text-3xl">General Location</p>
          <p className="ml-6 mt-4 font-nunito text-nunito text-lg">
            Specific Location
          </p>
          <p className="ml-6 mb-4 font-nunito text-nunito text-lg">
            Time the shop is open.
          </p>
          <button className="ml-6 mt-4 text-secondary bg-primary text-center font-nunito px-4 py-2 hover:animate-pulse transition easy-in-out">
            Get Direction
          </button>
        </motion.div>
      </div>
    </section>
  );
}
