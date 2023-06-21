import React from 'react'
import '../App.css'
interface oddPhotoProps {
    img: string
    title: string
}

export const OddPhoto = ({ img, title }: oddPhotoProps) => {
    return (
        <div className="border-b border-b-black mt-2">
            <img src={img} alt="" />
            <span className='bould-futbol py-1 px-1'>FÚTBOL PROFESIONAL</span>
            <a><h1 className='text-xl font-bold'>{title}</h1></a>
        </div>
    )
}
