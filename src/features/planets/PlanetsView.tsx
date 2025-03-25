import { getPlanets } from './api'
import PageContainer from '../../shared/components/Pages/PageContainer'

function PlanetsView() {
  return <PageContainer queryFn={getPlanets} queryKey='planets' />
}

export default PlanetsView
