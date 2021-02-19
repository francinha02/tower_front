import axios from 'axios'

const api = axios.create({
  baseURL: 'http://apvbrasil.tech/'
})

export default api
