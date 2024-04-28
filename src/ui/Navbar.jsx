import React from 'react'
import SearchOrder from '../features /order/SearchOrder'
import { Link } from 'react-router-dom'
import useFadeInOnScroll from '../utilties /useObserve'

export default function Navbar() {
  const [ref , isVisible] = useFadeInOnScroll()
  return (
    <nav ref={ref}  className={`${isVisible ?" transition-all duration-300 opacity-1" : "opacity-0"} bg-yellow-300`}>
    <div className="justify-between flex items-center max-w-3xl py-2 mx-auto ">
      <Link to="/">L I G H T  D E L I V E R Y </Link>
      <SearchOrder/>
    </div>
    </nav>
  )
}
