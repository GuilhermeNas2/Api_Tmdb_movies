import { useEffect, useState } from "react"
import NavBar from "../componentes/navBar"
import { useParams } from "react-router-dom"
import { useGlobalContextApi } from "../shared/hooks/useApiContext"


    const movieURL = import.meta.env.VITE_API
    const apiKEY = import.meta.env.VITE_API_KEY
    const imagesURL = import.meta.env.VITE_IMG;

const Movies = () => {

  const { id } = useParams()
  
  const {film, getSearchMoviesTopi} = useGlobalContextApi()
 

  useEffect(()=> {
    const filmURL = `${movieURL}${id}?${apiKEY} `;
    getSearchMoviesTopi(filmURL)
  }, [])
    
  return (
      <>
      <NavBar/>
      <div>
        {
          film && (
            <div className="flex gap-4 p-3">
              <img src={imagesURL + film.poster_path}/>
              <div className="bg-black text-white p-9">
                <p>{film.overview}</p>
              </div>
            </div>
          )
        }
      </div>
      </>
    )
}

export default Movies