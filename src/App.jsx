import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/contact";

import BackgroundMusic from "./components/BackgroundMusic";

function App() {
  return (
    <BrowserRouter>

      <BackgroundMusic />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;