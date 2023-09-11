import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";


interface FilmProps {
    id?: number;
    overview?: string;
    map: any;   
}

interface GlobalContexProps {
    film: FilmProps ;
    setFilm: (film: FilmProps) => void ;  

}


const myContextApi = createContext( {} as GlobalContexProps)

type ContextProps = {
    children: React.ReactNode
}

export const UserContextProvider = ({children} : ContextProps) => {
    const [film, setFilm] = useState<FilmProps>([]) 
    

    return (
        <myContextApi.Provider value={{ film, setFilm }}>
            {children}
        </myContextApi.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContextApi = () => {
    const [ film, setFilm ] = useState([])    
    
    const [searchParams] = useSearchParams() 

    const query = searchParams.get('q')
   
    const getSearchMoviesTop = async (url:string) => {
     
        const res = await fetch(url)
        const data = await res.json()
        setFilm(data.results)
    }  

    const getSearchMoviesTopi = async (url:string) => {
     
        const res = await fetch(url)
        const data = await res.json()
        setFilm(data)
    }  

    return {       
        getSearchMoviesTop, 
        getSearchMoviesTopi,       
        film,      
        query  
    };
};

