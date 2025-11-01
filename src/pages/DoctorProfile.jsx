import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../lib/api'

export default function DoctorProfile(){
  const { id } = useParams()
  const [doc, setDoc] = useState(null)
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    api.get(`/doctors/${id}`).then(res=> setDoc(res.data))
  }, [id])

  if (!doc) return <div className="container py-10">Cargando...</div>

  return (
    <div className="container py-10">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="w-full h-60 bg-gray-100 rounded-xl" />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold">{doc.fullName}</h1>
          <div className="text-sm text-gray-600">{doc.specialty?.name} · {doc.city?.name}</div>
          <p className="mt-4 text-gray-700">{doc.about || 'Experiencia y atención de calidad.'}</p>
          <div className="mt-6">
            <button onClick={()=>setOpen(true)} className="px-5 py-3 rounded-btn bg-accent text-white">Reservar cita</button>
          </div>
          <div className="mt-8">
            <div className="font-semibold mb-2">Reseñas</div>
            <div className="text-sm text-gray-600">Excelente atención (dummy)</div>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="font-semibold text-lg">Reservar cita</div>
            <form className="mt-4" onSubmit={(e)=>{e.preventDefault(); alert('Cita solicitada'); setOpen(false)}}>
              <input type="datetime-local" className="w-full border rounded-lg px-3 py-2" required />
              <textarea placeholder="Notas" className="w-full border rounded-lg px-3 py-2 mt-3" />
              <div className="mt-4 flex justify-end gap-2">
                <button type="button" className="px-4 py-2 border rounded-btn" onClick={()=>setOpen(false)}>Cancelar</button>
                <button className="px-4 py-2 bg-accent text-white rounded-btn">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

