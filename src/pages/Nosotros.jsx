import { Link } from "react-router-dom";

import jorgeImg from "../assets/jorge.jpg";
import indiraImg from "../assets/indira.jpg";
import takaImg from "../assets/ronaldo.jpg";
import yolandaImg from "../assets/yolanda.jpg";
import tuImg from "../assets/tu.jpg";



const TEAM = [
  {
    name: "Jorge Luis Elias Estrada",
    role: "Founder / Developer & Product Owner",
    bio: "Impulsa la visión del producto, define el enfoque técnico y asegura entregables con calidad y claridad.",
    photo: jorgeImg,
  },
  {
    name: "Indira",
    role: "Marketing / Project Manager",
    bio: "Diseña interfaces limpias y consistentes, cuidando experiencia y conversión desde el primer clic.",
    photo: indiraImg,
  },
  {
    name: "Ronaldo",
    role: "Full Stack Developer / DBA  (Database Administrator)",
    bio: "Construye sistemas y APIs con buenas prácticas, manteniendo seguridad, rendimiento y escalabilidad.",
    photo: takaImg,
  },
  {
    name: "Yolanda ",
    role: "Diseño y Marketing Digital",
    bio: "Estrategia, campañas y contenido orientado a resultados para atraer clientes y aumentar conversiones.",
    photo:
      yolandaImg,},
  {
    name: "Puedes ser tú",
    role: "Colaborador(a)",
    bio: "Buscamos personas con criterio, responsabilidad y ganas de construir. Si conectas con la visión, conversemos.",
    photo: tuImg,
    highlight: true,
  },
];

function TeamCard({ member }) {
  return (
    <div
      className={`rounded-3xl bg-white/85 border border-black/5 shadow-sm overflow-hidden lift ${
        member.highlight ? "ring-1 ring-[color:var(--red)]/25" : ""
      }`}
    >
      <div className="h-44 overflow-hidden">
        <img
          src={member.photo}
          alt={member.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-sm font-extrabold text-slate-900">{member.name}</h3>
          <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--red)]" />
        </div>
        <div className="mt-1 text-xs font-semibold text-[color:var(--red-dark)]">
          {member.role}
        </div>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
}

export default function Nosotros() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-14 fade-up">
      <div className="rounded-3xl bg-white/70 border border-black/5 shadow-md p-8 md:p-10">
        <p className="text-xs tracking-widest uppercase text-slate-600">Conócenos</p>

        <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
          Personas construyendo tecnología con criterio
        </h1>

        <p className="mt-4 text-slate-700 leading-relaxed max-w-3xl">
          BIG SOLUTIONS & TECHNOLOGY nace para transformar ideas en productos digitales sólidos,
          bien diseñados y listos para crecer. Somos un equipo multidisciplinario que combina
          desarrollo, diseño y visión de negocio. Trabajamos con comunicación clara, entregas
          responsables y foco en resultados.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white border border-black/5 p-5 shadow-sm lift">
            <div className="text-sm font-extrabold text-slate-900">Misión</div>
            <div className="mt-2 text-sm text-slate-600 leading-relaxed">
              Construir soluciones digitales que mejoren procesos y generen crecimiento real.
            </div>
          </div>
          <div className="rounded-2xl bg-white border border-black/5 p-5 shadow-sm lift">
            <div className="text-sm font-extrabold text-slate-900">Visión</div>
            <div className="mt-2 text-sm text-slate-600 leading-relaxed">
              Ser una referencia en soluciones tecnológicas con diseño premium y ejecución responsable.
            </div>
          </div>
          <div className="rounded-2xl bg-white border border-black/5 p-5 shadow-sm lift">
            <div className="text-sm font-extrabold text-slate-900">Valores</div>
            <div className="mt-2 text-sm text-slate-600 leading-relaxed">
              Claridad, calidad, compromiso y mejora continua.
            </div>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-extrabold text-slate-900">Equipo</h2>
        <p className="mt-2 text-slate-700 leading-relaxed">
          Este es el equipo base. Si quieres formar parte, la puerta está abierta.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-slate-700">
            ¿Listo para cotizar o consultar? En Contáctanos puedes enviar tu mensaje.
          </p>
          <Link
            to="/contacto"
            className="btn-primary inline-flex rounded-xl bg-[color:var(--red)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[color:var(--red-dark)]"
          >
            Ir a Contáctanos
          </Link>
        </div>
      </div>
    </div>
  );
}
