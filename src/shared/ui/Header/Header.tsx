import { NavigationLinks } from '../../entities/Navigation'
import NavigationBar from '../Navigation/NavigationBar'
import './Header.scss'
import Characters from '../../../assets/svgs/navbar/characters.svg?react'
import Planets from '../../../assets/svgs/navbar/tatooine.svg?react'
import Favorites from '../../../assets/svgs/navbar/favorites.svg?react'

function Header() {
  const navLinks: Array<NavigationLinks> = [
    {
      text: 'Personagens',
      icon: <Characters />,
      href: '/personagens',
    },
    {
      text: 'Planetas',
      icon: <Planets />,
      href: '/planetas',
    },
    {
      text: 'Favoritos',
      icon: <Favorites />,
      href: '/favoritos',
    },
  ]
  return (
    <header className='main-header'>
      <NavigationBar navLinks={navLinks} />
    </header>
  )
}

export default Header
