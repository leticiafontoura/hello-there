import { Route, Routes } from 'react-router'
import PlanetsView from './features/planets/PlanetsView.tsx'
import CharactersView from './features/characters/CharactersView.tsx'
import FavoritesView from './features/favorites/FavoritesView.tsx'
import Home from './Home.tsx'
import PlanetInfo from './features/planets/PlanetInfo.tsx'
import CharacterInfo from './features/characters/CharacterInfo.tsx'

function RoutesComponent() {
  return (
    <Routes>
      <Route path='/hello-there' element={<Home />} />
      <Route path='people' element={<CharactersView />} />
      <Route path='people/:id' element={<CharacterInfo />} />
      <Route path='planets' element={<PlanetsView />} />
      <Route path='planets/:id' element={<PlanetInfo />} />
      <Route path='/favorites' element={<FavoritesView />} />
    </Routes>
  )
}

export default RoutesComponent
