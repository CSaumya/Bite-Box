import React from 'react'
import { useDispatch } from 'react-redux'
import{setSearch} from '../redux/Slice/SearchSlice'
import logo from'./../assets/BiteBox-Logo.png'

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className='flex flex-col lg:flex-row justify-between items-center py-3 mx-6'>
      <div>
        <h3 className='text-[#ffaa00] font-bold text-2xl' >{new Date().toUTCString().slice(0,16)}</h3>
        <img src={logo} alt="" className='h-20 w-20' />
      </div>
      <div>
        <input type="search" 
        name='search' 
        placeholder='Search here' 
        autoComplete='off'
        onChange={(e) => dispatch (setSearch(e.target.value))}
        className='p-3 border border-amber-400 rounded-b-4xl outline-0 w-full lg:w-[25vw] ' />
        
      </div>
    </nav>
  )
}

export default Navbar
