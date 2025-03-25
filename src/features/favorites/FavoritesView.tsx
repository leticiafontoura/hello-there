import PageContainer from '../../shared/components/Pages/PageContainer'
import { getFavorites } from './api'

function FavoritesView() {
  return <PageContainer queryFn={getFavorites} queryKey='favorites' hasSubset />
}

export default FavoritesView
