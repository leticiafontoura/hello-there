import { NavLink } from 'react-router'
import './NavigationBar.scss'

import HelloThereLogo from '../../../assets/svgs/navbar/hello-there.svg?react'
import { INavigationLinks } from '../Header/Header'

interface Props {
  navLinks: Array<INavigationLinks>
}

function NavigationBar({ navLinks }: Props) {
  return (
    <nav className='main-nav'>
      <span className='main-nav-logo'>
        <NavLink to='/' title='home'>
          <HelloThereLogo height={45} aria-label='hello there logo' />
        </NavLink>
      </span>
      <ul>
        {navLinks.map(({ href, text, icon }) => (
          <li key={href}>
            <NavLink
              to={href}
              title={text}
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
