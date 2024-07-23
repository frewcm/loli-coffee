import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Welcome from "./components/welcome/Welcome";
import Footer from "./components/Footer";
import Locations from "./components/location/Location";

function App() {
  return (
    <main className="relative">
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/location" element={<Locations />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
