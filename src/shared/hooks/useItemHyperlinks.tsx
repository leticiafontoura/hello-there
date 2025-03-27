import { useQuery } from '@tanstack/react-query'
import { getItemDetails } from '../../api/apiClient'

export function useItemHyperlinks(url: string | Array<string>) {
  const urls = Array.isArray(url) ? url : [url]

  return urls.map((singleUrl) => {
    const fodase = useQuery({
      queryKey: [singleUrl],
      queryFn: async () => {
        const response = await getItemDetails(singleUrl)
        return response
      },
      enabled: !!singleUrl,
    })
    return fodase
  })
}
