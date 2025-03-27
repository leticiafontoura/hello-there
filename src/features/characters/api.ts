import { apiClient } from '../../api/apiClient'
import { ApiReturn } from '../../entities/Items'

export const getCharactersList = async (
  query?: string,
  page?: number
): Promise<ApiReturn> => {
  let url = '/people'

  if (query) {
    url = `people/?search=${query}`
  } else if (page) {
    url = `people/?page=${page}`
  }
  const { data } = await apiClient.get(url)
  return data
}
