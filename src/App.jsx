import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Contacto from "./pages/Contacto.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Manchas de color suaves para “vida” */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-rose-300/30 blur-3xl" />
        <div className="absolute top-40 right-[-12rem] h-80 w-[42rem] rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[-12rem] h-80 w-[42rem] rounded-full bg-red-300/20 blur-3xl" />
      </div>

      <Navbar />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
