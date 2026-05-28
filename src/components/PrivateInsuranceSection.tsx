type Block = {
  title: string;
  body: React.ReactNode;
};

const blocks: Block[] = [
  {
    title: "🩺 Sanitas (Asistencia sanitaria + Plus dental)",
    body: (
      <>
        <p className="text-sm text-foreground leading-relaxed">
          <strong>Qué cubre:</strong> urgencias por enfermedad o accidente — gastos médicos,
          hospitalización, medicamentos, ambulancia, traslado/repatriación, acompañamiento, adelanto
          de fondos y asistencia jurídica (según condiciones de la póliza).
        </p>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Solo urgencias; no cubre tratamientos programados. Preexistencias excluidas salvo
          complicación aguda.
        </p>
        <h4 className="mt-4 text-sm font-bold text-foreground">📋 Pasos en caso de necesidad</h4>
        <ul className="mt-2 space-y-1 text-sm text-foreground">
          <li>• Si no es urgencia vital: <strong>llama antes</strong> de recibir asistencia.</li>
          <li>• Si es urgencia vital: acude al centro más cercano y avisa a la aseguradora en un máximo de 7 días.</li>
          <li>• Conserva informes, partes, recetas y facturas originales.</li>
        </ul>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-surface p-3">
            <p className="text-xs font-bold uppercase text-accent mb-2">Sanitas</p>
            <ul className="space-y-1 text-sm">
              <li>Atención al cliente: <a className="text-primary hover:underline" href="tel:+34917522852">91 752 28 52</a> / <a className="text-primary hover:underline" href="tel:+34900906210">900 906 210</a></li>
              <li>Urgencias 24 h: <a className="text-primary hover:underline" href="tel:+34917522910">91 752 29 10</a> / <a className="text-primary hover:underline" href="tel:+34900906207">900 906 207</a></li>
              <li>Asesoría médica 24 h: <a className="text-primary hover:underline" href="tel:+34917522907">91 752 29 07</a> / <a className="text-primary hover:underline" href="tel:+34900906208">900 906 208</a></li>
              <li>Asistencia en el extranjero: <a className="text-primary hover:underline" href="tel:+34913456584">+34 91 345 65 84</a></li>
            </ul>
          </div>
          <div className="rounded-lg bg-surface p-3">
            <p className="text-xs font-bold uppercase text-accent mb-2">Adeslas</p>
            <ul className="space-y-1 text-sm">
              <li>Asistencia internacional: <a className="text-primary hover:underline" href="tel:+34917453280">+34 91 745 32 80</a></li>
              <li>Atención 24 h: <a className="text-primary hover:underline" href="tel:+34900505040">900 505 040</a> / <a className="text-primary hover:underline" href="tel:+34919191898">919 191 898</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          <strong>Documentos a llevar:</strong> tarjeta de la aseguradora, DNI/pasaporte, Tarjeta
          Sanitaria Europea, copia de la póliza, facturas e informes médicos.
        </p>
      </>
    ),
  },
  {
    title: "🏛️ MUFACE + ASISA Funcionarios",
    body: (
      <>
        <p className="text-sm text-foreground leading-relaxed">
          <strong>Regla de oro:</strong> ASISA <em>no</em> cubre fuera de España. El concierto MUFACE
          ↔ ASISA no contempla la asistencia médica en desplazamientos privados al extranjero.
          Directamente le cubre <strong>MUFACE</strong>, independientemente de si en España estás
          adscrito a ASISA, Adeslas o sanidad pública.
        </p>
        <h4 className="mt-4 text-sm font-bold text-foreground">¿Qué cubre MUFACE en el extranjero?</h4>
        <ul className="mt-2 space-y-1 text-sm text-foreground">
          <li>• <strong>Solo urgencias</strong> (accidentes, indisposiciones repentinas, empeoramientos graves). No revisiones ni tratamientos programados.</li>
          <li>• Cobertura máxima de <strong>2 meses</strong> desde la salida de España.</li>
          <li>• <strong>En Europa:</strong> solicitar la TSE o el Certificado Provisional Sustitutorio y usar la sanidad pública local.</li>
          <li>• <strong>Fuera de Europa:</strong> descargar el Certificado de cobertura, pagar de bolsillo y solicitar reintegro de gastos a MUFACE al volver.</li>
        </ul>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <a className="rounded-lg border border-border bg-card p-3 text-sm font-semibold hover:bg-surface" target="_blank" rel="noreferrer" href="https://muface.es/asistencia-sanitaria/extranjero/desplazamientos-temporales">🔗 MUFACE · Desplazamientos temporales</a>
          <a className="rounded-lg border border-border bg-card p-3 text-sm font-semibold hover:bg-surface" target="_blank" rel="noreferrer" href="https://muface.es/asistencia-sanitaria/extranjero/desplazamientos-temporales/como-obtener-tarjeta-sanitaria-europea">🔗 MUFACE · Tarjeta Sanitaria Europea</a>
          <a className="rounded-lg border border-border bg-card p-3 text-sm font-semibold hover:bg-surface" target="_blank" rel="noreferrer" href="https://www.asisa.es/preguntas-frecuentes/asistencia-en-el-extranjero/tengo-una-poliza-privada-de-salud-y-voy-a-viajar-al-extranjero">🔗 ASISA · FAQ mutualistas en el extranjero</a>
          <a className="rounded-lg border border-border bg-card p-3 text-sm font-semibold hover:bg-surface" target="_blank" rel="noreferrer" href="https://muface.es/">🔗 MUFACE · Reintegro de gastos</a>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          <strong>Consejo práctico:</strong> aunque MUFACE responde ante urgencias, tener que
          adelantar el dinero fuera de la UE puede ser peligroso si surge una hospitalización seria.
          Complementarlo con un seguro privado de viaje (que pague directamente al hospital) aporta
          un plus de tranquilidad enorme.
        </p>
      </>
    ),
  },
  {
    title: "🧾 ASISA Particulares",
    body: (
      <>
        <p className="text-sm text-foreground leading-relaxed">
          Para urgencias médicas en el extranjero, ASISA dispone de un servicio telefónico 24/7:
        </p>
        <p className="mt-3 text-lg font-bold text-primary">
          📞 Asistencia internacional: <a className="hover:underline" href="tel:+34915143611">+34 91 514 36 11</a>
        </p>
        <p className="text-xs text-muted-foreground">
          (Este número también aparece en el reverso de la tarjeta física o digital de ASISA.)
        </p>
        <h4 className="mt-4 text-sm font-bold text-foreground">Pasos ante una urgencia</h4>
        <ol className="mt-2 space-y-2 text-sm text-foreground list-decimal list-inside">
          <li><strong>Llama antes de acudir al médico</strong> (salvo emergencia vital extrema).</li>
          <li>Facilita: nombre, número de póliza, ubicación exacta y síntomas o tipo de accidente.</li>
          <li>Acude al centro concertado que te indique el operador (o coordinarán el envío de un médico).</li>
          <li>En el hospital, muestra la tarjeta ASISA y tu DNI/pasaporte. ASISA tramita los pagos directamente con el centro.</li>
          <li>En emergencia extrema sin posibilidad de llamar antes: avisa a ASISA en un plazo máximo de 24-48 h con el informe de ingreso.</li>
        </ol>
        <a
          href="https://www.asisa.es/preguntas-frecuentes/asistencia-en-el-extranjero/tengo-una-poliza-privada-de-salud-y-voy-a-viajar-al-extranjero"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          🔗 ASISA · Asistencia en el extranjero
        </a>
      </>
    ),
  },
];

export default function PrivateInsuranceSection() {
  return (
    <section
      id="seguros-privados"
      className="section-padding bg-background"
      aria-label="Seguros privados y mutualidades"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">
          Sanitas · Adeslas · MUFACE/ASISA
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Seguros privados y mutualidades en el extranjero
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Cómo activar la cobertura de tu seguro privado o de MUFACE durante el viaje, con teléfonos
          24 h y pasos a seguir en cada caso.
        </p>

        <div className="mt-10 space-y-6">
          {blocks.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold text-foreground">{b.title}</h3>
              <div className="mt-3">{b.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
