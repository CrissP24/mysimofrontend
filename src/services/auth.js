import { api } from '../lib/api'

export async function loginApi(email, password){
  const { data } = await api.post('/auth/login', { email, password })
  return data
}

export async function registerApi(payload){
  const { data } = await api.post('/auth/register', payload)
  return data
}

