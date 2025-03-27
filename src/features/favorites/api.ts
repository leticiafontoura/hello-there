import { ApiReturn, Item } from '../../shared/entities/Items'
import { normalizeString } from '../../shared/helpers'

export function getFavorites(query?: string): Promise<ApiReturn> {
  return new Promise((resolve) => {
    const data = localStorage.getItem('favorites')
    const parsed: Array<Item> = JSON.parse(data || '[]')
    let apiReturn = {}
    if (query) {
      const filtered = parsed.filter((option) =>
        normalizeString(option.name).includes(normalizeString(query))
      )
      return (apiReturn = {
        results: filtered,
        count: filtered.length,
      })
    }
    resolve({
      results: parsed,
      count: parsed.length,
    })
  })
}
