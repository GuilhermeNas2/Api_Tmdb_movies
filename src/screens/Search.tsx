import NavBar from "../componentes/navBar"
import { useEffect } from "react"
import MoviesCard from "../componentes/moviesCart"
import { useGlobalContextApi } from "../shared/hooks/useApiContext"

    const searchURL = import.meta.env.VITE_SEARCH
    const apiKEY = import.meta.env.VITE_API_KEY

const Search = () => {

    const { film, getSearchMoviesTop, query } = useGlobalContextApi()


    useEffect(() => {
        const lintkToURL = `${searchURL}?${apiKEY}&query=${query}`
        getSearchMoviesTop(lintkToURL)
    }, [query])

    return (
        <div>
            <NavBar/> 
            <div className="bg-black/80 flex flex-col items-center justify-center">
                <h1 className="text-white font-bold text-lg">Filme Premiados</h1>
                    <div className="flex flex-wrap w-4/5 justify-center h-full gap-2">            
                        {
                            film.length > 0 && film.map((movies) =>  <MoviesCard key={movies.id} movie={movies} />)
                        }
                    </div>
            </div>
        </div>
    )
}

export default Search