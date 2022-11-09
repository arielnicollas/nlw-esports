import { MagnifyingGlassPlus } from "phosphor-react"


export default function CreatedAdBanner() {
    return(
        <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
                <MagnifyingGlassPlus size={24} />
                Publicar anúncio
        </button>
   ) }