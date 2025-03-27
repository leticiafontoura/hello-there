import CardFeatureContainer from '../../shared/components/Pages/CardFeatureContainer'
import { getFavorites } from './api'

function FavoritesView() {
  return (
    <CardFeatureContainer
      queryFn={getFavorites}
      queryKey='favorites'
      hasSubset
    />
  )
}

export default FavoritesView
