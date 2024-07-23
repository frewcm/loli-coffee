export default function WelcomeTwo() {
  return (
    <section className="pb-14 w-full text-primary">
      <div className="w-10/12 mx-auto flex flex-col justify-center">
        <p className="pb-4 w-11/12 mx-auto font-sedan text-4xl text-center">
          Community-crafted coffee: Freshly roasted, smooth, creamy every time.
        </p>
        <p className="w-11/12 mx-auto font-nunito text-lg text-center leading-8">
          Loli Coffee is a small startup coffee house that builds its brand on
          the people who raised them, the community that nurtured them, and the
          spirit of togetherness. We understand that great coffee requires great
          care, which is why our brews are prepared using only the finest
          methods. Our beans are always freshly roasted to ensure a smooth and
          creamy cup of coffee every time.
        </p>

        <div className="my-8 relative w-full min-h-72 rounded-lg  flex flex-col items-center justify-center">
          <img
            className="absolute rounded-lg w-full h-full object-cover z-[-1]"
            src="building.jpg"
            alt=""
          />
          <div className="absolute w-full h-full bg-primary/50 rounded-lg z-[-1]"></div>
          <p className="w-10/12 mx-auto text-secondary text-center font-sedan text-md md:text-xl">
            Our coffee and pastry shops, located around Lebu Mebrat Hail, offer
            cozy and welcoming atmospheres. We pride ourselves on providing the
            best experiences with fresh, delicious pastries and expertly brewed
            coffee.
          </p>
          <button className="my-2 px-4 md:px-6 py-2 border text-secondary border-secondary/95 text-xs md:text-sm rounded">
            Find your nearest Loli's Coffee and Pastry
          </button>
        </div>
      </div>
      <hr className="my-4 w-full h-[0.5px] bg-gray-200 border-0 dark:bg-gray-700" />
    </section>
  );
}
