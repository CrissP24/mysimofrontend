import { useEffect, useState } from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import { api } from '../lib/api'
import { useAuth } from '../hooks/useAuth'
import GadgetSection from '../components/GadgetSection'

export default function Dashboard(){
  const { auth } = useAuth()
  const [list, setList] = useState([])

  useEffect(()=>{
    if (!auth?.token) { window.location.href = '/login'; return }
    api.get('/appointments/me', { headers: { Authorization: `Bearer ${auth.token}` } })
      .then(res=> setList(res.data))
      .catch(()=> setList([]))
  }, [auth])

  const role = auth?.user?.role

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <section className="card p-4">
          <div className="font-semibold">Bienvenido{auth?.user?.name? `, ${auth.user.name}` : ''}</div>
          <div className="text-sm text-gray-600">Rol: {role || '—'}</div>
        </section>

        {role === 'doctor' && (
          <>
            <section className="card p-4">
              <div className="font-semibold mb-2">Mis citas</div>
              <div className="space-y-2">
                {list.map(a => (
                  <div key={a.id} className="p-3 border rounded-lg">Cita el {new Date(a.dateTime || a.date_time).toLocaleString()}</div>
                ))}
                {!list.length && <div className="text-sm text-gray-500">Aún no tienes citas.</div>}
              </div>
            </section>
            <section className="card p-4">
              <div className="font-semibold mb-1">Disponibilidad</div>
              <div className="text-sm text-gray-500">Próximamente podrás activar/desactivar tu disponibilidad.</div>
            </section>
          </>
        )}

        {role === 'patient' && (
          <section className="card p-4">
            <div className="font-semibold mb-2">Mis citas</div>
            <div className="space-y-2">
              {list.map(a => (
                <div key={a.id} className="p-3 border rounded-lg">Cita el {new Date(a.dateTime || a.date_time).toLocaleString()}</div>
              ))}
              {!list.length && <div className="text-sm text-gray-500">Aún no tienes citas.</div>}
            </div>
          </section>
        )}

        {role === 'admin' && (
          <section className="card p-4">
            <div className="font-semibold">Panel de administrador</div>
            <div className="text-sm text-gray-500">CRUD de usuarios/especialidades/ciudades y AdsDoctor: próximamente.</div>
          </section>
        )}

        <GadgetSection />
      </div>
    </DashboardLayout>
  )
}
