import { useState } from "react";
import emailjs from "@emailjs/browser";

const CONTACT = {
  whatsappNumber: "51902674883",
};

const EMAILJS = {
  serviceId: "service_x9zn709",
  templateIdAdmin: "template_mr4eqbt",
  templateIdClient: "template_qvy0tzr",
  publicKey: "BO_kWzwpeAyHMDi7f",
};

export default function Contacto() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    sending: false,
    ok: false,
    error: "",
  });

  const waHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    `Hola, soy ${form.name}. Mi correo es ${form.email}. ${form.message}`
  )}`;

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ sending: true, ok: false, error: "" });

    try {
      // 1) Correo para TI (admin)
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateIdAdmin,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        { publicKey: EMAILJS.publicKey }
      );

      // 2) Correo de agradecimiento al CLIENTE
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateIdClient,
        {
          to_email: form.email,
          from_name: form.name,
          message: form.message,
          reply_to: "contacto@bigsolutions.tech",
        },
        { publicKey: EMAILJS.publicKey }
      );

      window.open(waHref, "_blank", "noreferrer");

      setStatus({ sending: false, ok: true, error: "" });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus({
        sending: false,
        ok: false,
        error:
          "No se pudo enviar el correo automático. El contacto por WhatsApp sigue disponible.",
      });

      window.open(waHref, "_blank", "noreferrer");
    }
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Contáctanos</h1>

      <form onSubmit={onSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={onChange}
          required
          className="w-full rounded-lg border px-4 py-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={form.email}
          onChange={onChange}
          required
          className="w-full rounded-lg border px-4 py-3"
        />

            <input
          type="tel"
          name="telefono"
          placeholder="telefono"
          value={form.telefono}
          onChange={onChange}
          required
          className="w-full rounded-lg border px-4 py-3"
        />

        <textarea
          name="message"
          placeholder="Mensaje"
          value={form.message}
          onChange={onChange}
          required
          className="w-full rounded-lg border px-4 py-3 min-h-[120px]"
        />

        <button
          type="submit"
          disabled={status.sending}
          className="w-full rounded-lg bg-red-600 text-white py-3 font-semibold"
        >
          {status.sending ? "Enviando..." : "Enviar y cotizar"}
        </button>

        {status.ok && (
          <p className="text-green-600 text-sm">
            Mensaje enviado correctamente.
          </p>
        )}

        {status.error && (
          <p className="text-red-600 text-sm">{status.error}</p>
        )}
      </form>
    </div>
  );
}
