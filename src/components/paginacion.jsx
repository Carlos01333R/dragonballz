// eslint-disable-next-line react/prop-types
export default function Paginacion({totalPages, page, setPage}) {

    const HandlePrevious = ()=>{
        if(page > 1){
            setPage(page-1)
            window.scrollTo({ top: 500, behavior: 'smooth' });
        }
    }

   const HandleNext = ()=>{
      if(page < totalPages){
          setPage(page+1)
          window.scrollTo({ top: 500, behavior: 'smooth' });
      }
  }
     return (
     
     <>

  
        <div className='flex gap-2 justify-center items-center'>
     {page == 1 ? (

        <div className='flex gap-2 justify-center items-center'>
        <button 
        className="text-lg underline "
        onClick={HandleNext}>Next</button>
        <img 
        className="w-[30px] object-cover rotate-180 items-center "
        src="https://i.ytimg.com/vi/ZqnzjcX2Rzs/maxresdefault.jpg" alt="goku" />

        </div>
      
      ) : (

        <div className='flex gap-2 justify-center items-center'>
        <img 
     className="w-[30px] object-cover  "
     src="https://i.ytimg.com/vi/ZqnzjcX2Rzs/maxresdefault.jpg" alt="goku" />
      <button 
      className="text-lg underline "
      onClick={HandlePrevious}>Previous</button>

      <button 
      className="text-lg underline "
      onClick={HandleNext}>Next</button>
        <img 
        className="w-[30px] object-cover rotate-180 "
        src="https://i.ytimg.com/vi/ZqnzjcX2Rzs/maxresdefault.jpg" alt="goku" />

        </div>
     )}

        </div>
    </>)
}