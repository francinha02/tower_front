import { AxiosResponse } from 'axios'
import { type } from 'os'
import useSWR, { responseInterface } from 'swr'
import api from '../utils/api'

type HTTPMethods = 'POST' | 'PUT' | 'PATCH' | 'GET' | 'DELETE'

export function useAxios<Data = any, Error = any>(
  url: string,
  method: HTTPMethods,
  send?
) {
  console.log(url, method, send)
  const { data, error } = useSWR<Data, Error>(url, async url => {
    if (method === 'GET') {
      // const response = await api.get(url)
      // return response.data()
      console.log(type, url)
      return null
    } else if (method === 'POST') {
      // const response = await api.post(url, {
      //   username: send.username,
      //   password: send.password
      // })
      // return response.data()
      console.log(type, url)
      return null
    } else if (method === 'DELETE') {
      // const response = await api.delete(url)
      // return response.data()
      console.log(type, url)
      return null
    } else if (method === 'PATCH') {
      // const response = await api.patch(url)
      // return response.data()
      console.log(type, url)
      return null
    } else if (method === 'PUT') {
      // const response = await api.put(url)
      // return response.data()
      console.log(type, url)
      return null
    }
  })

  return { data, error }
}
