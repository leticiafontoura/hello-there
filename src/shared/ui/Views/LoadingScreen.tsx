import Loader from '../../../assets/svgs/lightsaber.svg?react'

function LoadingScreen() {
  return (
    <div className='page-container__backdrop-loading'>
      <Loader />
    </div>
  )
}

export default LoadingScreen