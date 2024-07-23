export default function LocationOne() {
  return (
    <section className="w-full">
      <div className="w-10/12 mx-auto h-96 flex flex-col items-center justify-center">
        <p className="my-6 font-sedan text-3xl">Locations</p>
        <p className="my-4 font-sedan text-2xl text-center">
          Loli's coffee and pastry has the best coffee selection day-to-day of
          any shop in the city, showcasing coffees from a variety of esteemed
          roasters around Addis Ababa.
        </p>
      </div>
      <div className="relative w-full min-h-screen">
        <img className="absolute w-full h-full" src="location.jpg" alt="" />
        <div className="bg-secondary w-72 h-72">sjdfksfjk</div>
      </div>
      <hr className="my-16 w-full h-[0.5px] bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="relative w-full min-h-screen">
        <img className="absolute w-full h-full" src="location.jpg" alt="" />
      </div>
      <hr className="my-16 w-full h-[0.5px] bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="relative w-full min-h-screen">
        <img className="absolute w-full h-full" src="location.jpg" alt="" />
      </div>
    </section>
  );
}
