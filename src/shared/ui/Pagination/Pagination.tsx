import ChevronLeft from '../../../assets/svgs/chevronLeft.svg'
import ChevronRight from '../../../assets/svgs/chevronRight.svg'
import './Pagination.scss'

interface Props {
  totalPages: number
  handleCurrentPage: (currentPage: number) => void
  currentPage: number
}

function Pagination({ totalPages, handleCurrentPage, currentPage }: Props) {
  const pageList = Array.from({ length: totalPages }, (_, number) => number + 1)
  const isPrevBtnDisabled = currentPage <= 1
  const isNextBtnDisabled = currentPage >= totalPages

  function handleActivePage(page: number) {
    if (page === currentPage) return ' --active'
    return ''
  }

  if (!totalPages) return null

  return (
    <div className='pagination-container'>
      <button
        onClick={() => handleCurrentPage(currentPage - 1)}
        className='pagination__button'
        disabled={isPrevBtnDisabled}
        aria-label='previous page button'
      >
        <img src={ChevronLeft} aria-label='previous page' alt='previous' />
      </button>
      {pageList.map((page) => (
        <span
          className={`pagination${handleActivePage(page)}`}
          onClick={() => handleCurrentPage(page)}
          key={page}
          role='button'
          tabIndex={0}
          aria-label={`go to page ${page}`}
        >
          {page}
        </span>
      ))}
      <button
        onClick={() => handleCurrentPage(currentPage + 1)}
        className='pagination__button'
        disabled={isNextBtnDisabled}
        aria-label='next page button'
      >
        <img src={ChevronRight} aria-label='next page' alt='next' />
      </button>
    </div>
  )
}

export default Pagination
