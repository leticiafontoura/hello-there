import { getPlanetsList } from './api'
import CardFeatureContainer from '../../shared/components/Pages/CardFeatureContainer'

function PlanetsView() {
  return <CardFeatureContainer queryFn={getPlanetsList} queryKey='planets' />
}

export default PlanetsView
