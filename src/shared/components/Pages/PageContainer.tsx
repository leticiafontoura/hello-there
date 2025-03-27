import { ApiReturn } from '../../../entities/Items'
import { useCardList } from '../../hooks/useCardList'
import CardContainer from '../../ui/CardContainer/CardContainer'
import SearchWordFilter from '../../ui/Filter/Filter'
import Pagination from '../../ui/Pagination/Pagination'
import './PageContainer.scss'
import EmptySearch from '../../ui/Views/Empty'
import ErrorView from '../../ui/Views/Error'
import LoadingScreen from '../../ui/Views/LoadingScreen'
import { splitArrayIntoSubsets } from '../../helpers'

/**
 * @hasSubset to handle favorites as they're not split into chunks of 10
 */

interface Props {
  queryFn: (query?: string) => Promise<ApiReturn>
  queryKey: string
  hasSubset?: boolean
}

function PageContainer({ queryFn, queryKey, hasSubset }: Props) {
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

  const paginatedData = hasSubset
    ? splitArrayIntoSubsets(items)[currentPage - 1]
    : items

  if (isError) return <ErrorView />

  return (
    <section className='page-container'>
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
    </section>
  )
}

export default PageContainer
