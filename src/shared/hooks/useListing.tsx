import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { ApiReturn } from '../entities/Card'

interface Props {
  queryFn: (query?: string, currentPage?: number) => Promise<ApiReturn>
  queryKey: string
}

export function useListing({ queryFn, queryKey }: Props) {
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState<number>(1)

  const { data: allItems, isFetching: isLoadingAll, isSuccess: isSuccessAll, isError: isErrorAll } = useQuery<ApiReturn>({
    queryKey: [queryKey, currentPage],
    queryFn: () => queryFn('', currentPage),
    enabled: query.length === 0,
    placeholderData: (previousData) => previousData
  })

  const { data: filteredItems, isFetching: isLoadingFiltered, isSuccess: isSuccessFiltered, isError: isErrorFiltered } = useQuery({
    queryKey: [queryKey, query],
    queryFn: () => queryFn(query, currentPage),
    enabled: query.length > 2,
    placeholderData: (previousData) => previousData
  })

  const isLoading = query.length > 2 ? isLoadingFiltered : isLoadingAll
  const isSuccess = query.length > 2 ? isSuccessFiltered : isSuccessAll
  const isError = query.length > 2 ? isErrorFiltered : isErrorAll
  const items = query.length > 2 ? filteredItems?.results : allItems?.results
  const itemsCount = query.length > 2 ? filteredItems?.count : allItems?.count
  const totalPg = Math.ceil((itemsCount || 0) / 10)

  return {
    setQuery,
    isLoading,
    items: items || [],
    totalPg,
    setCurrentPage,
    currentPage,
    isSuccess,
    isError
  }
}
