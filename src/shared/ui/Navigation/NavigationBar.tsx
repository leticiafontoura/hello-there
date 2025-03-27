import { NavLink } from 'react-router'
import './NavigationBar.scss'

import HelloThereLogo from '../../../assets/svgs/navbar/hello-there.svg?react'
import MenuDots from '../../../assets/svgs/menudots.svg?react'
import { INavigationLinks } from '../Header/Header'
import { useState } from 'react'

interface Props {
  navLinks: Array<INavigationLinks>
}

function NavigationBar({ navLinks }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className='main-nav'>
      <div className='logo-area'>
        <button
          className='mobile-menu'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='mobile menu button'
        >
          <MenuDots />
        </button>
        <span className='main-nav-logo'>
          <NavLink to='/' title='home' aria-label='navigate to home'>
            <HelloThereLogo height={45} aria-label='hello there logo' />
          </NavLink>
        </span>
      </div>
      <ul className={isMenuOpen ? 'nav-open' : ''}>
        {navLinks.map(({ href, text, icon }) => (
          <li key={href}>
            <NavLink
              to={href}
              title={text}
              aria-label={`navigate to ${href}`}
              className={({ isActive }) =>
                `main-nav-item ${isActive ? 'active' : ''}`
              }
            >
              {text}
              <span>{icon}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavigationBar
