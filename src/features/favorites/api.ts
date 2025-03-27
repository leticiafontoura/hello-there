import { ApiReturn, Item } from '../../entities/Items'
import { normalizeString } from '../../shared/helpers'

export function getFavorites(query?: string): Promise<ApiReturn> {
  return new Promise((resolve) => {
    const data = localStorage.getItem('favorites')
    const parsed: Array<Item> = JSON.parse(data || '[]')
    if (query) {
      const filtered = parsed.filter((option) =>
        normalizeString(option.name).includes(normalizeString(query))
      )
      resolve({
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
