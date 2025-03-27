import Loader from '../../../assets/svgs/favoriteIconOutline.svg?react'

function LoadingScreen() {
  return (
    <div className='page-container__backdrop-loading'>
      <Loader />
    </div>
  )
}

export default LoadingScreen