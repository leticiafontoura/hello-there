import { useState } from 'react'
import SelectedFavoriteIcon from '../../../assets/svgs/favoriteIconFull.svg'
import UnselectedFavoriteIcon from '../../../assets/svgs/favoriteIconOutline.svg'

import './Card.scss'
import { useFavorites } from '../../hooks/useFavorites'
import { Item } from '../../entities/Card'

interface Props {
  cardTitle: string
  cardDetails: Item
}

function Card({ cardTitle, cardDetails }: Props) {
  const [loadAll, setLoadAll] = useState(false)
  const cardInfo = loadAll
    ? Object.entries(cardDetails)
    : Object.entries(cardDetails)?.slice(0, 4)
  const { isFavorite, toggleFavorite } = useFavorites(cardTitle)
  return (
    <article className='card'>
      <div className='card__header'>
        <h2 className='card__title'>{cardTitle}</h2>
        <img
          alt='favorite icon'
          onClick={() => toggleFavorite(cardDetails)}
          src={isFavorite ? SelectedFavoriteIcon : UnselectedFavoriteIcon}
        />
      </div>
      <div className='card__body'>
        <ul>
          {cardInfo.map(([key, value]) => (
            <li key={key}>
              <span>{key}:</span> {value}
            </li>
          ))}
        </ul>
        <button
          className='more-info-btn'
          aria-label='mais informações sobre o card'
          onClick={() => setLoadAll(!loadAll)}
        >
          {!loadAll ? '+' : '- '} infos
        </button>
      </div>
    </article>
  )
}

export default Card
