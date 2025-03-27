import DarthVader from '../../../assets/svgs/darth-vader.svg?react'
import './Views.scss'

function ErrorView() {
  return (
    <section className="error-search">
      <DarthVader />
      <h1>Oops!</h1>
      <h2>Tivemos um problema ao carregar as informações. Tente novamente.</h2>
    </section>
  )
}

export default ErrorView