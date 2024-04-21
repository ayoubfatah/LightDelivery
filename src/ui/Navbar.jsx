import React from 'react'
import SearchOrder from '../features /order/SearchOrder'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-yellow-300">
    <div className="justify-between flex items-center max-w-3xl py-2 mx-auto ">
      <Link to="/">L I G H T  D E L I V E R Y </Link>
      <SearchOrder/>
    </div>
    </nav>
  )
}
