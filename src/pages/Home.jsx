import { Link } from "react-router-dom";

const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1800&q=80",
  team:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80",
};

function Stat({ title, desc }) {
  return (
    <div className="rounded-2xl bg-white/80 border border-black/5 p-5 shadow-sm lift">
      <div className="text-sm font-bold text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600 leading-relaxed">{desc}</div>
    </div>
  );
}

function ServiceCard({ title, desc }) {
  return (
    <div className="rounded-2xl bg-white/85 border border-black/5 p-6 shadow-sm lift">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-extrabold text-slate-900">{title}</h3>
        <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--red)]" />
      </div>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="fade-up">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs tracking-widest uppercase text-slate-600">
              Tecnología con visión de negocio
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              BIG SOLUTIONS{" "}
              <span className="text-[color:var(--red)]">& TECHNOLOGY</span>
            </h1>

            <p className="mt-5 text-slate-700 leading-relaxed max-w-xl">
              Creamos aplicaciones, sistemas y experiencias digitales que se sienten modernas,
              funcionan rápido y ayudan a vender, optimizar procesos y escalar operaciones.
              Nuestro enfoque es simple: claridad, calidad y resultados.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contacto"
                className="btn-primary inline-flex justify-center rounded-xl bg-[color:var(--red)] px-6 py-3 text-sm font-semibold text-white hover:bg-[color:var(--red-dark)]"
              >
                Cotizar proyecto
              </Link>
              <Link
                to="/nosotros"
                className="inline-flex justify-center rounded-xl border border-black/10 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-white transition"
              >
                Conócenos
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Stat title="Diseño" desc="Interfaces limpias y amigables, pensadas para convertir." />
              <Stat title="Desarrollo" desc="Código sólido, escalable y fácil de mantener." />
              <Stat title="Crecimiento" desc="Marketing y automatización para impulsar resultados." />
            </div>
          </div>

          <div className="rounded-3xl bg-white/75 border border-black/5 shadow-md overflow-hidden">
            <img
              src={IMAGES.hero}
              alt="Tecnología"
              className="h-[340px] w-full object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <p className="text-sm text-slate-700 leading-relaxed">
                Nos involucramos con criterio: entendemos tu objetivo, proponemos lo correcto y lo construimos bien.
                Sin complicarte el proceso.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {["Software", "Apps", "Web", "UI/UX", "Branding", "Marketing"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[#FFF] border border-black/10 px-3 py-1 text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS (resumen) */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-3xl bg-white/70 border border-black/5 shadow-md p-8 md:p-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-slate-600">
                Qué hacemos
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Soluciones tecnológicas con estilo y enfoque
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Desarrollo de software, diseño y marketing para marcas que quieren verse bien y funcionar mejor.
                Todo con una experiencia simple, ordenada y profesional.
              </p>

              <div className="mt-6 rounded-2xl overflow-hidden border border-black/5 shadow-sm">
                <img
                  src={IMAGES.team}
                  alt="Equipo"
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <ServiceCard
                title="Desarrollo Web y Sistemas"
                desc="Landing pages, sitios corporativos y sistemas a medida."
              />
              <ServiceCard
                title="Aplicaciones Móviles"
                desc="Apps modernas con experiencia clara y arquitectura sólida."
              />
              <ServiceCard
                title="Diseño UI/UX"
                desc="Prototipos y diseño de interfaces que se sienten premium."
              />
              <ServiceCard
                title="Marketing y Branding"
                desc="Identidad visual y estrategias para captar y convertir."
              />
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-slate-700">
              Si quieres conocer al equipo y cómo trabajamos, visita Conócenos.
            </p>
            <Link
              to="/nosotros"
              className="inline-flex rounded-xl border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-[#FFF7F2] transition"
            >
              Ir a Conócenos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
