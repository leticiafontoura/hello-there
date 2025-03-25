import { getCharacters } from './api'
import PageContainer from '../../shared/components/Pages/PageContainer'

function CharactersView() {
  return <PageContainer queryFn={getCharacters} queryKey='characters' />
}

export default CharactersView
