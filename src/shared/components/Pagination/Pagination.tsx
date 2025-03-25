import ChevronLeft from '../../../assets/svgs/chevronLeft.svg'
import ChevronRight from '../../../assets/svgs/chevronRight.svg'
import './Pagination.scss'

interface Props {
  totalPgs: number
  handleCurrentPage: (currentPage: number) => void
  currentPage: number
}

function Pagination({ totalPgs, handleCurrentPage, currentPage }: Props) {
  const pageList = Array.from({ length: totalPgs }, (_, number) => number + 1)
  const isPrevDisabled = currentPage <= 1
  const isNextDisabled = currentPage >= totalPgs
  function handleActivePage(page: number) {
    if (page === currentPage) return ' --active'
    return ''
  }

  if (!totalPgs) return null

  return (
    <div className='pagination-container'>
      <img
        role='button'
        src={ChevronLeft}
        onClick={() =>
          isPrevDisabled ? {} : handleCurrentPage(currentPage - 1)
        }
        className={
          isPrevDisabled ? 'pagination__button-disabled' : 'pagination__button'
        }
      />
      {pageList.map((page) => (
        <span
          className={`pagination${handleActivePage(page)}`}
          onClick={() => handleCurrentPage(page)}
        >
          {page}
        </span>
      ))}
      <img
        role='button'
        src={ChevronRight}
        onClick={() =>
          isNextDisabled ? {} : handleCurrentPage(currentPage + 1)
        }
        className={
          isNextDisabled ? 'pagination__button-disabled' : 'pagination__button'
        }
      />
    </div>
  )
}

export default Pagination
