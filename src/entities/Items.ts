export type CharacterDetails = {
  name: string
  birth_year: string
  eye_color: string
  gender: 'Male' | 'Female' | 'unknown' | 'n/a'
  hair_color: string
  height: string
  mass: string
  skin_color: string
  homeworld: string
  films: Array<string>
  species: Array<string>
  starships: Array<string>
  vehicles: Array<string>
  url: string
  created: string
  edited: string
}

export type PlanetDetails = {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: string[]
  films: string[]
  created: string
  edited: string
  url: string
}

export type Item = CharacterDetails | PlanetDetails

export interface ApiReturn {
  results: Array<Item>
  count: number
}

interface TransformedCharacter {
  Name: string
  'Birth Year': string
  'Eye color': string
  Homeworld: string
  Gender: string
  Height: string
  Mass: string
  'Hair color': string
  'Skin color': string
}

interface TransformedPlanet {
  Name: string
  Population: string
  Residents: string[]
  Gravity: string
  Terrain: string
  'Surface water': string
  Climate: string
  'Rotation period': string
  'Orbital period': string
  Diameter: string
}

export type TransformedItem = TransformedCharacter | TransformedPlanet
