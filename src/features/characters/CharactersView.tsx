import { getCharacters } from './api'
import PageContainer from '../../shared/components/Page/PageContainer'

function CharactersView() {
  return <PageContainer queryFn={getCharacters} queryKey='characters' />
}

export default CharactersView
