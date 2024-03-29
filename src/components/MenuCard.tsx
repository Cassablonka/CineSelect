import { IMAGE_URL } from '../utils/constants'

const MenuCard = ({ posterPath }: any) => {
  if (!posterPath) return null
  return (
    <div className="w-40 pr-3">
      <img src={IMAGE_URL + posterPath} alt="movie card" />
    </div>
  )
}

export default MenuCard
