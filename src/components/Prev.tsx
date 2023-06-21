import React from 'react'
import '../App.css'
interface prevProps {
    team: string
    team2: string
    img: string
    img2: string
    certamen: string
    info: string
}

export const Prev = ({ certamen, info, img, img2, team, team2 }: prevProps) => {
    return (
        <div>
            <span>{certamen}</span>
            <span>{info}</span>
            <div className='flex flex-row'>
                <div className='flex flex-row mr-6'>
                    <img src={img} className='mr-3' alt="" />
                    <img src={img2} alt="" />
                </div>
                <div>
                    <span>{team}1</span>
                    <span>VS</span>
                    <h2>{team2}0</h2>

                </div>
            </div>
            <span className='bould-gray ml-3 pr-12 hover:bg-red-500 hover:text-white hover:cursor-pointer'>VER DETALLES DEL PARTIDO</span>
        </div>
    )
}
