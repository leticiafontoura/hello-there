import { getPlanets } from './api'
import PageContainer from '../../shared/components/Page/PageContainer'

function PlanetsView() {
  return <PageContainer queryFn={getPlanets} queryKey='planets' />
}

export default PlanetsView
