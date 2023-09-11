import { useEffect } from "react";
import MoviesCard from "../componentes/moviesCart";
import { useGlobalContextApi } from "../shared/hooks/useApiContext";

const Home = () => {

  const moviesKey = import.meta.env.VITE_API_KEY;
  const movieURL = import.meta.env.VITE_API 

  const  { film, getSearchMoviesTop} = useGlobalContextApi()  

  useEffect(() => {
    const topRatedURL = `${movieURL}top_rated?${moviesKey}`;
    getSearchMoviesTop(topRatedURL)
  }, [])    
      
    return (
        <div className="bg-black/90 flex flex-col h-full items-center justify-center">
          <h1 className="text-white m-10 font-bold text-lg">Filme Premiados</h1>
          <div className="flex flex-wrap w-4/5 justify-center h-full gap-2">
            {film.length && 
            film.map((movie) => <MoviesCard key={movie.id} movie={movie} />)}
          </div>
        </div>
    )
}

export default Home