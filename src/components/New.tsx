import React from 'react'
import "../App.css"

interface newProps {
    title: string
    text?: string
    img: string
}

export const New = ({ title, text, img }: newProps) => {
    return (
        <div className='border-t border-t-black mt-2 '>
            <h1 className="text-red-600 text-base">{title}</h1>
            <p className='text-xs'>{text}</p>
            <img src={img} alt="noticia" />

        </div>
    )
}
