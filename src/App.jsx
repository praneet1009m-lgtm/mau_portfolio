import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Hero = lazy(() => import("./pages/Hero"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/contact"));

import BackgroundMusic from "./components/BackgroundMusic";

function App() {
  return (
    <BrowserRouter>

      <BackgroundMusic />

      <Suspense fallback={<main className="min-h-screen bg-orange-300" />}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

    </BrowserRouter>
  );
}

export default App;
