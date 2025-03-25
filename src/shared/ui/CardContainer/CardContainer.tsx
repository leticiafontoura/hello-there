import { Item } from '../../entities/Card'
import Card from '../../components/Card/Card'
import './CardContainer.scss'

interface Props {
  data: Array<Item>
}

function CardContainer({ data }: Props) {
  return (
    <section className='card-container'>
      {data?.map((info) => <Card cardTitle={info.name} cardDetails={info} />)}
    </section>
  )
}

export default CardContainer
