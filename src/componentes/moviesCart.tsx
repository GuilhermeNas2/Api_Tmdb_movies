import { useNavigate } from "react-router-dom";

const imagesURL = import.meta.env.VITE_IMG;

type CardProps = {
    movie: {
        id: number,
        title:string,
        poster_path: string,
    }
        
    ;
    showlink?: boolean ;
}

const MoviesCard = ({movie}: CardProps) => {

    const navigate = useNavigate()

    const handleNavigate = () => {

        navigate(`/movie/${movie.id}`, { replace: true })        
    }
   

      return (       
      <>           
       {
        movie.poster_path &&  
        <div className="group/image relative w-1/5 text-white">  
            <img onClick={handleNavigate}  src={imagesURL + movie.poster_path} alt={movie.title} />                     
                <div className='group/edit invisible transition flex items-center justify-center absolute bottom-0 p-2 bg-black/80 w-full h-1/4 group-hover/image:visible ease-in duration-100'>
                   <h2 className="font-semibold text-lg" >{movie.title}</h2>  
                </div>
           
       </div>
            }
       </>
    
      )  
}

export default MoviesCard;