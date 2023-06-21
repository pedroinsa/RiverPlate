import React from 'react'
import { FaSearch } from 'react-icons/fa'
import river from '../Images/river.png'
import '../App.css'
export const Navbar = () => {
    return (
        <div className='w-full'>
            <a className='brand1' ><img src={river} /></a>
            <ul className='flex  flex-row nav-text text-white justify-around'>
                <li className=' hover:bg-red-600 text-base font-medium cursor-pointer ml-12'>FÚTBOL</li>
                <li className=' hover:bg-red-600 text-base font-medium cursor-pointer mx-0'>INSTITUCIONAL</li>
                <li className=' hover:bg-red-600 text-base font-medium cursor-pointer'>SOCIOS</li>
                <li className=' hover:bg-red-600 text-base font-medium cursor-pointer'>POLIDEPORTIVO</li>
                <li className=' hover:bg-red-600 text-base font-medium cursor-pointer'>ENTRADAS</li>
                <li className=' hover:bg-red-600 text-base font-medium cursor-pointer'>MULTIMEDIA</li>
                <li className=' hover:bg-red-600 text-base font-medium cursor-pointer'> RIVER ID</li>
                <li className=' hover:bg-red-600 text-base font-medium cursor-pointer'><FaSearch /></li>
            </ul>
        </div >
    )
}
