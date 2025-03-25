import { ApiReturn } from '../../entities/Card'
import { useListing } from '../../hooks/useListing'
import CardContainer from '../../ui/CardContainer/CardContainer'
import SearchWordFilter from '../../ui/Filter/Filter'
import Pagination from '../Pagination/Pagination'
import Loader from '../../../assets/svgs/favoriteIconOutline.svg?react'
import './PageContainer.scss'
import { splitArrayIntoSubsets } from '../../../features/favorites/api'
import EmptySearch from './Empty'
import ErrorView from './Error'

interface Props {
  queryFn: (query?: string) => Promise<ApiReturn>
  queryKey: string
  hasSubset?: boolean
}

function PageContainer({ queryFn, queryKey, hasSubset }: Props) {
  const {
    setQuery,
    isLoading,
    items,
    currentPage,
    setCurrentPage,
    totalPg,
    isSuccess,
    isError,
  } = useListing({ queryFn, queryKey })

  const withSubset = hasSubset ? splitArrayIntoSubsets(items) : []

  return (
    <div className='page-container'>
      {isLoading ? (
        <div className='page-container__backdrop-loading'>
          <Loader />
        </div>
      ) : null}
      <SearchWordFilter handleSearchWord={setQuery} />
      {!items.length && isSuccess ? <EmptySearch /> : null}
      {items.length ? (
        <>
          <CardContainer
            data={hasSubset ? withSubset[currentPage - 1] : items}
          />
          <Pagination
            totalPgs={totalPg}
            handleCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      ) : null}
      {isError ? <ErrorView /> : null}
    </div>
  )
}

export default PageContainer
