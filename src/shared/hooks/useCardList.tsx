import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { ApiReturn } from '../../entities/Items'

interface Props {
  queryFn: (query?: string, currentPage?: number) => Promise<ApiReturn>
  queryKey: string
}

export function useCardList({ queryFn, queryKey }: Props) {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState<number>(1)

  const {
    data: allItems,
    isFetching: isFetchingAll,
    isSuccess: isSuccessAll,
    isError: isErrorAll,
  } = useQuery<ApiReturn>({
    queryKey: [queryKey, currentPage],
    queryFn: () => queryFn('', currentPage),
    enabled: searchQuery.length === 0,
    placeholderData: (previousData) => previousData,
  })

  const {
    data: filteredItems,
    isFetching: IsFetchingFilteredItems,
    isSuccess: isSuccessFilteredItems,
    isError: isErrorFilteredItems,
  } = useQuery({
    queryKey: [queryKey, searchQuery],
    queryFn: () => queryFn(searchQuery, currentPage),
    enabled: searchQuery.length > 2,
    placeholderData: (previousData) => previousData,
  })

  const isLoading =
    searchQuery.length > 2 ? IsFetchingFilteredItems : isFetchingAll
  const isSuccess =
    searchQuery.length > 2 ? isSuccessFilteredItems : isSuccessAll
  const isError = searchQuery.length > 2 ? isErrorFilteredItems : isErrorAll
  const items =
    searchQuery.length > 2 ? filteredItems?.results : allItems?.results
  const itemsCount =
    searchQuery.length > 2 ? filteredItems?.count : allItems?.count
  const totalPages = Math.ceil((itemsCount || 0) / 10)

  return {
    setSearchQuery,
    isLoading,
    items: items || [],
    totalPages,
    setCurrentPage,
    currentPage,
    isSuccess,
    isError,
  }
}
