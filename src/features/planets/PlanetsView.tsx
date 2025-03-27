import { getPlanetsList } from './api'
import PageContainer from '../../shared/components/Pages/PageContainer'

function PlanetsView() {
  return <PageContainer queryFn={getPlanetsList} queryKey='planets' />
}

export default PlanetsView
