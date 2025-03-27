import { getCharactersList } from './api'
import CardFeatureContainer from '../../shared/components/Pages/CardFeatureContainer'

function CharactersView() {
  return <CardFeatureContainer queryFn={getCharactersList} queryKey='people' />
}

export default CharactersView
