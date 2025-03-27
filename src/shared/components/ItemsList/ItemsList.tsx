import { urlLocation } from '../Card/Card'
import { getItemId, isHomeworldOrResidents } from '../../helpers'
import { useItemHyperlinks } from '../../hooks/useItemHyperlinks'
import { Item, TransformedItem } from '../../../entities/Items'
import { handleHyperlink } from '../../renderHelpers'

interface Props {
  item: TransformedItem
  fullList?: boolean
}

function ItemsList({ item, fullList }: Props) {
  const formattedData = fullList
    ? Object.entries(item)
    : Object.entries(item).slice(0, 4)

  const urls = 'Homeworld' in item ? [item.Homeworld] : item.Residents

  const hyperlinkedResponse = useItemHyperlinks(urls.filter(Boolean))

  const isLoading = hyperlinkedResponse.some((query) => query.isFetching)

  const hyperlinkedData = hyperlinkedResponse
    .map((query) => query.data)
    .filter(Boolean) as Array<Item>

  const hyperlinkedDataRender = hyperlinkedData.map((item) => ({
    name: item.name,
    url: `/${urlLocation(item.url)}/${getItemId(item.url)}/`,
  }))

  if (!formattedData.length) return null

  return (
    <>
      {formattedData.length
        ? formattedData.map(([key, value]) => (
            <li key={key}>
              <span>{key}:</span>{' '}
              {isHomeworldOrResidents(key)
                ? handleHyperlink(hyperlinkedDataRender, isLoading)
                : value}
            </li>
          ))
        : null}
    </>
  )
}

export default ItemsList
