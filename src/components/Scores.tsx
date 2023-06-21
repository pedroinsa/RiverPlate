import React from 'react'
import { Next } from './Next'
import { Prev } from './Prev'
import '../App.css'
import river from '../Images/escudoriver.png'
import dyj from '../Images/dyj.png'
import iacc from '../Images/instituto.png'
import strongest from '../Images/strongest.png'

export const Scores = () => {
    return (
        <div className='border-xxs'>
            <Prev team="River Plate" team2="Defensa y Justicia" img={river} img2={dyj} certamen='Torneo LPF 2023' info='Sáb. 17/06/23 - 21' />
            <Next team='River Plate' team2='Instituto' img={river} img2={iacc} certamen='Torneo LPF 2023' info='Jue. 22/06/23 - 19.45' />
            <Next team='River Plate' team2='The Strongest (Bol.)' img={river} img2={strongest} certamen='CONMEBOL Libertadores' info='Mar. 27/06/23 - 21' />

        </div>
    )
}
