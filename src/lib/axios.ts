import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://server-td-money.vercel.app/',
})
