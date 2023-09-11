
import {Link, useNavigate} from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
import { useState } from 'react'

const NavBar = ( ) => {

  const navigate = useNavigate()

  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!search) return

    navigate(`/search?q=${search}`, { replace: true })
    setSearch('')
  } 
    
    return (
       
      <div className='bg-black h-20 p-5'>
        <nav className='flex gap-4'>
          <h2>
            <Link to='/' className='font-bold text-yellow-400' >Movies</Link>
            <BiCameraMovie/>
          </h2>
          <form onSubmit={handleSubmit} >
            <input 
            className='w-full border-none outline-none p-2'
            type="text"
            value={search}
            onChange={(e)=> setSearch(e.target.value)} 
            placeholder='Busque um filme'/>            
            <button type='submit'><BiSearchAlt2/></button>
          </form>
        </nav>
      </div> 
     
    )
}
 
export default NavBar