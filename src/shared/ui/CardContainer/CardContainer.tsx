import { Item } from '../../../entities/Items'
import Card from '../../components/Card/Card'
import './CardContainer.scss'

interface Props {
  data: Array<Item>
}

function CardContainer({ data }: Props) {
  return (
    <section className='card-container'>
      {data.map((info, index) => (
        <Card key={index} cardTitle={info.name} cardDetails={info} />
      ))}
    </section>
  )
}

export default CardContainer
