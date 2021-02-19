/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import useSWR from 'swr'
import api from '../utils/api'

export function useAxios<Data = any, Error = any>(url: string, headers?) {
  const { data, error } = useSWR<Data, Error>(url, async (url: string) => {
    const response = await api.get(url, {
      headers
    })
    return response.data
  })
  return { data, error }
}
