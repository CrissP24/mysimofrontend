import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { api } from '../lib/api'
import DoctorList from '../components/DoctorList'
import DoctorSearchBar from '../components/DoctorSearchBar'

export default function Doctors(){
  const [searchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({ total: 0, data: [], results: 0, page: 1, limit: 20 })
  const q = searchParams.get('q') || ''
  const city = searchParams.get('city') || ''
  const specialty = searchParams.get('specialty') || ''

  const [page, setPage] = useState(1)

  const query = useMemo(()=>{
    const p = new URLSearchParams()
    if (q) p.set('q', q)
    if (city) p.set('city', city)
    if (specialty) p.set('specialty', specialty)
    p.set('page', String(page))
    p.set('limit', '10')
    return p.toString()
  }, [q, city, specialty, page])

  useEffect(()=>{
    setLoading(true)
    api.get(`/doctors?${query}`).then(res=> setData(res.data)).finally(()=> setLoading(false))
  }, [query])

  return (
    <div>
      <section className="bg-white border-b">
        <div className="container py-8">
          <DoctorSearchBar />
        </div>
      </section>
      <div className="container py-8">
        <div className="text-sm text-gray-600">Mostrando {data.results || 0} de {data.total || 0} resultados</div>
        <div className="mt-4">{loading? 'Cargando...' : <DoctorList doctors={data.data} />}</div>
        <div className="mt-6 flex gap-2">
          <button disabled={page<=1} onClick={()=>setPage(p=>Math.max(1, p-1))} className="btn-outline">Anterior</button>
          <button disabled={(data.page*data.limit)>=data.total} onClick={()=>setPage(p=>p+1)} className="btn-outline">Siguiente</button>
        </div>
      </div>
    </div>
  )
}
