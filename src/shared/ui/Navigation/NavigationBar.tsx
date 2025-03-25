import { NavLink } from 'react-router'
import './NavigationBar.scss'

import HelloThereLogo from '../../../assets/svgs/navbar/hello-there.svg?react'
import { NavigationLinks } from '../../entities/Navigation'

interface Props {
  navLinks: Array<NavigationLinks>
}

function NavigationBar({ navLinks }: Props) {
  return (
    <nav className='main-nav'>
      <span className='main-nav-logo'>
        <NavLink to='/' title='logo'>
          <HelloThereLogo height={45} />
        </NavLink>
      </span>
      <ul>
        {navLinks.map((navLink) => (
          <li key={navLink.href}>
            <NavLink
              to={navLink.href}
              className={({ isActive }) =>
                `main-nav-item ${isActive ? 'active' : ''}`
              }
            >
              {navLink.text}
              <span>{navLink.icon}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavigationBar
