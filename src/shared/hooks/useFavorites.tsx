import { useEffect, useState } from 'react'
import { Item } from '../../entities/Items'

export function useFavorites(cardTitle: string) {
  const STORAGE_KEY = 'favorites'

  const storedFavorites = localStorage.getItem(STORAGE_KEY)

  const [currentFavorites, setCurrentFavorites] = useState<Array<Item>>(() =>
    JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  )

  useEffect(() => {
    if (storedFavorites?.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentFavorites))
    }
  }, [currentFavorites])

  const isFavorite = !!currentFavorites.filter(
    (item) => item.name === cardTitle
  ).length

  function toggleFavorite(info: Item) {
    const storedValue = localStorage.getItem(STORAGE_KEY)
    const parsed: Array<Item> = JSON.parse(storedValue || '[]')
    const updatedFavorites = parsed.some((item) => item.name === info.name)
      ? parsed.filter((item) => item.name !== info.name)
      : [...parsed, info]
    setCurrentFavorites(updatedFavorites)
  }

  return { isFavorite, toggleFavorite }
}
