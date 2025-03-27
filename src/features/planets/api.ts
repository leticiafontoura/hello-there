import { apiClient } from '../../api/apiClient'
import { ApiReturn } from '../../entities/Items'

export const getPlanetsList = async (query?: string, page?: number): Promise<ApiReturn> => {
  let url = '/planets'
  if (query) {
    url = `planets/?search=${query}`
  } else if (page) {
    url = `planets/?page=${page}`
  }
  const { data } = await apiClient.get(url)
  return data
}
