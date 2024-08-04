import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Loading from '../components/loading'
import '../index.css'

export default function Personaje() {

    const {id} = useParams()
    const [personaje, setPersonaje] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [transformations, setTransformations] = useState([])
    
    

    const api = `https://dragonball-api.com/api/characters/${id}`

    useEffect(()=>{
        setLoading(true)
        fetch(api)
        .then(res => res.json())
        .then(data => {
            const {transformations} = data
            setTransformations(transformations)
            if (data && data.name) {
                setPersonaje(data)  
            }else{
                setPersonaje({})
                setError('No se encontraron personajes')
            }setLoading(false)
        })
        .catch(err => {
            setError(err)
            setLoading(false)
        })
    },[api, id])

    return (
        <>

        <header>
            <Header />
        </header>

       
        <section className='flex justify-center items-center h-full'>
            {loading && <Loading />}
            {error && (
                <>
            <div className='flex flex-col gap-2 relative w-full h-full justify-center items-center'>

            <div className="absolute inset-0 w-full
            bg-bg-sayayin-image bg-no-repeat bg-cover opacity-10 h-screen"></div>
           <img src="../../public/goku404.png" alt="" />
            <p className='text-center text-2xl font-bold text-yellow-500'>{error}</p>
            </div>
           
            </>
            
            )}
        </section>

        {!loading && !error && personaje.name && (
           <section className="relative w-full h-screen">
            <div 
            
            style={{
                maskImage: 'linear-gradient(black, 90%, transparent)',
            }}
            className="absolute inset-0 bg-bg-sayayin-image bg-repeat bg-cover opacity-15 h-screen"></div>


            <div className="relative z-10 flex flex-col md:flex-row w-[90] justify-center items-center mb-8">

            
            <section className='flex items-center w-full md:w-[30%]  h-auto'>
            <img 
              src={personaje.image} alt="personaje" className='z-100 w-[100%] h-[300px] md:h-[500px] object-contain  rounded-t-xl m-auto relative -top-2 object-center  transition-transform duration-500 cursor-pointer hover:scale-110 hover:drop-shadow-custom ' />
            </section>

            <section className='flex items-center w-[90%] md:w-[60%] h-auto'>
               
            <div className='ml-3'> 
            <p className='text-3xl font-bold text-nowrap truncate mt-2'>{personaje.name}</p>
          
            
            <div className='flex gap-2'>
                <p className='text-lg text-yellow-500'>{personaje.race}</p>
                <span className='text-lg text-yellow-500'>-</span>
                <p className='text-lg text-yellow-500'>{personaje.gender}</p>
            </div>
            <hr />

            <section className='mt-6 mb-6'>
                <p className='text-sm'>{personaje.description}</p>
            </section>

            <hr />
            <section className='mb-6 mt-4 '>
                <p className='text-2xl font-bold'>Planeta de origen:</p>

                <section className='flex flex-col md:flex-row gap-8 w-full mb-3 justify-center items-center'>

                <div className=' flex md:flex-col justify-center items-center w-[30%] gap-4 md:gap-0 mt-4 md:mt-0'>
                {personaje.originPlanet && personaje.originPlanet.image && (
                    <img
                        src={personaje.originPlanet.image}
                        alt={personaje.originPlanet.name}
                        className='w-[120px] md:w-[80px] object-contain rounded-full m-auto relative -top-2 object-center transition-transform duration-500 cursor-pointer hover:scale-110
                        mt-2
                        '
                    />
                )}
                <p className='text-yellow-500'>{personaje.originPlanet && personaje.originPlanet.name}</p>

                </div>
                    
                <div className='w-[70%]'>
                <p>{personaje.originPlanet && personaje.originPlanet.description}</p>
                </div>
                </section>
            <hr />  
         
            </section>

            <section className='flex gap-3  justify-center items-center mb-5'> 
            <div className='flex flex-col '>
            <p className='text-lg text-center '>Base KI: </p>
            <span className='leading-none text-lg text-yellow-500'>{personaje.ki}</span>
            </div>

            <div className='flex flex-col '>
            <p className='text-lg text-center'>Total KI: </p>
            <span className='leading-none text-lg text-yellow-500'>{personaje.maxKi}</span>
            </div>

            <div className='flex flex-col '>
            <p className='text-lg text-center'>Afiliation:</p>
            <span className='leading-none text-lg text-yellow-500'>{personaje.affiliation}</span>
            </div>
            </section>

            </div>

            </section>
            </div>


            <section className='w-full flex flex-col justify-center items-center mb-5'>
            {transformations && transformations.length > 0 &&(
                 <p className='r text-3xl font-bold'>Transformaciones</p>
            )}

            <div className='flex flex-col md:flex-row w-[95%]'>
            {transformations && transformations.length > 0 && transformations.map(transformation => (
                
                <div className='w-[200px] h-auto mt-6 mx-auto ' key={transformation.id}>
                <img 
                className=' w-full h-[300px]  rounded-t-xl m-auto relative -top-2 object-contain  transition-transform duration-500 cursor-pointer hover:scale-125 hover:drop-shadow-custom'
                src={transformation.image} alt="" />
                

                <div className='ml-3 text-center md:text-start '>        
            <p className='text-3xl font-bold text-nowrap truncate'>{transformation.name}</p>
            
            <div className='flex flex-col mb-10'>
            <p className='text-lg '>KI: </p>
            <span className='leading-none text-lg text-yellow-500'>{transformation.ki}</span>
           
            <p className='text-lg '>Afiliation:</p>
            <span className='leading-none text-lg text-yellow-500'>{personaje.affiliation}</span>
            </div>
            </div>

                </div>
                
              ))}

        </div>
            </section>

        </section>


            )}
   

           
        </>
    )
}