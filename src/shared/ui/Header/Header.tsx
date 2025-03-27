import NavigationBar from '../Navigation/NavigationBar'
import './Header.scss'
import Characters from '../../../assets/svgs/navbar/characterOutline.svg?react'
import Planets from '../../../assets/svgs/navbar/planetOutline.svg?react'
import Favorites from '../../../assets/svgs/navbar/favoriteOutline.svg?react'
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
