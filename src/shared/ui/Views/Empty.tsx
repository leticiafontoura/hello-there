import LightSaber from '../../../assets/svgs/lightsaber.svg?react'
import './Views.scss'

function EmptySearch() {
  return (
    <article className="empty-search">
      <LightSaber  />
      <h1>Oops!</h1>
      <h2>Nada por aqui, hein.</h2>
    </article>
  )
}

export default EmptySearch