import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://moneycontrol-rho.vercel.app',
})
