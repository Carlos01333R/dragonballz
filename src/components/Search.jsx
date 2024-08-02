
// eslint-disable-next-line react/prop-types
export default function Search({setSearch}) {
    
    return (<>
        <section className='flex flex-col md:flex-row w-full justify-end  items-center gap-2 px-12'>
        <label 
        className="justify-self-end text-white text-xl font-bold flex items-center"
        htmlFor="">Busca tu personaje: </label>
        <input 
        type="text"
        placeholder="Goku, Gohan, Piccolo..."
        className="p-2 rounded-xl bg-zinc-800 text-white  outline-none flex items-center"
        onChange={e => setSearch(e.target.value)}
        />

     
       
        </section>
    </>)
}
