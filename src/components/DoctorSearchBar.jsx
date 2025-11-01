import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { api } from '../lib/api'

export default function DoctorSearchBar(){
  const [specialties, setSpecialties] = useState([])
  const [cities, setCities] = useState([])
  const [q, setQ] = useState('')
  const [spec, setSpec] = useState('')
  const [city, setCity] = useState('')
  const [sp] = useSearchParams()
  const navigate = useNavigate()

  useEffect(()=>{
    api.get('/specialties').then(r=>setSpecialties(r.data || [])).catch(()=>{})
    api.get('/cities').then(r=>setCities(r.data || [])).catch(()=>{})
    setQ(sp.get('q') || '')
    setSpec(sp.get('specialty') || '')
    setCity(sp.get('ciudad') || '')
  }, [])

  const submit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (q) params.set('q', q)
    if (spec) params.set('specialty', spec)
    if (city) params.set('city', city)
    navigate(`/doctores?${params.toString()}`)
  }

  return (
    <form onSubmit={submit} className="card p-4 grid md:grid-cols-4 gap-3">
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Especialidad o nombre del médico" className="w-full border rounded-lg px-3 py-3" />
      <select value={spec} onChange={e=>setSpec(e.target.value)} className="w-full border rounded-lg px-3 py-3">
        <option value="">Especialidad</option>
        {specialties.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
      </select>
      <select value={city} onChange={e=>setCity(e.target.value)} className="w-full border rounded-lg px-3 py-3">
        <option value="">Ciudad</option>
        {cities.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
      </select>
      <button className="btn-primary">Buscar médico</button>
    </form>
  )
}

