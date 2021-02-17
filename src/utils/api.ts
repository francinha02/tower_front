import axios from 'axios'

const api = axios.create({
  baseURL: 'http://apvbrasil.tech:3333/'
})

export default api
