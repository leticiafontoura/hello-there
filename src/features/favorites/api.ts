import { ApiReturn, Item } from '../../shared/entities/Card'

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

export function splitArrayIntoSubsets(arr?: Array<Item>, subsetSize = 10) {
  const result = []
  if (arr) {
    for (let i = 0; i < arr.length; i += subsetSize) {
      result.push(arr.slice(i, i + subsetSize))
    }
  }
  return result
}

export function normalizeString(string: string) {
  return string.normalize('NFD').toLowerCase()
}

export function compareStrings(string1: string, string2: string) {
  return normalizeString(string1) === normalizeString(string2)
}
