import React from 'react'
import '../App.css'
interface evenPhotoProps {
    img: string
    title: string
    img2: string
    title2: string
}


export const EvenPhoto = ({ img, title, title2, img2 }: evenPhotoProps) => {
    return (
        <div className='flex flex-row'>
            <div className='mr-2 border-b border-b-black mt-2'>
                <span className=' bould-futbol py-2 px-1'>FÚTBOL PROFESIONAL</span>
                <img src={img} alt="" />
                <a><h2 className='text-xl font-bold'>{title}</h2></a>
            </div>
            <div className='ml-2 border-b border-b-black mt-2'>
                <span className='bould-futbol py-2 px-1'>FUTBOL PROFESIONAL</span>
                <img src={img2} alt="" />
                <a><h2 className='text-xl font-bold'>{title2}</h2></a>
            </div>
        </div>
    )
}


