import { getCharactersList } from './api'
import PageContainer from '../../shared/components/Pages/PageContainer'

function CharactersView() {
  return <PageContainer queryFn={getCharactersList} queryKey='people' />
}

export default CharactersView
