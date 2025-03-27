import './Filter.scss'

interface Props {
  handleSearchWord: (sw: string) => void
}

function SearchWordFilter({ handleSearchWord }: Props) {
  return (
    <div className='filter-container'>
      <label htmlFor='search-word' aria-label='pesquisar por nome'>Pesquisar por nome:</label>
      <input
        onChange={(e) => {
          handleSearchWord(e.target.value)
        }}
        name='search-word'
        id='search-word'
        placeholder='Digite 3 ou mais caracteres'
        aria-placeholder='Digite 3 ou mais caracteres'
      />
    </div>
  )
}

export default SearchWordFilter
