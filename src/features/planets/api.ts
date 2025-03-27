import { apiClient } from '../../api/apiClient'

export const getPlanetsList = async (query?: string, page?: number) => {
  let url = '/planets'
  if (query) {
    url = `planets/?search=${query}`
  } else if (page) {
    url = `planets/?page=${page}`
  }
  const { data } = await apiClient.get(url)
  return data
}
