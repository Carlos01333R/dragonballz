import { Link } from "react-router-dom";

export default function Header() {
    return (<>
        <section 
        className='flex justify-between items-center w-full h-[60px]  rounded-b-lg bg-white '>
          
        <div>
            <Link to="/">
                <img 
                className="w-[180px] ml-2 md:ml-12 relative "
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Dragon_Ball_Super.png/799px-Dragon_Ball_Super.png" alt="" />
            </Link>
           
        </div>


        <div className="flex items-center gap-4 text-black mr-12">
        <a 
        className="font-bold text-lg hover:text-[#f0a10f] transition-colors"
        href="https://web.dragonball-api.com/documentation">Docs</a>
        <a 
       className="font-bold text-lg hover:text-[#f0a10f] transition-colors"
        href="https://web.dragonball-api.com/about">About</a>
        <a
        className="text-lg bg-black hover:bg-[#f0a10f] transition-colors text-white p-1 rounded-lg hidden md:block"
        href="https://web.dragonball-api.com/support">SUPPORT US</a>
        </div>
        </section>
    </>)
}