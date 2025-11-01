import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { registerApi } from '../services/auth'
import { useAuth } from '../hooks/useAuth'

export default function Register(){
  const [sp] = useSearchParams()
  const defaultType = sp.get('tipo') === 'medico' ? 'doctor' : 'patient'
  const [role, setRole] = useState(defaultType)
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [doctor, setDoctor] = useState({ full_name: '', specialty_id: '', city_id: '', price: '', is_featured: false })
  const [msg, setMsg] = useState('')
  const { setAuth } = useAuth()

  const payload = useMemo(()=> ({ ...form, role, ...(role==='doctor'? doctor : {}) }), [form, role, doctor])

  async function submit(e){
    e.preventDefault()
    setMsg('')
    try{
      const data = await registerApi(payload)
      setAuth({ user: data.user, token: data.token })
      setMsg('Registro exitoso')
      window.location.href = '/dashboard'
    } catch(e){
      setMsg(e.response?.data?.error || 'Error en registro')
    }
  }

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold">Registro</h1>
      <div className="mt-3 flex gap-3">
        <button onClick={()=>setRole('patient')} className={`px-4 py-2 rounded-btn border ${role==='patient'?'bg-primary text-white':''}`}>Paciente</button>
        <button onClick={()=>setRole('doctor')} className={`px-4 py-2 rounded-btn border ${role==='doctor'?'bg-primary text-white':''}`}>Médico</button>
      </div>

      <form onSubmit={submit} className="mt-6 max-w-2xl grid md:grid-cols-2 gap-4">
        <input placeholder="Nombre" className="border rounded-lg px-3 py-2" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} />
        <input placeholder="Email" className="border rounded-lg px-3 py-2" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} />
        <input placeholder="Contraseña" type="password" className="border rounded-lg px-3 py-2" value={form.password} onChange={e=>setForm({...form, password: e.target.value})} />

        {role==='doctor' && (
          <>
            <input placeholder="Nombre público" className="border rounded-lg px-3 py-2" value={doctor.full_name} onChange={e=>setDoctor({...doctor, full_name: e.target.value})} />
            <input placeholder="Especialidad (ID opcional)" className="border rounded-lg px-3 py-2" value={doctor.specialty_id} onChange={e=>setDoctor({...doctor, specialty_id: e.target.value})} />
            <input placeholder="Ciudad (ID opcional)" className="border rounded-lg px-3 py-2" value={doctor.city_id} onChange={e=>setDoctor({...doctor, city_id: e.target.value})} />
            <input placeholder="Precio aproximado" className="border rounded-lg px-3 py-2" value={doctor.price} onChange={e=>setDoctor({...doctor, price: e.target.value})} />
            <label className="flex items-center gap-2"><input type="checkbox" checked={doctor.is_featured} onChange={e=>setDoctor({...doctor, is_featured: e.target.checked})} /> Destacado</label>
          </>
        )}

        <div className="md:col-span-2 flex gap-2 mt-2">
          <button className="btn-primary">Registrarme</button>
          {msg? <div className="text-sm text-gray-600">{msg}</div> : null}
        </div>
      </form>
    </div>
  )
}
