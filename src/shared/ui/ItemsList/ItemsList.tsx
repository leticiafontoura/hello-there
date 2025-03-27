import { urlLocation } from '../../components/Card/Card'
import { getItemId, isHomeworldOrResidents } from '../../helpers'
import { useItemHyperlinks } from '../../hooks/useItemHyperlinks'
import { TransformedItem } from '../../entities/Items'
import { handleHyperlink } from '../../renderHelpers'

interface Props {
  item: TransformedItem
  fullList?: boolean
}

function ItemsList({ item, fullList }: Props) {
  const hyperlinkedResponse = useItemHyperlinks(
    'Homeworld' in item ? item.Homeworld : item.Residents
  )

  const hyperlinkedData = hyperlinkedResponse.map((query) => query.data).filter(Boolean)

  const hyperlinkedDataRender = hyperlinkedData.map((item) => ({
    name: item.name,
    url: `/${urlLocation(item.url)}/${getItemId(item.url)}/`
  }))

  const formattedData = fullList
    ? Object.entries(item)
    : Object.entries(item).slice(0, 4)

    if (!formattedData.length) return null

  return (
    <>
      {formattedData.length
        ? formattedData.map(([key, value]) => (
            <li key={key}>
              <span>{key}:</span>{' '}
              {isHomeworldOrResidents(key)
                ? handleHyperlink(hyperlinkedDataRender)
                : value}
            </li>
          ))
        : null}
    </>
  )
}

export default ItemsList
