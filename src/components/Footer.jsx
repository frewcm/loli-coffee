export default function Footer() {
  return (
    <section className="w-full bg-primary text-secondary font-nunito flex flex-col">
      <div className="w-11/12 md:w-10/12 mx-auto h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-md">
        <div className="mt-8 w-full h-full flex flex-col items-center justify-center gap-4">
          <p className="text-2xl font-sedan">Shop</p>
          <p className="text-sm">Coffee</p>
          <p className="text-sm">Pastry</p>
          <p className="text-sm">Coffe & Pastry</p>
        </div>
        <div className="mt-8 w-full h-full flex flex-col items-center justify-center gap-4">
          <p className="text-2xl font-sedan">Learn</p>
          <p className="text-sm">Our Story</p>
          <p className="text-sm">Locations</p>
          <p className="text-sm">Wholesale</p>
        </div>
        <div className="mt-8 w-full h-full flex flex-col items-center justify-center gap-4">
          <img className="w-28" src="logo-white.png" alt="" />
          <p className="text-2xl font-sedan">Connect with us</p>
          <p className="text-sm">loliscoffeshop@gmail.com</p>
        </div>
      </div>
      <div className="pt-10 pb-6 h-28 w-full text-secondary text-xs flex items-end justify-center gap-1">
        <p>&copy;</p>
        <p>Frew Befekadu. All rights reserved.</p>
      </div>
    </section>
  );
}
