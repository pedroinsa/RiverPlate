import React from 'react'
interface nextProps {
    team: string
    team2: string
    img: string
    img2: string
    certamen: string
    info: string
}

export const Next = ({ img, img2, team, team2, certamen, info }: nextProps) => {
    return (
        <div>
            <span>{certamen}</span>
            <span>{info}</span>
            <div className='flex flex-row'>
                <div className='flex flex-row mr-6'>
                    <img className='mr-3' src={img} alt="" />
                    <img src={img2} alt="" />
                </div>
                <div>
                    <span>{team}</span>
                    <span>VS</span>
                    <h2>{team2}</h2>

                </div>
            </div>
        </div>
    )
}
