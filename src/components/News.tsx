import React from 'react'
import { New } from './New'
import { Main } from './Main'
import { Scores } from './Scores'
import "../App.css"
import image1 from '../Images/image1.jpg'
import image2 from '../Images/image2.jpg'
import image3 from '../Images/image3.jpg'
import image4 from '../Images/image4.jpg'
import image5 from '../Images/image5.jpg'
import image6 from '../Images/image6.jpg'
import uno from '../Images/uno.gif'
import dos from '../Images/dos.gif'
import tres from '../Images/tres.gif'
import cuatro from '../Images/cuatro.gif'
import cinco from '../Images/cinco.gif'
type news = { title: string, text?: string, img: string }[]

const array: news = [{
    title: "Venta de entradas - River vs. Instituto (LPF 2023)", text: "Información sobre venta a Socios, Somos River para el partido que se disputará el jueves 22 de junio en el Mâs Monumental"

    , img: image1
},
{ title: "Los chicos de River, campeones en Italia", text: "La Categoría 2012 se consagró en el certamen en Italia tras vencer en la final al Milan.", img: image2 },
{ title: "Ciclo de cursos y capacitaciones 2023", text: "A través del Área de Capacitación del Club, River organiza una serie de cursos y capacitaciones para socios. CAPACITACIONES GRATUITAS Los programas se..", img: image3 },
{
    title:
        '"Un Siglo de Héroes", en el Museo River', text: "La exhibición fotográfica de Leandro Allochis, bajo el lema “Fútbol, identidad y mitología en las camisetas de River Plate”, tendrá lugar del 9 de junio al 15 de agosto de 2023.", img: image4
}, { title: "Acuerdo entre River Plate y la AABE", img: image5 }, { title: "Buen triunfo para cerrar la fase regular", text: "River cerró esta etapa de la Superliga A con una importante victoria sobre Ferro y comenzó a enfocarse en los playoffs.", img: image6 }]

export const News = () => {
    return (
        <div className='grid grid-cols-6'>
            <div className='ml-10 mt-9'>
                <h2 className='text-lg'>Noticias del Club</h2>
                {array.map((elemento, i) => <New key={i} title={elemento.title} text={elemento.text} img={elemento.img} />)}
            </div>
            <div className='col-span-3 ml-7 mt-9'>
                <span className='text-lg'>Noticias principales</span>
                <a className='text-red-600 mx-3'>VER TODAS LAS NOTICIAS</a>
                <Main />
            </div>
            <div className='col-span-2 ml-7 mt-9'>
                <div>
                    <span className='text-lg'>Partidos</span>
                    <a className='text-red-600 ml-7'>Ver calendario completo</a>
                    <Scores />
                </div>
                <div>
                    <div className='mt-8'>
                        <img src={uno} alt="" />
                    </div>
                    <div className='mt-8'>
                        <img src={dos} alt="" />
                    </div>
                    <div className='mt-8'>
                        <img src={tres} alt="" />
                    </div>
                    <div className='mt-8'>
                        <img src={cuatro} alt="" />
                    </div>
                    <div className='mt-8'>
                        <img src={cinco} alt="" />
                    </div>
                </div>

            </div>


        </div>
    )
}
