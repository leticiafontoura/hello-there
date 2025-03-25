import { Route, Routes } from 'react-router'
import PlanetsView from './features/planets/PlanetsView.tsx'
import CharactersView from './features/characters/CharactersView.tsx'
import FavoritesView from './features/favorites/FavoritesView.tsx'
import Home from './Home.tsx'
import './index.css'

function RoutesComponent() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/personagens' element={<CharactersView />} />
      <Route path='/planetas' element={<PlanetsView />} />
      <Route path='/favoritos' element={<FavoritesView />} />
    </Routes>
  )
}

export default RoutesComponent
