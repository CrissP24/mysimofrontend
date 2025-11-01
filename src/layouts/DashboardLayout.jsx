import { Link } from 'react-router-dom'

export default function DashboardLayout({ children }){
  return (
    <div className="container py-8 grid md:grid-cols-[240px_1fr] gap-6">
      <aside className="card p-4">
        <div className="font-semibold mb-3">Panel</div>
        <nav className="text-sm space-y-2">
          <Link to="/dashboard" className="block">Inicio</Link>
          <Link to="/dashboard/perfil" className="block">Mi perfil</Link>
          <Link to="/dashboard/citas" className="block">Mis citas</Link>
          <Link to="/dashboard/gadgets" className="block">Mis Gadgets</Link>
        </nav>
      </aside>
      <section>
        {children}
      </section>
    </div>
  )
}

