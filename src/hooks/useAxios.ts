/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import useSWR from 'swr'
import api from '../utils/api'

export async function useAxios<Data, Error>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async url => {
    const response = await api.get(url)
    return response.data
  })
  return { data, error }
}
