import { useState, useEffect } from 'react'
import Paginacion from './paginacion'
import Search from './Search'
import Loading from './loading'
import { Link } from 'react-router-dom'


export default function Personajes() {
    const [personajes, setPersonajes] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [totalPages, setTotalPages] = useState(1)

    const api = `https://dragonball-api.com/api/characters?page=${page}&limit=12`

    useEffect(()=>{
        setLoading(true)
        fetch(api)
        .then(res => res.json())
        .then(data => {
            const {items} = data
            setTotalPages(data.meta.totalPages)
            console.log(totalPages)
            if (items) {
                setPersonajes(items)
            }else{
                setPersonajes([])
                setError('No se encontraron personajes')
            }setLoading(false) 
        })
        .catch(err => {
            setError(err)
            setLoading(false)
        })
    },[api, page])

   const FilterName = (personaje) => {
      return personaje.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  }

const FilterPersonajes = FilterName(personajes)

  return (
    <>
    <section className='flex justify-center items-center'>
        {loading && <Loading />}
        {error && <h1>{error}</h1>}
    </section>

   

    <Search  setSearch={setSearch} />
 
    <section className='container'>
        {FilterPersonajes.map(personaje => (
          
           <section
           className='flex flex-col justify-center items-center w-[320px] md:w-[280px] h-[515px] bg-[#303030] rounded-xl group mb-10 m-auto'
           key={personaje.id}>
            
            
            <section className='z-200 relativo w-full h-[60%] bg-bg-bg-hero-image bg-no-repeat bg-cover rounded-t-xl '>

            <Link to={`/personaje/${personaje.id}`}>
            <img 
              src={personaje.image} alt="personaje" className='z-100 w-[100%] h-[330px] object-contain  rounded-t-xl m-auto relative -top-2 object-center  transition-transform duration-500 cursor-pointer group-hover:scale-125 ' />

            </Link>
            </section>

            <section className='z-10 w-full h-[40%]  rounded-xl '>
            
            <div className='ml-3'>        
            <p className='text-3xl font-bold text-nowrap truncate'>{personaje.name}</p>
            <div className='flex gap-2'>
                <p className='text-lg text-yellow-500'>{personaje.race}</p>
                <span className='text-lg text-yellow-500'>-</span>
                <p className='text-lg text-yellow-500'>{personaje.gender}</p>
            </div>
            <div className='flex flex-col '>
            <p className='text-lg '>Base KI: </p>
            <span className='leading-none text-lg text-yellow-500'>{personaje.ki}</span>
            <p className='text-lg '>Total KI: </p>
            <span className='leading-none text-lg text-yellow-500'>{personaje.maxKi}</span>
            <p className='text-lg '>Afiliation:</p>
            <span className='leading-none text-lg text-yellow-500'>{personaje.affiliation}</span>
            </div>
            </div>
            </section>
         

         
           </section>

           
        ))}
    </section>

    <section className='mt-2 mb-6'>
    <Paginacion totalPages={totalPages} page={page} setPage={setPage} />
    </section>
   
    </>
  )
}   