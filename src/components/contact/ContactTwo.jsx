export default function ContactTwo() {
  return (
    <section className="w-full min-h-96">
      <div className="w-11/12 md:w-10/12 mx-auto h-full">
        <form
          className="py-12 w-full h-full flex flex-col items-start gap-2"
          action=""
        >
          <input
            className=" bg-secondary pl-2 pt-1 rounded w-full h-12 border border-primary/80 focus:outline-none placeholder:text-primary placeholder:font-nunito text-sm"
            type="text"
            placeholder="Name"
          />
          <input
            className="bg-secondary pl-2 pt-1 rounded w-full h-12 border border-primary/80 focus:outline-none placeholder:text-primary placeholder:font-nunito text-sm"
            type="email"
            placeholder="Email"
          />
          <textarea
            className="bg-secondary pl-2 pt-1 rounded w-full h-36 border border-primary/80 focus:outline-none placeholder:text-primary placeholder:font-nunito text-sm"
            name=""
            id=""
            placeholder="Message"
          ></textarea>
          <div className="mt-2 w-full flex items-center justify-center">
            <button className="text-md font-bold text-secondary bg-primary rounded px-6 py-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
