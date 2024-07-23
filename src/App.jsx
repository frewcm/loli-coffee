import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <main className="relative">
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </main>
  );
}

export default App;
