export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="mx-auto max-w-7xl px-6 text-xs text-slate-600 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} BIG SOLUTIONS & TECHNOLOGY. Todos los derechos reservados.</div>
        <div className="text-slate-600">Perú</div>
      </div>
    </footer>
  );
}
