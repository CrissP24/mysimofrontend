import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'https://mysimobackend.onrender.com/api'

export const api = axios.create({
  baseURL: API_URL,
})

