import MenuCard from './MenuCard'

const MenuList = ({ title, movies }: any) => {
  return (
    <div className="p-8 bg-black">
      <h1 className="text-lg pb-2 text-white font-medium">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie: any) => (
            <MenuCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuList
