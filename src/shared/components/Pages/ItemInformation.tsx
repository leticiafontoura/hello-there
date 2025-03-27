import { useLocation } from 'react-router'
import { transformItemJson } from '../../helpers'
import ItemsList from '../ItemsList/ItemsList'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Item } from '../../../entities/Items'
import LoadingScreen from '../../ui/Views/LoadingScreen'
import './ItemInformation.scss'
import { getItemDetails } from '../../../api/apiClient'
import ErrorView from '../../ui/Views/Error'

interface Props {
  location: string
}

function ItemInformation({ location }: Props) {
  const queryClient = useQueryClient()
  const locationPath = useLocation().pathname.replace('/', '')

  const cachedData = queryClient.getQueryData([location, locationPath]) as Item

  const {
    data: fetchedData,
    isFetching,
    isError,
  } = useQuery<Item>({
    queryKey: [location, locationPath],
    queryFn: async () => await getItemDetails(locationPath),
  })

  if (isFetching) return <LoadingScreen />

  if (isError) return <ErrorView />

  const dataToUse = cachedData || fetchedData

  const transformedData = transformItemJson(dataToUse)

  return (
    <article className='item-information'>
      <ul className='item-information__container'>
        <ItemsList item={transformedData} fullList />
      </ul>
    </article>
  )
}

export default ItemInformation
