import { coffeeList } from "../../data/data";

export default function WelcomeOne() {
  return (
    <section className="py-14 w-full">
      <div className="w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {coffeeList.map((coffee, index) => (
          <div
            className="relative w-full h-96 rounded flex items-end justify-center"
            key={index}
          >
            <img
              className="absolute z-[-1] w-full h-full object-cover rounded-t"
              src={coffee.src}
              alt=""
            />
            <div className="absolute w-full h-full bg-primary/40 z-[-1]"></div>
            <button className="z-10 mb-10 text-secondary px-6 py-2 border border-secondary rounded">
              {coffee.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
