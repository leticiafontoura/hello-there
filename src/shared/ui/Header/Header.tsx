import NavigationBar from '../Navigation/NavigationBar'
import './Header.scss'
import Characters from '../../../assets/svgs/navbar/characters.svg?react'
import Planets from '../../../assets/svgs/navbar/tatooine.svg?react'
import Favorites from '../../../assets/svgs/navbar/favorites.svg?react'
import { ReactElement } from 'react'

export interface INavigationLinks {
  text: string
  icon: ReactElement
  href: string
}

const navLinks: Array<INavigationLinks> = [
  {
    text: 'People',
    icon: <Characters />,
    href: '/people',
  },
  {
    text: 'Planets',
    icon: <Planets />,
    href: '/planets',
  },
  {
    text: 'Favorites',
    icon: <Favorites />,
    href: '/favorites',
  },
]

function Header() {
  return (
    <header className='main-header'>
      <NavigationBar navLinks={navLinks} />
    </header>
  )
}

export default Header
