import { Item } from './entities/Items'

export function getItemId(itemUrl: string) {
  if (itemUrl) {
    const idPosition = -2
    const splitUrl = itemUrl.split('/')
    const id = splitUrl.slice(idPosition, -1)
    return id[0]
  }
}

export function transformItemJson(json: Item) {
  if ('birth_year' in json) {
    const formatted = {
      Name: json.name,
      'Birth Year': json.birth_year,
      'Eye color': json.eye_color,
      Homeworld: json.homeworld,
      Gender: json.gender,
      Height: json.height,
      Mass: json.mass,
      'Hair color': json.hair_color,
      'Skin color': json.skin_color,
    }
    return formatted
  }
  const formatted = {
    Name: json.name,
    Population: json.population,
    Residents: json.residents,
    Gravity: json.gravity,
    Terrain: json.terrain,
    'Surface water': json.surface_water,
    Climate: json.climate,
    'Rotation period': json.rotation_period,
    'Orbital period': json.orbital_period,
    Diameter: json.diameter,
  }
  return formatted
}

export function capitalizeFirstChar(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function splitLocationPathname(pathname: string) {
  return pathname.split('/').filter(Boolean)
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

export function isHomeworldOrResidents(string: string) {
  return string === 'Homeworld' || string === 'Residents'
}
