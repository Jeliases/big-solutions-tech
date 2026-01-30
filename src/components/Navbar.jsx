import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const base =
    "text-sm font-semibold text-slate-700 hover:text-slate-900 transition";
  const active = "text-[color:var(--red)]";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="leading-tight">
          <div className="text-sm font-extrabold tracking-wide text-slate-900">
            BIG SOLUTIONS{" "}
            <span className="text-[color:var(--red)]">& TECHNOLOGY</span>
          </div>
          <div className="text-xs text-slate-600">Soluciones digitales • Perú</div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" end className={({ isActive }) => `${base} ${isActive ? active : ""}`}>
            Inicio
          </NavLink>
          <NavLink to="/nosotros" className={({ isActive }) => `${base} ${isActive ? active : ""}`}>
            Conócenos
          </NavLink>

        </nav>

        
      </div>
    </header>
  );
}
