import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Navbar() {
  const { auth, logout } = useAuth()
  return (
    <header className="bg-white/90 backdrop-blur border-b">
      <div className="container py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl" style={{color:'var(--primary)'}}>mysimo</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive})=> isActive? 'text-[color:var(--primary)] font-semibold' : ''}>Inicio</NavLink>
          <NavLink to="/doctores" className={({isActive})=> isActive? 'text-[color:var(--primary)] font-semibold' : ''}>Directorio de médicos</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive? 'text-[color:var(--primary)] font-semibold' : ''}>Acerca de</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive? 'text-[color:var(--primary)] font-semibold' : ''}>Contacto</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          {!auth?.user && (
            <>
              <Link to="/login" className="btn-outline">Login</Link>
              <Link to="/registro?tipo=medico" className="btn-accent">¿Eres médico?</Link>
            </>
          )}
          {auth?.user && (
            <>
              <Link to="/dashboard" className="btn-outline">Dashboard</Link>
              <button onClick={logout} className="btn-outline">Salir</button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
