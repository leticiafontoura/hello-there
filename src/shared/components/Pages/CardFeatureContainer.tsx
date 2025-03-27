import { ApiReturn } from '../../../entities/Items'
import { useCardList } from '../../hooks/useCardList'
import CardContainer from '../../ui/CardContainer/CardContainer'
import SearchWordFilter from '../../ui/Filter/Filter'
import Pagination from '../../ui/Pagination/Pagination'
import './CardFeatureContainer.scss'
import EmptySearch from '../../ui/Views/Empty'
import ErrorView from '../../ui/Views/Error'
import LoadingScreen from '../../ui/Views/LoadingScreen'
import { splitArrayIntoSubsets } from '../../helpers'
import { useEffect, useRef } from 'react'
import { useQueryClient } from '@tanstack/react-query'

/**
 * @hasSubset to handle favorites as they're not split into chunks of 10
 */

interface Props {
  queryFn: (query?: string) => Promise<ApiReturn>
  queryKey: string
  hasSubset?: boolean
}

function CardFeatureContainer({ queryFn, queryKey, hasSubset }: Props) {

  const isFavorite = queryKey === 'favorites'
  const container = useRef<HTMLElement | null>(null)

  const {
    setSearchQuery,
    isLoading,
    items,
    currentPage,
    setCurrentPage,
    totalPages,
    isSuccess,
    isError,
  } = useCardList({ queryFn, queryKey })

  useEffect(() => {
    if (container && container.current) {
      const cardContainer = container.current.querySelector('.card-container')
      console.log(cardContainer)
      if (cardContainer) cardContainer.scrollTo({
        top: 0
      })
    }
  }, [currentPage])

  const queryClient = useQueryClient()

  useEffect(() => {
    if (isFavorite) {
      queryClient.invalidateQueries({ queryKey: [queryKey] })
    }
  }, [isFavorite, queryClient, queryKey, currentPage])

  const paginatedData = hasSubset
    ? splitArrayIntoSubsets(items)[currentPage - 1]
    : items

  if (isError) return <ErrorView />

  return (
    <main className='main-container card-feature-container' ref={container}>
      {isLoading ? <LoadingScreen /> : null}
      <SearchWordFilter handleSearchWord={setSearchQuery} />
      {!items.length && isSuccess ? <EmptySearch /> : null}
      {!!items.length ? (
        <>
          <CardContainer data={paginatedData} />
          <Pagination
            totalPages={totalPages}
            handleCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      ) : null}
    </main>
  )
}

export default CardFeatureContainer
