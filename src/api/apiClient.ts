import axios from 'axios'
import { Item } from '../entities/Items'

export const apiClient = axios.create({
  baseURL: 'https://swapi.dev/api/',
})

export const getItemDetails = async (url: string, id?: string): Promise<Item> => {
  const link = apiClient.get(`${url}${id ? `/${id}` : ''}`)
  const { data } = await link
  return data as Item
}
