import React from 'react'
import { EvenPhoto } from './EvenPhoto'
import { OddPhoto } from './OddPhoto'
import principal from '../Images/principal1.jpg'
import principal2 from '../Images/principal2.jpg'
import image from '../Images/secundaria1.jpg'


export const Main = () => {
  return (
    <div>
      <OddPhoto img={principal} title='River ganó bien y estiró la diferencia en lo más alto' />
      <OddPhoto img={principal2} title="Demichelis: 'Fuimos justos merecedores del triunfo'" />
      <EvenPhoto img={image} title='El gol de De La Cruz ante Defensa y Justicia' title2='VIDEO – El resumen del 1-0 en el Mâs Monumental' img2={image} />
      {/* <OddPhoto />
      <EvenPhoto /> */}


    </div>
  )
}
