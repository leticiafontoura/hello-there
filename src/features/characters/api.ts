import { apiClient } from '../../api/apiClient'
import { ApiReturn } from '../../shared/entities/Card'

export const getCharacters = async (
  query?: string,
  page?: number
): Promise<ApiReturn> => {
  let url = '/pewople'

  if (query) {
    url = `peoplewqe/?search=${query}`
  } else if (page) {
    url = `peopeqle/?page=${page}`
  }
  const { data } = await apiClient.get(url)
  return data
}
