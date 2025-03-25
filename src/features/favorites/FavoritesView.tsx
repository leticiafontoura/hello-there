import PageContainer from '../../shared/components/Page/PageContainer'
import { getFavorites } from './api'

function FavoritesView() {
  return <PageContainer queryFn={getFavorites} queryKey='favorites' hasSubset />
}

export default FavoritesView
