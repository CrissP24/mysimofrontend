export default function HowItWorks(){
  const items = [
    { t: 'Buscar', d: 'Encuentra especialistas por ciudad y especialidad.' },
    { t: 'Ver perfil', d: 'Revisa experiencia, seguros y disponibilidad.' },
    { t: 'Reservar', d: 'Agenda tu cita en pocos clics.' },
  ]
  return (
    <section className="container py-14">
      <h2 className="text-2xl font-bold text-center">Cómo reservar una cita médica</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <div key={idx} className="p-6 rounded-xl shadow-card border">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">{idx+1}</div>
            <div className="mt-3 font-semibold">{it.t}</div>
            <div className="text-sm text-gray-600">{it.d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

