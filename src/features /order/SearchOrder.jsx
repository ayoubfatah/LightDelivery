import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function SearchOrder() {
    const [query , setQuery] = useState()
    const navigate = useNavigate()
;
    function handleSubmit(e){
       e.preventDefault();
       if(!query) return
       navigate(`order/${query}`)
       setQuery("")
    }
  return (
<form onSubmit={handleSubmit} action="" className="">
   <input  className="h-10 bg-yellow-100  w-[300px] px-5 rounded-full" type="text" onChange={(e)=> setQuery(e.target.value)} placeholder="search order Number"  value={query}/>
   </form>
  )
}
