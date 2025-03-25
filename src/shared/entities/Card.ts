type CharacterDetails = {
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

type PlanetDetails = {
  name: string
  climate: string
  population: string
}

export type Item = CharacterDetails | PlanetDetails

export interface ApiReturn {
  results: Array<Item>
  count: number
}
