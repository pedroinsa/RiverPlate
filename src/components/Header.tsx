import React from 'react'
import adidas from '../Images/adidas.png'
import codere from '../Images/codere.png'
import mas from '../Images/mas.png'
import directv from '../Images/directv.png'
import assist from '../Images/assist.png'
import argentina from '../Images/argentina.png'
import "../App.css"
export const Header = () => {
    return (
        <header>
            <ul className='flex flex-row justify-around'>
                <li className='pt-3 px-6'></li>
                <li className='text-black text-xs pt-4 px-6 font-mono'>SOMOS RIVER</li>
                <li className='text-black text-xs pt-4 px-6' >TIENDA RIVER</li>
                <li className='text-black text-xs pt-4 px-6'>FUNDACION RIVER</li>
                <li className='text-black text-xs pt-4 px-6'>PATROCINADORES</li>
                <li className='pt-3 px-6'>
                    <a><img src={adidas}></img></a>
                </li>
                <li className='pt-3 px-6'>
                    <a><img src={codere}></img></a>
                </li>
                <li className='pt-3 px-6'>
                    <a><img src={mas}></img></a>
                </li>
                <li className='pt-3 px-6'> <a href=""><img src={directv} alt="" /></a></li>
                <li className='pt-3 px-6'><a href=""><img src={assist} alt="" /></a></li>
                <li className='pt-3 px-6'>
                    <img src={argentina}></img>
                </li>

            </ul>


        </header>
    )
}
