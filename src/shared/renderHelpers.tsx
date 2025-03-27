import { NavLink } from "react-router"

interface IHyperlink {
  name: string
  url: string
}

export function handleHyperlink(item: Array<IHyperlink>, isLoading: boolean) {
  if (isLoading) return <p>Carregando informações...</p>
  if (item.length) {
    return item.map((it) => (
      <p>
        <NavLink to={it.url}>{it.name}</NavLink>
      </p>
    ))
  }
  return 'None'
}