import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Welcome from "./components/welcome/Welcome";
import Footer from "./components/Footer";
import Locations from "./components/location/Location";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <main className="relative">
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/location" element={<Locations />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
