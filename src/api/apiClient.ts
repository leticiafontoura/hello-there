import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://swapi.dev/api/',
})

export const getItemDetails = async (url: string, id?: string) => {
  const link = apiClient.get(`${url}${id ? `/${id}` : ''}`)
  const { data } = await link
  return data
}
