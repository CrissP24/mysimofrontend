import { Link } from 'react-router-dom'

export default function DoctorCard({ doctor, horizontal=false }){
  const Wrapper = ({children}) => (
    <div className={horizontal? 'flex p-4 border rounded-xl shadow-card gap-4' : 'p-4 border rounded-xl shadow-card'}>{children}</div>
  )
  return (
    <Wrapper>
      <div className={horizontal? 'w-28 h-28 bg-gray-100 rounded-xl flex-shrink-0' : 'w-full h-40 bg-gray-100 rounded-xl'}>
        {/* photo placeholder */}
      </div>
      <div className={horizontal? 'flex-1' : 'mt-3'}>
        <div className="font-semibold">{doctor.fullName}</div>
        <div className="text-sm text-gray-600">{doctor.specialty?.name} · {doctor.city?.name}</div>
        {doctor.insurances?.length ? (
          <div className="mt-2 flex flex-wrap gap-2">
            {doctor.insurances.slice(0,3).map((s,i)=>(<span key={i} className="text-xs bg-gray-100 rounded px-2 py-1">{s}</span>))}
          </div>
        ): null}
        <div className="mt-3 flex items-center gap-3">
          <Link to={`/medico/${doctor.id}`} className="px-4 py-2 rounded-btn bg-accent text-white">Ver perfil</Link>
          <a href="#" className="text-green-600">WhatsApp</a>
        </div>
      </div>
    </Wrapper>
  )
}

