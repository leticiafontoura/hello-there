import { useQueryClient } from '@tanstack/react-query'
import { NavLink, useLocation } from 'react-router'
import { capitalizeFirstChar, splitLocationPathname } from '../../helpers'
import ChevronRight from '../../../assets/svgs/chevronRight.svg?react'
import './Breadcrumbs.scss'
import { Item } from '../../entities/Items'
import { useEffect, useState } from 'react'

function Breadcrumbs() {
  const queryClient = useQueryClient()
  const { pathname } = useLocation()
  const splittedPathname = splitLocationPathname(pathname)
  const queryKey = [splittedPathname[0], pathname.replace('/', '')]

  const id = splittedPathname[1]

  const [cachedData, setCachedData] = useState<Item | null>(null)

  useEffect(() => {
    const data = queryClient.getQueryData<Item>(queryKey)
    if (data) setCachedData(data)

    const unsubscribe = queryClient.getQueryCache().subscribe(() => {
      const updatedData = queryClient.getQueryData<Item>(queryKey)
      if (updatedData) {
        setCachedData(updatedData)
      }
    })
    return () => unsubscribe()
  }, [queryClient, queryKey])

  const breadcrumbItems = [
    {
      name: 'Home',
      to: '/',
      isActive: true,
    },
    {
      name: capitalizeFirstChar(splittedPathname[0] || ''),
      to: `/${splittedPathname[0]}`,
      isActive: splittedPathname.length > 1,
    },
    {
      name:
        cachedData?.name && splittedPathname.length === 2
          ? cachedData.name
          : '',
      to: `/${splittedPathname[0]}/${id}`,
      id,
    },
  ]

  return (
    <nav aria-label='breadcrumbs' className='breadcrumbs'>
      <ul>
        {breadcrumbItems.map((item, index) => (
          <>
            <li key={index}>
              <NavLink
                to={item.to}
                end
                className={`breadcrumb-item ${item.id ? 'active' : ''}`}
              >
                {item.name}
              </NavLink>
            </li>
            {item.isActive ? (
              <span>
                <ChevronRight />
              </span>
            ) : (
              ''
            )}
          </>
        ))}
      </ul>
    </nav>
  )
}

export default Breadcrumbs
