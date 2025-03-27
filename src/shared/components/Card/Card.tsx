import SelectedFavoriteIcon from '../../../assets/svgs/favoriteIconFull.svg'
import UnselectedFavoriteIcon from '../../../assets/svgs/favoriteIconOutline.svg'

import './Card.scss'
import { useFavorites } from '../../hooks/useFavorites'
import { Item } from '../../../entities/Items'
import { NavLink } from 'react-router'
import {
  getItemId,
  splitLocationPathname,
  transformItemJson,
} from '../../helpers'
import ItemsList from '../ItemsList/ItemsList'

interface Props {
  cardTitle: string
  cardDetails: Item
}

export function urlLocation(item: string) {
  if (item) {
    const url = item.split('/').splice(-3, 1)
    return url[0]
  }
}

function Card({ cardTitle, cardDetails }: Props) {
  const pathname = splitLocationPathname(cardDetails.url).slice(-2, -1)[0]
  const transformedCardDetails = transformItemJson(cardDetails)
  const id = getItemId(cardDetails.url)
  const { isFavorite, toggleFavorite } = useFavorites(cardTitle)
  const favoriteIcon = isFavorite
    ? SelectedFavoriteIcon
    : UnselectedFavoriteIcon
  const detailsPath = `/${pathname}/${id}/`

  return (
    <article className='card' aria-roledescription='card'>
      <div className='card__header'>
        <h2 className='card__title'>{cardTitle}</h2>
        <button aria-label='favorite button' onClick={() => toggleFavorite(cardDetails)}>
          <img
            alt='favorite icon'
            src={favoriteIcon}
            title='favorite'
          />
        </button>
      </div>
      <div className='card__body'>
        <ul>
          <ItemsList item={transformedCardDetails} />
        </ul>
        <NavLink className='more-info-btn' to={detailsPath} aria-label={`navigate to ${detailsPath}`}>
          + infos
        </NavLink>
      </div>
    </article>
  )
}

export default Card
