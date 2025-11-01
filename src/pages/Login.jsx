import { useState } from 'react'
import { loginApi } from '../services/auth'
import { useAuth } from '../hooks/useAuth'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { setAuth } = useAuth()

  async function submit(e){
    e.preventDefault()
    setError('')
    try {
      const data = await loginApi(email, password)
      setAuth({ user: data.user, token: data.token })
      window.location.href = '/dashboard'
    } catch (e) {
      setError(e.response?.data?.error || 'Error en login')
    }
  }

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold">Iniciar sesión</h1>
      <form onSubmit={submit} className="mt-6 max-w-md space-y-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full border rounded-lg px-3 py-2" />
        <input value={password} type="password" onChange={e=>setPassword(e.target.value)} placeholder="Contraseña" className="w-full border rounded-lg px-3 py-2" />
        {error? <div className="text-red-600 text-sm">{error}</div> : null}
        <button className="btn-primary">Entrar</button>
      </form>
    </div>
  )
}
