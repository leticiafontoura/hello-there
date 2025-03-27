import { useQueries } from '@tanstack/react-query'
import { getItemDetails } from '../../api/apiClient'

export function useItemHyperlinks(url: string | Array<string>) {
  const urls = Array.isArray(url) ? url : [url]

  return useQueries({
    queries: urls.map((singleUrl) => ({
      queryKey: [singleUrl],
      queryFn: async () => getItemDetails(singleUrl),
      enabled: !!singleUrl,
    })),
  })
}
